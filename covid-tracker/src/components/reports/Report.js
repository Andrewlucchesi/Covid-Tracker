import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitReport } from '../../store/actions/reportActions'
import ReportList from './ReportList' //Report list displays table with report data
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

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
          <h5 className="center">Report Case</h5>
          <p>If you or someone in your immediate family has contracted covid-19, you may use this page to report a diagnosis. </p>
          <p>This will be used to help track cases as they spread through local communities</p>
          
          <form onSubmit={ this.handleSubmit }> 
              <label>Describe your symptom(s):</label>
              
              <p>
                <label>
                  <input type="checkbox" id="fever" onChange={this.handleChange} />
                  <span>Fever</span>
                </label>
              </p>

              <p>
                <label>
                  <input type="checkbox" id="cough" onChange={this.handleChange} />
                  <span>Cough</span>
                </label>
              </p>

              <p>
                <label>
                  <input type="checkbox" id="soreThroat" onChange={this.handleChange} />
                  <span>Sore Throat</span>
                </label>
              </p>

              <p>
                <label>
                  <input type="checkbox" id="breath" onChange={this.handleChange} />
                  <span>Shortness of breath</span>
                </label>
              </p>

              <p>
                <label>
                  <input type="checkbox" id="fatigue" onChange={this.handleChange} />
                  <span>Fatigue</span>
                </label>
              </p>

              <p>
                <label>
                  <input type="checkbox" id="taste" onChange={this.handleChange} />
                  <span>New Loss of taste or smell</span>
                </label>
              </p>
              
              <p>
                <label>
                  <input type="checkbox" id="muscle" onChange={this.handleChange} />
                  <span>Muscle Aches</span>
                </label>
              </p>

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