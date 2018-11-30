import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Apartments from './Pages/apartments';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/home';
import AuthService from './api/index.js';
import Signup from './Pages/signup';
import CreateApartments from './Pages/CreateApartments'
import LogIn from './Pages/login';
import About from './Pages/about';
import Show from './Pages/show';
import { getApts } from './api'

class App extends Component {
  constructor(props) {
    super(props)
    this.auth = new AuthService()
    this.state = {
      loggedIn: this.auth.loggedIn(),
      apts: []
    }
  }
  // componentDidMount() {
  //       getApts()
  //       .then(APIapts => {
  //           this.setState({
  //               apt: APIapts
  //           });
  //       })
  //   }

  render() {
    console.log(this.state.apts)
    return (
      <div className = "BigDivDaddy">
        <div>
          <Header />
				      <Router>
					      {(this.auth.loggedIn())
					// if logged in
					? <Switch>
            <Route exact path="/apartments/new" component={CreateApartments} />
            <Route exact path ="/apartments/:id" component={Show} />
            <Route exact path="/home" component={Home} />
            <Route exact path ="/about" component={About} />
            <Route exact path="/apartments" component={Apartments} />
            <Redirect from ='/Signup' to="/apartments" />
            <Redirect from ='/login' to="/apartments/new" />
					</Switch>
					// if not logged in (ie Guest User)
					: <Switch>
            <Route exact path ="/apartments/:id" component={Show} />
						<Route exact path="/home" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/apartments" component={Apartments} />
						<Redirect from="/apartments/new" to="/signup" />
            <Route exact path ="/login" render={(props) => <LogIn updateStatus={this.updateStatus}/>} />
            <Route exact path ="/about" component={About} />
					</Switch>}
				</Router>
        </div>
			</div>
    );
  }

  updateStatus = () => {
    this.setState({loggedIn: this.auth.loggedIn()})
  }
}

export default App;
