import React, { Component } from 'react'
import { connect } from 'react-redux'
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
        console.log(this.state)
    }
    render () {
        return (
            <div className="container">
                <h4 className="center">Report Symptom</h4>
                <form onSubmit={ this.handleSubmit }>
                    <div className="input-field">
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" id="name" name ="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="symptom">Do you have a symptom?</label>
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

export default connect(mapStateToProps)(Report)