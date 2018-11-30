import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../api/index.js';
import { createUser } from '../api';


class Signup extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      newUserSuccess: false,
      errors: '',
      form: {
        user: {
          FirstName: '',
          LastName: '',
          email: '',
          password: ''
        }
      }

    }
  }
  render() {
    let { FirstName, LastName, email, password} = this.state.form
    return (
      <main>
        <center>
          Register Here
          <br/>
          <br/>
          <form onSubmit={this.onSubmit}>
            <input
              type="First Name"
              name="FirstName"
              value= {FirstName}
              placeholder="First Name"
              onChange={this.onChange}
            />
          <br/>
            <br/>
            <input
              type="Last Name"
              name="LastName"
              value= {LastName}
              placeholder="Last Name"
              onChange={this.onChange}
            />
            <br/>
              <br/>
          <input
            type="email"
            name="email"
            value= {email}
            placeholder="Email"
            onChange={this.onChange}
          />
          <br/>
          <br/>
          <input
            type="password"
            name="password"
            value= {password}
            placeholder="Password"
            onChange={this.onChange}
          />
        </form>
        <br/>
        {this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}
        <button className="btn btn-primary btn-sm" onClick={this.onSubmit}>Register</button>
        {this.state.newUserSuccess &&
          <Redirect to='/apartments' />
          }
        </center>
  			</main>
  		)
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
  		this.auth.register(this.state.form)
  		.then(json => {
  			console.log("Got to second then:", json)
  			if(json.errors) {
  				this.setState({
  					errors: json.errors
  				})
  			}
  			this.setState({
  				newUserSuccess: true
  			})
  		})
  	}
}

export default Signup;
