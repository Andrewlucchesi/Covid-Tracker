import React, { Component } from 'react';
import { fetchData, fetchCountryData, fetchUSACountyData } from './api'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Cases from './components/Cases'
import Info from './components/Info'
import Report from './components/Report'


class App extends Component{
  state = {
    data: {},
    CountryData: {},
    countyData: {},
  }

  async componentDidMount() {
    
    const CountryData = await fetchCountryData();
    this.setState({ CountryData: CountryData});
    
  }
  render () {  
    
    console.log(this.state.countyData.message);
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/cases' component={Cases} />
            <Route 
              path='/info' 
              render={(props) => <Info {...props} CountryData={this.state.CountryData} />}
            />
            <Route path='/report' component={Report} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
