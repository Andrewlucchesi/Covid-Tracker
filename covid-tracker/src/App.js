import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Cases from './components/Cases'
import Info from './components/Info'
import Report from './components/Report'

class App extends Component{
  render () {  
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/cases' component={Cases} />
            <Route path='/info' component={Info} />
            <Route path='/report' component={Report} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
