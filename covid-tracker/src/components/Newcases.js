import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Map from '../Maps/Map'


const mapStyles = {
  width: '80%',
  height: '50%'
};

class Newcases extends Component {
  
  constructor(props){
    console.log(props.Data);
    super(props);
    let NewData = [];
    let CountryStats = {};
    

    for(const entry of props.Data)
    {
      if('Country_Code' in entry)
      {
        
        let country = entry.Country_Code;
        if(country in CountryStats)
        {
          CountryStats[country] = CountryStats[country] + 1;
        }
        else
        {
          CountryStats[country] = 1;
        }
      }
    }

    for(const country in CountryStats)
    {
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
  if(!this.state.showText)
  {
    return(
      <p></p>
    )
  }

  let table = [];
  let cityFound = false;
  let caseCount = 0;
  for(const entry of this.state.cases)
  {
    let city = entry.city;
    if(((city).toLowerCase()) === (this.state.value).toLowerCase())
    {
            cityFound = true;
            let children = [];
            let key = entry.id
            children.push(<td>{entry.city}</td>);
            children.push(<td>{entry.zip}</td>);
            table.push(<tr key={key}>{children}</tr>);
            caseCount++;
    }

    if(caseCount >= 10)
      {
        break;
      }
  }

  if(!cityFound)
    {
        return(
            <p>No recently reported cases in that city!</p>
        )
    }
    else
    {
        return table;
    }
}

onClickMap = (e) => {
  this.setState({
    showMap: !this.state.showMap,
    showTable: false
  })
}

onClickTable = (e) => {
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
                         <input type="text" value={this.state.value} onChange={this.handleChange} />
                     </div>
                     <input type="submit" value="Search for Recently Reported Cases" />
                   
                 </form>
                 <table>
                     {this.displayCityCases()}
                 </table>
       </div>
  )
}
  render () {
    let isMap = true;
    let isTable = false;
    return (
      <div>
      <p>Choose a map of recent cases by country or search for recent cases by city</p>
      <div>
        <button onClick={this.onClickMap}>Map</button>
      </div>
      <div>
        <button onClick={this.onClickTable}>Search by City</button>
      </div>
      {this.state.showMap && <Map CountryData={this.state.Data}/>}
      {this.state.showTable && this.displayTable()}
      </div>
      
      
      
    )
  }
}

export default Newcases
