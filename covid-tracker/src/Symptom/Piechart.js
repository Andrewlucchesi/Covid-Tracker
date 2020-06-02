import React, { Component } from 'react'
import Doughnut from 'react-chartjs-2'

const data = {
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
    data: [1, 3, 5, 2, 4, 3, 2],
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
};

const option = {
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        var dataset = data.datasets[tooltipItem.datasetIndex];
        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
        var total = meta.total;
        var currentValue = dataset.data[tooltipItem.index];
        var percentage = parseFloat((currentValue/total*100).toFixed(1));
        return currentValue + ' (' + percentage + '%)';
        // return percentage+ '%';
      },
      title: function(tooltipItem, data) {
        return data.labels[tooltipItem[0].index];
      }
    }
  }
}

class DoughnutChart extends Component {

  render() {
    return (
      <div>
        <hr  style={{ color: '#9e9e9e', height: .1,}}/>
        <h6>Symptom Statistics:</h6>
        {/* <Pie
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets
          }}
        /> */}
        <Doughnut data={data} options={option} />
        {/* <br /> */}
      </div>
    )
  }
}

export default DoughnutChart