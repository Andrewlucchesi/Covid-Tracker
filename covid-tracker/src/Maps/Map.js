import React, {Component, useState} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import countryLoc from './Country'
// import {fetchCountryData} from './api'

const mapStyles = {
  width: '80%',
  height: '70%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { countryLoc, isOpen: false }
  }

  // handleToggleOpen = () => {
  //   this.setState({
  //     isOpen: true
  //   });
  // }

  // handleToggleClose = () => {
  //   this.setState({
  //       isOpen: false
  //   });
  // }

  displayMarkers = () => {
    return this.state.countryLoc.map((location, index) => {
      return <Marker 
        key={index} 
        id={index} 
        position={{
          lat: location.latitude,
          lng: location.longitude
        }}
        onClick={() => console.log("You clicked me!")} 
        // onClick={() => this.handleToggleOpen(index)}
      >
      </Marker>
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={1}
          style={mapStyles}
          initialCenter={{ lat: 39.8283, lng: -98.5795}}
        >
          {this.displayMarkers()}
          {/* <Marker
            lat={39.8283}
            lng={-98.5795}
            name="My Marker"
            color="red"
          /> */}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCW_Vioa3QR3TUnN6MuFdprCqabI055FZk'
})(MapContainer);