import React, { Component } from 'react'

class Home extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            content: ''
        })
    }
    render () {
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <form onSubmit={ this.handleSubmit }>
                    <label>
                        Enter zipcode:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                    <p>(Put map below.)</p>
                </form>
            </div>
        )
    }
}
export default Home