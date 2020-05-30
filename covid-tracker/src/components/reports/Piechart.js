import React, { Component } from 'react'
import Pie from 'react-chartjs-2';

class Piechart extends Component {

  constructor(props){
    super(props)
    this.state = {
      labels: ['Fever', 'Cough'],
      datasets: [{
        data: [1, 1, 1],
        backgroundColor: ['red', 'blue']
      }]
    }
  }

  render() {
    return (
      <div>
        <h1>Chart</h1>
        <Pie
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets
          }}
          height='50%'
        />
        <br />
      </div>
    )
  }
}

export default Piechart