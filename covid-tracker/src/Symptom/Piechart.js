import React, { Component } from 'react'
import Pie from 'react-chartjs-2'
// import Symptom from './Symptom'

class Piechart extends Component {
  countType(type) {
    const countTypes = this.props.fevers.filter(
      fever => fever.media_type === type
    );
    return countTypes.length;
  }

  constructor(props){
    super(props)
      this.state = {
        labels: [
            'Fever', 
            'Cough', 
            'Sore Throat', 
            'Shortness of breath', 
            'Fatigue',
            'New Loss of taste or smell',
            'Muscle Aches'
        ],

        datasets: [{
          data: [
            1, 
            1, 
            1, 
            1, 
            1, 
            1, 
            1
          ],

          backgroundColor: [
            '#374c80', 
            '#6e5193', 
            '#9d327f', 
            '#d85085', 
            '#ef5350', 
            '#ff7d42', 
            '#ffa600'
          ]
        }]
      }
  }

  render() {
    return (
      <div>
        <hr  style={{ color: '#9e9e9e', height: .1,}}/>
        <p>Symptom Statistics:</p>
        <Pie
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets
          }}
        />
        <br />
      </div>
    )
  }
}

export default Piechart