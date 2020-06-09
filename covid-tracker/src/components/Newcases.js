import React, { Component } from 'react'
import Map from '../Maps/Map'

class Newcases extends Component {
  constructor(props){
    console.log(props.Data);
    super(props);
    let NewData = [];
    let CountryStats = {};
    let entries = {};
    
    //If no props.Data exists, forces browser back to homepage (prevents crash)
    if(!props.Data){
      this.props.history.replace('/');
      window.location.reload(false);
    }

    for(const entry of props.Data){
      if(entry.id in entries)
        continue;
      
      if('Country_Code' in entry){
        let country = entry.Country_Code;
        let id = entry.id;
        entries[id] = country;
        if(country in CountryStats){
          CountryStats[country] = CountryStats[country] + 1;
        }
        else{
          CountryStats[country] = 1;
        }
      }
    }

    for(const country in CountryStats){
      let NewDataEntry = {};
      NewDataEntry.CountryCode = country;
      NewDataEntry.TotalConfirmed = CountryStats[country];
      NewDataEntry.TotalDeaths = 0;
      NewData.push(NewDataEntry);
    }
    
    this.state = {
      cases: props.Data,
      Data: NewData,
      value: '',
      showText: false,
      showMap: false,
      showTable: false,
    }
  }

  handleChange =(e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit =(e) => {
    this.setState({
      showText: true
    })
    e.preventDefault();
  }

  displayCityCases = () => {

    if(!this.state.showText){
      return( 
        <tbody></tbody>
      )
    }

    let table = [];
    let cityFound = false;
    let caseCount = 0;
    let IDs = {};

    for(const entry of this.state.cases){
      let city = entry.city;
      if(city === undefined)
        continue;

      if(((city).toLowerCase()) === (this.state.value).toLowerCase()){
        cityFound = true;
        let children = [];
        let key = entry.id;

        if(key in IDs){
          continue;
        }
        else{
          IDs[key] = city;
        }

        children.push(<td>{entry.city}</td>);
        children.push(<td>{entry.zip}</td>);
        table.push(<tbody><tr key={key}>{children}</tr></tbody>);
        caseCount++;
      }

      if(caseCount >= 10){
        break;
      }
    }

    if(!cityFound){
      return(
        <tbody>
          <tr>
            <td>No recently reported cases in that city!</td>
          </tr>
        </tbody>
      )
    }
    else{
      return table;
    }
  }

  onClickMap = () => {
    this.setState({
      showMap: !this.state.showMap,
      showTable: false
    })
  }

  onClickTable = () => {
    this.setState({
      showTable: !this.state.showTable,
      showMap: false
    })
  }

  displayTable = () => {
    return (
      <div className="container">
        <h4 className="center">Search for Recently Reported Cases</h4>
          <p>Limited to last 10 reported cases</p>
          <form onSubmit={ this.handleSubmit }>  
            <div className="input-field"> 
              <label htmlFor="city">Search by city</label>
              <input type="text" onChange={this.handleChange} />
            </div>
            <input type="submit" value="Search for Recently Reported Cases" />
          </form>
          <table>{this.displayCityCases()}</table>
      </div>
    )
  }
  render () {
    return (
      <div>
        <h5 className="center">Choose a map of recent cases by country or search for recent cases by city</h5>
        <button onClick={this.onClickMap}>Map</button>
        <button onClick={this.onClickTable}>Search by City</button>
        {this.state.showMap && <Map CountryData={this.state.Data}/>}
        {this.state.showTable && this.displayTable()}
      </div>
    )
  }
}

export default Newcases
