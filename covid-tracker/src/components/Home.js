import React, { Component } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import Map from '../Maps/Map'
  
const mapStyles = {
  width: '80%',
  height: '50%'
};

// export class MapContainer extends Component {
class Home extends Component {
  state = {
    content: ''
  };

  constructor(props) {
    super(props)
    this.options = countryList().getData()
    this.state = {
      options: this.options,
      value: null,
    }
  }  

  render () {
    return (
      <div className="container">
        <label>
          <Select
            options={this.state.options}
            value={this.state.value}
            onChange={this.changeHandler}
          />
        </label>
        <Map 
          google={this.props.google}
          zoom={1}
          style={mapStyles}
          initialCenter={{ lat: 34.069479, lng: -118.445222 }}
        />
      </div>
    )
  }
}
export default Home