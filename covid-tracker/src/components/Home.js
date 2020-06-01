import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Map from '../Maps/Map'

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
        <h4 className="center">Search for Total Cases by Country</h4>
            
          {/* <form onSubmit={ this.handleSubmit } >  
            <div className="input-field"> 
              <label htmlFor="country" style={{ marginBottom: 100}} >Enter a country</label>
              <input type="text" />
            </div>
            <input type="submit" value="Search for total cases" />
          </form>     */}

        <Link to="/" style={{ marginRight: 10 }}></Link>
        <Map CountryData={this.state.CountryData} />
      </div>
    )
  }
}
export default Home