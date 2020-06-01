import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { submitReport } from '../../store/actions/reportActions'

import Checkbox from '../../symptom/Checkbox'
import Piechart from '../../symptom/Piechart'
//Report list displays table with report data
import ReportList from './ReportList' 

class Report extends Component {

  state = {
    city: '', 
    zip: ''
  };

  handleChange =(e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit =(e) => {
    e.preventDefault();
    // console.log(this.state)
    this.props.submitReport(this.state)
  }

  render () {
    const { reports } = this.props;
    return (
            
      <div className="container">
        <h4 className="center">Report Case</h4>
        <h7>If you or someone in your immediate family has contracted covid-19, you may use this page to report a diagnosis.</h7>
        <h7>This will be used to help track cases as they spread through local communities.</h7>

        <form onSubmit={ this.handleSubmit }> 
          <Checkbox />
          <div className="input-field"> 
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" onChange={this.handleChange} />
          </div>
          <div className="input-field">     
            <label htmlFor="zip">Zipcode</label>
            <input type="number" id="zip" name="zip" onChange={this.handleChange} />
          </div>
          <input type="submit" value="Report Case of Covid-19" />
        </form>
        
        <ReportList reports={reports} />  
        <Piechart />
      </div> 
    ) 
  }
}

//Updates props when store changes. Takes reports data from store.
const mapStateToProps = (state) => {
  return {
    reports: state.firestore.ordered.reports
  }
}

//Dispatches actions to the store: submits report when submitreport button is pressed
const mapDispatchToProps = (dispatch) => {
  return {
    submitReport: (report) => dispatch(submitReport(report))
  }
}

//firestoreConnect triggers firebase-state to update when firebase collection changes
//Redux Uses reducers to manage states. 

//firestore connect listens to firebase, and updates store accordining;y
export default compose(connect(mapStateToProps, mapDispatchToProps),
firestoreConnect([
  {collection: 'reports'} 
]
))(Report)