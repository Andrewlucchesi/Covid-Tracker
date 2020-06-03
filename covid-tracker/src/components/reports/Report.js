import React, { Component } from 'react'
import ReportList from './ReportList' //Report list displays table with report data
import Checkbox from '../../Symptom/Checkbox'
import DoughnutChart from '../../Symptom/DoughnutChart'
import { submitReport } from '../../store/actions/reportActions'

import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

class Report extends Component {

    state = {}

    handleChange =(e) => {
        this.setState({
            [e.target.id]: e.target.value
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
          <h4 className="center">Report Symptom</h4>
          <h5> If you or someone in your immediate family has contracted covid-19, you may use this page to report a diagnosis. </h5>
          <p>This will be used to help track cases as they spread through local communities</p>
          
          <form onSubmit={ this.handleSubmit }>
            <label>Describe your symptom(s):</label>
            <Checkbox onChange={this.handleChange} />  
            <div className="input-field"> 
              <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" onChange={this.handleChange} />
            </div>
            <div className="input-field">     
              <label htmlFor="Zipcode">Zipcode</label>
                <input type="number" id="zip" name="zip" onChange={this.handleChange} />
            </div>
            <div className="input_field">
              <label htmlFor="country">Country Code</label>
                <input type="text" id="Country_Code" name="country" onChange={this.handleChange} />
            </div>
            <input type="submit" value="Report Case of Covid-19" />
          </form>

          <h4 className="center">Reported Data</h4>
          <h6>Recently Reported Cases (Past 24 Hours):</h6>   
          <ReportList reports={reports} />  
          <DoughnutChart />
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

//86400000 is 1 day in ms
var beginningDate = Date.now() - 86400000;
var beginningDateObject = new Date(beginningDate);

//firestoreConnect listens to firebase, and updates store accordiningly
export default compose(connect(mapStateToProps, mapDispatchToProps),
firestoreConnect([
    {collection: 'reports', where:['reportedAt', '>', beginningDateObject] } 
]
))(Report)