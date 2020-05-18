import React, { Component } from 'react'
import Map from '../Maps/Map'

const mapStyles = {
  width: '80%',
  height: '50%'
};

class Info extends Component {
  render () {
    return (
      <div className="container">
        <h5 className="center"></h5>
        <form onSubmit={ this.handleSubmit }>
        <label>
          Enter zipcode:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <p>Here are the nearest location:</p>
        </form>
        <Map
          google={this.props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{ lat: 34.069479, lng: -118.445222 }}
        />
      </div>
    )
  }
}

export default Info