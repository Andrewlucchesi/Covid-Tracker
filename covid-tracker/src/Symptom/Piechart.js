import React, { Component } from 'react'
import Pie from 'react-chartjs-2'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

//Check if arrays are equal
var arraysMatch = function (arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};

class Piechart extends Component {
  countType(type) {
    const countTypes = this.props.fevers.filter(
      fever => fever.media_type === type
    );
    return countTypes.length;
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.stats){const statArray = [
      this.props.stats.breathCount,
      this.props.stats.coughCount,
      this.props.stats.fatigueCount,
      this.props.stats.feverCount,
      this.props.stats.muscleCount,
      this.props.stats.soreThroatCount,
      this.props.stats.tasteCount
    ]
    if (!arraysMatch(prevState.datasets[0].data, statArray)){
      this.setState(prevState =>{
       return{ datasets: [{ 
          ...prevState.datasets[0], 
          data: statArray
        }]};
      }); 
    }}}; 
 
  constructor(props){
    super(props)
      this.state = {
        labels: [
          'Shortness of breath', 
          'Cough',
          'Fatigue',
          'Fever',
          'Muscle Aches',  
          'Sore Throat', 
          'New Loss of taste or smell',
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
    var reportTotal = ""
    if(this.props.stats)
      reportTotal =this.props.stats.reportCount;
    return (
      <div>
        <b>Total Number of Reports: {reportTotal} </b> 
        <hr  style={{ color: '#9e9e9e', height: .1,}}/>
        <h6>Symptom Statistics:</h6>
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

const mapStateToProps = (state) => {
  return {
    stats: state.firestore.data['stats']
  }
} 

export default compose(connect(mapStateToProps),
firestoreConnect([
    {collection: 'reports', doc: '--stats--', storeAs: 'stats'} 
]
))(Piechart)