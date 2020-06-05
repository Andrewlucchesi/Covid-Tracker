import React, { Component } from 'react'
import Checkbox from '../Symptom/Checkbox'
import DoughnutChart from '../Symptom/DoughnutChart'
import { submitReport } from '../store/actions/reportActions'
import { connect } from 'react-redux'
// import { compose } from 'redux'
// import { firestoreConnect } from 'react-redux-firebase'

class Report extends Component {

    state = {cough: false, fatigue: false, fever: false, taste: false, soreThroat: false, muscle: false, breath: false}

    handleChange =(e) => {
        this.setState({
            [e.target.id]: e.target.value
         })       
    }

    handleCheck =(e) => {
      const field = e.target.id
      this.setState({
        [field]: !this.state[field]
      })
    }

    handleSubmit =(e) => {
        e.preventDefault();
       // console.log(this.state)
       this.props.submitReport(this.state);
       //window.location.reload(false); Caused submission issues
    }

    render () {
      console.log(this.state)
      // const { reports } = this.props;
      return (
            
        <div className="container">
          <h4 className="center">Report Cases / Symptoms</h4>
          <h5> If you or someone in your immediate family has contracted covid-19, you may use this page to report a diagnosis. </h5>
          <p>This will be used to help track cases as they spread through local communities</p>
          
          <form onSubmit={ this.handleSubmit }>
            <label>Describe your symptom(s):</label>
            <Checkbox onChange={this.handleCheck} />  
            <div className="input-field"> 
              <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" onChange={this.handleChange} required />
            </div>
            <div className="input-field">     
              <label htmlFor="Zipcode">Zipcode</label>
                <input type="number" id="zip" name="zip" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="country">Country Code</label>
                <input type="text" id="Country_Code" name="country" onChange={this.handleChange} required/>
            </div>
            <input type="submit" value="Report Case of Covid-19" />
          </form>

          <h4 className="center">Reported Data</h4>
          <DoughnutChart />
        </div> 
      ) 
    }
}

//Dispatches actions to the store: submits report when submit report button is pressed
const mapDispatchToProps = (dispatch) => {
  return {
    submitReport: (report) => dispatch(submitReport(report))
  }
}

//firestoreConnect triggers firebase-state to update when firebase collection changes
//Redux Uses reducers to manage states. 


//firestoreConnect listens to firebase, and updates store accordiningly
export default connect(null,mapDispatchToProps)(Report)