import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../api/index.js';
import {
  Button
} from 'react-bootstrap'
class LogIn extends Component {
  constructor(props) {
    super(props)


    this.auth = new AuthService()
    this.state = {
      form: {
        user: {
          email: '',
          password: ''
        }
      },
      loginSuccess: false
    }
  }

  render() {
    let { email, password } = this.state.form
    return (
      <main>
          Login Here
          <br/>
          <br/>
          <form onSubmit={this.onSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={this.onChange}
          />
          <br/>
          <br/>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={this.onChange}
          />
        </form>
        <br/>
        <a  className="btn btn-primary btn-sm" onClick={this.onSubmit} >Submit</a>
          {this.state.loginSuccess &&
            <Redirect to='/apartments/new' />
            }
      </main>
      );
  }

  onChange = (e) => {
    let { form } = this.state
    console.log(this.state)
    form.user[e.target.name] = e.target.value

    this.setState({ form })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.form)
    this.auth.login(this.state.form)
    .then(json => {
      console.log("Got to second then:", json)
      if(json.errors) {
        this.setState({
          errors: json.errors
        })
      }
      this.props.updateStatus()
      this.setState({
        loginSuccess: true
      })
    })
  }

}

export default LogIn;
