import React, { Component } from 'react'

class Info extends Component {
    render () {
        return (
            <div className="container">
                <h4 className="center">Information</h4>
                <form onSubmit={ this.handleSubmit }>
                    <label>
                        Enter zipcode:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                    <p>Here are the nearest location:</p>
                    <p>(List places here)</p>
                </form>  
            </div>
        )
    }
}

export default Info

