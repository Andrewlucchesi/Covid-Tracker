import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitReport } from '../../store/actions/reportActions'
import ReportList from './ReportList' //Report list displays table with report data

class Report extends Component {

    state = {
        name: '',
        symptom: '',
        city: '',
        zip: ''
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
    render () {
        return (
            <div className="container">
                <h4 className="center">Report Symptom</h4>
                <form onSubmit={ this.handleSubmit }>
                    <div className="input-field">
                    <label htmlFor="symptom">Do you have covid-19?</label>
                        <input type="text" id="symptom" name="symptom" onChange={this.handleChange} />
                    </div>    
                    <div className="input-field"> 
                    <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">     
                    <label htmlFor="symptom">Zipcode</label>
                        <input type="number" id="zip" name="zip" onChange={this.handleChange} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            <ReportList/>  
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return{
        reports: state.report.reports
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitReport: (report) => dispatch(submitReport(report))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)