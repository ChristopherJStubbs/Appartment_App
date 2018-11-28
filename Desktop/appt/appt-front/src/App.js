import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Apartments from './Pages/apartments';
import Header from './Components/Header';
import Home from './Pages/home';

class App extends Component {
  render() {
    return (
      <div className="Main-Div">
        <Header />
        <div>
            <Router>
                <Switch>
                    <Route exact path='/apartments' component={Apartments} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;
