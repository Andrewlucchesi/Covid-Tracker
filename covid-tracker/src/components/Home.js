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
        <Link to="/" style={{ marginRight: 10 }}></Link>
        <Map CountryData={this.state.CountryData} />
      </div>
    )
  }
}
export default Home