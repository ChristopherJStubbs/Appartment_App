import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Apartments from './pages/apartments';
import CreateApartments from './pages/createApartments';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import AuthService from './services';

class App extends Component {
  render() {
    let auth = new AuthService()

    return (
      <div>
				<Router>
					{(auth.loggedIn())
					// if logged in
					? <Switch>
						<Route path="/createApartments" component={CreateApartments} />
            <Route path="/apartments" component={Apartments} />
					</Switch>
					// if not logged in (ie Guest User)
					: <Switch>
						<Route path="/home" component={Home} />
            <Route path="/signup" component={Signup} />
						<Redirect from="/createApartments" to="/signup" />
            <Redirect from="/apartments" to="/signup" />
					</Switch>}
				</Router>
			</div>
    );
  }
}

export default App;
