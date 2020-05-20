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
      CountryData: [],
      CountyData: [],
      Disabled: true,
  }

  

  async componentDidMount() {
    
    const CountryData = await fetchCountryData();
    const CountyData = await fetchUSACountyData();
    console.log(CountyData);
    this.setState({ CountryData: CountryData,
                    Disabled: false,
                    CountyData: CountyData});
    console.log(this.state.CountyData);
    console.log(this.state.CountryData);
  }
  render () {  
    if((this.state.Disabled))
      {
        return null;
      }
    
    return (
      
      <BrowserRouter >
        <div className="App">
          <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/cases' component={Cases} />
            <Route 
              path='/info' 
              render={(props) => <Info {...props} CountryData={this.state.CountryData} CountyData={this.state.CountyData} />}
            />
            <Route path='/report' component={Report} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
