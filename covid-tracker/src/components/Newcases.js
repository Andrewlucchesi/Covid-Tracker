import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Map from '../Maps/Map'
import { firestoreConnect } from 'react-redux-firebase'

class Newcases extends Component {
  
    render() {
      console.log("Hello");
      console.log("Hello again");
        return (
            <div className="container">
              <Link to="/newcases" style={{ marginRight: 10 }}></Link>
              <Map CountryData={null}/>
              <h4 className="center">Search for Recent Cases by Country</h4>
            <form onSubmit={ this.handleSubmit } >  
                <div className="input-field"> 
                <label htmlFor="city" style={{ marginBottom: 100}} >Enter a country</label>
                    <input type="text" />
                </div>
                <input type="submit" value="Search for recent cases" />
               
            </form>
            
            
            
        </div>
          )
      }
    }
    
export default Newcases;
