import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch, Link} from 'react-router-dom'
import Report from './components/Report'
import ViewCases from './components/ViewCases'
import HomePage from './components/HomePage'
import FindTestLoc from './components/FindTestLoc'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <div className="App">
      
          <Navbar />
          <Switch>
            <Route path='/Report' render={() => <Report/>}/>
            <Route path='/FindTestLoc' render={() => <FindTestLoc/>}/>
            <Route path='/ViewCases' render={() => <ViewCases/>}/>
            <Route path='/HomePage' render={() => <HomePage/>}/>
            <Route path='/' render={() => <div></div>}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;