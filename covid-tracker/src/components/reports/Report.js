import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitReport } from '../../store/actions/reportActions'
import ReportList from './ReportList' //Report list displays table with report data

class Report extends Component {

    state = {
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
                <h7> If you or someone in your immediate family has contracted covid-19,
                    you may use this page to report a diagnosis. </h7>
                <p>This will be used to help track cases as they spread through local communities</p>
                <form onSubmit={ this.handleSubmit }>  
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