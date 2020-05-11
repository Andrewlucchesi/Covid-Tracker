import React, { Component } from 'react'

class Report extends Component {
    render () {
        return (
            <div className="container">
                <h4 className="center">Report Symptom</h4>
                <form onSubmit={ this.handleSubmit }>
                    <label>
                        Enter your name:
                        <input type="text" name="name" />
                        Do you have a symptom?
                        <input type="text" name="name" />
                        Enter your city:
                        <input type="text" name="name" />
                        Enter zipcode:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>  
            </div>
        )
    }
}
export default Report