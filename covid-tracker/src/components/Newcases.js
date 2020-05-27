import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Map from '../Maps/Map'

class MapContainer extends Component {
    render() {
        return (
            <div className="container">
              <Link to="/" style={{ marginRight: 10 }}></Link>
              <Map CountryData={this.state.CountryData}/>
            </div>
          )
      }
    }
    
    export default GoogleApiWrapper({
      apiKey: 'AIzaSyCW_Vioa3QR3TUnN6MuFdprCqabI055FZk'
    })(MapContainer);
