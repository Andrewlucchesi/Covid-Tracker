import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitReport } from '../../store/actions/reportActions'
import ReportList from './ReportList' //Report list displays table with report data
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { render } from 'react-dom';
import Checkbox from './Checkbox'

const SYMPTOMS = ["Fever", "Cough", "Sore Throat", "Shortness of breath", "Fatigue", "New Loss of taste or smell","Muscle Aches"];

class Report extends Component {
  
    constructor(props) {
      super(props);
      this.state = { checked: false }
      this.handleCheck = this.handleCheck.bind(this);
    }

    state = {
      city: '',
      zip: '',
      checkboxes: SYMPTOMS.reduce(
        (symptoms, symptom) => ({
          ...symptoms,
          [symptom]: false
        }),
        {}
      )
    };

    handleCheck(e){
      this.setState({
        checked: e.target.checked
      })
    }

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

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
    
        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
          }
        }));
      };

    createCheckbox = option => (
        <Checkbox
          label={option}
          isSelected={this.state.checkboxes[option]}
          onCheckboxChange={this.handleCheckboxChange}
          key={option}
        />
      );
      
    createCheckboxes = () => SYMPTOMS.map(this.createCheckbox);

    render () {
      const { reports } = this.props;
      return (
            
        <div className="container">
          <h5 className="center">Report Symptom</h5>
          <p> If you or someone in your immediate family has contracted covid-19, you may use this page to report a diagnosis. </p>
          <p>This will be used to help track cases as they spread through local communities</p>
          
          <form onSubmit={ this.handleSubmit }> 
            {this.createCheckboxes()} 
              <div>
                <input
                  id ="checkbox_id"
                  type="checkbox"
                  checked={this.state.checked}
                  onChange={this.handleCheck}
                />
                <label htmlFor="checkbox_id"></label>
              </div>

              <div className="input-field"> 
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" onChange={this.handleChange} />
              </div>

              <div className="input-field">     
                <label htmlFor="symptom">Zipcode</label>
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

render(<Checkbox />, document.getElementById('root'));
