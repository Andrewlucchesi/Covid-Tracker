import React, { Component } from 'react';
import {  fetchCountryData, fetchTestingLocs, fetchUSACountyData } from './api'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
// import Cases from './components/Cases'
// import Info from './components/Info'
import Testing from './components/Testing'
import Report from './components/reports/Report'
import Newcases from './components/Newcases'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'



class App extends Component{
    state = {
      CountryData: [],
      CountyData: [],
      TestingLocs: [],
      Disabled: true,
      Reports: [],
  }

  
componentDidMount = async () => {
    
    const CountryData = await fetchCountryData();
    const CountyData = await fetchUSACountyData();
    const TestingLocs = await fetchTestingLocs();
    this.setState({ CountryData: CountryData,
                    Disabled: false,
                    CountyData: CountyData,
                    TestingLocs: TestingLocs});
  }

  render () {  
    if((this.state.Disabled)){
        return <div></div>;
      }
    const { reports } = this.props;
    console.log(reports);
    return (
      <BrowserRouter >
        <div className="App">
          <Navbar />
            <Route 
              exact path='/'
              render={(props) => <Home {...props} CountryData={this.state.CountryData} />} 
            />
            <Route
              path='/testing' 
              render={(props) => <Testing {...props} TestingLocs = {this.state.TestingLocs} />}
              />
            <Route
              path='/newcases'
              render={(props) => <Newcases {...props} Data={reports} />}
              /> 

             <Route path='/report' component={Report} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      reports: state.firestore.ordered.reports
  }
}

//firestoreConnect triggers firebase-state to update when firebase collection changes
export default compose(connect(mapStateToProps),
firestoreConnect([
  {collection: 'reports'} 
]
))(App)

