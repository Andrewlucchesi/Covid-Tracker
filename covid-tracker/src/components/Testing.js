import React, {Component} from 'react';

class Testing extends Component {
  constructor (props) {
    super(props);
    this.state = {
      TestingLocs: props.TestingLocs.data,
      value: '',
      showText: false
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

  displayTestingLocs = () => {
    if(!this.state.showText){
      return(
        <tbody></tbody>
      )
    }

    let table = [];
    let cityFound = false;
    
    for(const testLoc of this.state.TestingLocs){
      let address = (testLoc.physical_address)[0];

      if(!address.city)
        continue;
      if(((address.city).toLowerCase()) === (this.state.value).toLowerCase()){
        cityFound = true;
        let children = [];
        let key = address.id;

        children.push(<td>{testLoc.name}</td>);
        children.push(<td>{address.address_1}</td>);
        children.push(<td>{address.city}</td>);
        children.push(<td>{address.postal_code}</td>);
        table.push(<tbody><tr key={key}>{children}</tr></tbody>);
      }
    }

    if(!cityFound){
      return(
        <tbody>
        <tr>
          <td>Sorry we couldn't find any testing locations in that city</td>
          </tr>
        </tbody>
      )
    }
    else{
      return table;
    }  
  }
  
  render() {
    return (
      <div className="container">
        <h4 className="center">Search for Testing Locations in California</h4>
        <form onSubmit={ this.handleSubmit }>  
          <div className="input-field"> 
            <label htmlFor="city">Enter a city in California</label>
              {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
              <input type="text" onChange={this.handleChange} />
          </div>
          <input type="submit" value="Search for Covid-19 Testing Location" />
        </form>
        <table>{this.displayTestingLocs()}</table>
      </div>
    )
  }
}


export default Testing;