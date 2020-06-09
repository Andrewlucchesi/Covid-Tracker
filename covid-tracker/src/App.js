import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import { fetchCountryData, fetchTestingLocs } from './api'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Testing from './components/Testing'
import Report from './components/Report'
import Newcases from './components/Newcases'

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
    const TestingLocs = await fetchTestingLocs();

    this.setState({ 
      CountryData: CountryData,
      Disabled: false,
      TestingLocs: TestingLocs});
  }

  render () {  
    if((this.state.Disabled)){
      return <div></div>;
    }

    const { reports } = this.props;
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

//86400000 is 1 day in ms
var beginningDate = Date.now() - 86400000;
var beginningDateObject = new Date(beginningDate);

//firestoreConnect triggers firebase-state to update when firebase collection changes
export default compose(connect(mapStateToProps),
  firestoreConnect([{
    collection: 'reports', 
    where:['reportedAt', '>', beginningDateObject]
  }])
)(App)