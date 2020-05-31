import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Map from '../Maps/Map'
import { firestoreConnect } from 'react-redux-firebase'

class Newcases extends Component {
  
  render() {
    // console.log("Hello");
    // console.log("Hello again");
    return (
      <div className="container">
        {/* <Link to="/newcases" style={{ marginRight: 10 }}></Link> */}
        {/* <Map CountryData={null}/> */}
        <h5 className="center">Search for Recent Cases by Country</h5>
            
        <form onSubmit={ this.handleSubmit } >  
          <div className="input-field"> 
            <label htmlFor="city" style={{ marginBottom: 100}} >Enter a country</label>
            <input type="text" />
          </div>
          <input type="submit" value="Search for recent cases" />
        </form>    

        <Link to="/newcases" style={{ marginRight: 10 }}></Link>
        <Map CountryData={null}/>
      </div>
    )
  }
}
    
export default Newcases;
