import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '50%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  constructor(props) {
    super(props)
    this.state = {
        stores: [{ lat: 34.06, lng: -118.44 }]
      }
  }

  changeHandler = value => {
      this.setState({ value })
  }

  handleChange = (e) => {
      this.setState({
          content: e.target.value
      })
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
          content: ''
      })
  }

  displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
          lat: store.latitude,
          lng: store.longitude
        }}
        onClick={() => console.log("You clicked me!")} />
      })
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          // zoom={1}
          style={mapStyles}
          initialCenter={{ lat: 34.069479, lng: -118.445222 }}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCW_Vioa3QR3TUnN6MuFdprCqabI055FZk'
})(MapContainer);