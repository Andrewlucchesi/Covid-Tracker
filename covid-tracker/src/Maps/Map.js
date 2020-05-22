import React, {Component, useState} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import countryLoc from './Country'
// import {fetchCountryData} from '../api'

const mapStyles = {
  width: '80%',
  height: '70%',
};




export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
    this.state = { countryLoc, 
                  isOpen: false,
                  showingInfoWindow: false,
                  activeMarker: {},
                  selectedPlace: {},
                  Disabled: true,
                  countryData: props.CountryData,
                };
    console.log(this.state.countryData);
  }

  componentDidMount() {
    this.setState({
      Disabled: false
    })
  }
  getInitialState() {
    return {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: "",
    }
  }

  onMarkerClick(props, marker, e) {
    
    for(const country of this.state.countryData)
    {
      if(country.CountryCode == props.country)
      {
        console.log(country.Country);
        let text =  "Total Cases: " + country.TotalConfirmed + "\n Total Deaths: " + country.TotalDeaths;

        this.setState({
          
          selectedPlace: text,
          activeMarker: marker,
          showingInfoWindow: true
        });
        return;
      }
    }
    
  }

  onClose = props => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  displayMarkers = () => {
    return this.state.countryLoc.map((location, index) => {
      return [
        <Marker 
          key={index} 
          id={index} 
          position={{
            lat: location.latitude,
            lng: location.longitude
          }}
          onClick={this.onMarkerClick}
          
          country={location.countryCode}
          
        // onClick={() => console.log("Hello")}
        >
          
         </Marker>,
        <InfoWindow
          onCloseClick={this.onClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          
          >
            <div>
              <h4>{this.state.selectedPlace}</h4>
            </div>
          
          </InfoWindow>  
      ]
      
      

    })
  }

  

  render() {
    if((this.state.Disabled))
      {
        return null;
      }
    return (
        <Map
          google={this.props.google}
          zoom={1}
          style={mapStyles}
          initialCenter={{ lat: 39.8283, lng: -98.5795}}
        >
          {this.displayMarkers()}
        </Map> 
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCW_Vioa3QR3TUnN6MuFdprCqabI055FZk'
})(MapContainer);