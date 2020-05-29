import React, { Component } from 'react';
import {  fetchCountryData, fetchTestingLocs, fetchUSACountyData } from './api'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Cases from './components/Cases'
import Info from './components/Info'
import Testing from './components/Testing'
import Report from './components/reports/Report'

class App extends Component{
  
    
    state = {
      CountryData: [],
      CountyData: [],
      TestingLocs: [],
      Disabled: true,
  }

  

  async componentDidMount() {
    
    const CountryData = await fetchCountryData();
    const CountyData = await fetchUSACountyData();
    const TestingLocs = await fetchTestingLocs();
    
    console.log(CountryData);
    this.setState({ CountryData: CountryData,
                    Disabled: false,
                    CountyData: CountyData,
                    TestingLocs: TestingLocs});
  }
  render () {  
    if((this.state.Disabled))
      {
        return <div></div>;
      }
    
    return (
      
      <BrowserRouter >
        <div className="App">
          <Navbar />
            <Route 
              exact path='/'
              render={(props) => <Home {...props} CountryData={this.state.CountryData} />} 
              />
            
            <Route path='/cases' component={Cases} />
            <Route 
              path='/info' 
              render={(props) => <Info {...props} CountryData={this.state.CountryData} CountyData={this.state.CountyData} />}
            />
            <Route
              path='/testing' 
              render={(props) => <Testing {...props} TestingLocs = {this.state.TestingLocs} />}
              />

            <Route path='/report' component={Report} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App; 
