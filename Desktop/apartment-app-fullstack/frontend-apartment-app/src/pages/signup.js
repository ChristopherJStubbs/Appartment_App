import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AuthService from '../services'

class Signup extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      signupSuccess: false,
      
    }
  }
  render() {
    let { firstName, lastName, email, password } = this.state.form.user
    return (
      <div>
        <h1>This is the Sign Up Page</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.onChange}
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
          />
        </form>
      </div>

    )
  }
}

export default Signup;
