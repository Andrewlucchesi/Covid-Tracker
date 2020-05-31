import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Map from '../Maps/Map'

// const mapStyles = {
//   width: '80%',
//   height: '50%'
// };

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.options,
      value: null,
      CountryData: props.CountryData,
    }
  }  

  render () {
    return (
      <div className="container">
        <h5 className="center">Search for Total Cases by Country</h5>
            
          <form onSubmit={ this.handleSubmit } >  
            <div className="input-field"> 
              <label htmlFor="city" style={{ marginBottom: 100}} >Enter a country</label>
              <input type="text" />
            </div>
            <input type="submit" value="Search for total cases" />
          </form>    

        <Link to="/" style={{ marginRight: 10 }}></Link>
        <Map CountryData={this.state.CountryData} />
      </div>
    )
  }
}
export default Home