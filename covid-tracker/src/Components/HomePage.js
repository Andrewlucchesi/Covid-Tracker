import React, { Component } from 'react';

const divStyle = {
    font: "Times New Roman",
    justifyWeight: 'bold'
}
class HomePage extends Component {
    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 'bold',
                fontFamily: 'Times New Roman',
                lineHeight: 10,
                fontSize: 50
            }}>
                CoronaTracker
            </div>
        )
    }
}

export default HomePage;