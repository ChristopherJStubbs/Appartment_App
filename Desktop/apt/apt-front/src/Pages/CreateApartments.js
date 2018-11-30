import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { createApt } from '../api'
import {Form, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'

class CreateApartments extends Component {
    constructor(props) {
      super(props)
      this.state = {
        form: {
          Address: '',
          Unit: '',
          Zip: '',
          City: '',
          State: '',
          Country: '',
          manager_name: '',
          manager_phone_number: '',
          manager_hours: ''
        },
        newAptSuccess: false
      }
    }

  handleChange(event){
  let {form } = this.state
  form[event.target.name] = event.target.value
  this.setState({form: form})
  }

  handleChange2 = (e) => {
    e.preventDefault()
    this.handleNewApt(this.state.form)
  }

  handleNewApt = (NewApt) => {
    createApt(NewApt)
    .then(successApt => {
      this.setState({
        newAptSuccess: true
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <main>
        Create Apartments Page,
        You should be seeing this only if you are logged in.
        <div>
          <Form>
      <fieldset>
        <legend>Add Apartments</legend>
        <FormGroup>
          <ControlLabel id="Address">Address</ControlLabel>
            <FormControl
              type="text"
              name="Address"
              placeholder="Address"
              required
              onChange={this.handleChange.bind(this)}
              value={this.state.form.Address}
            />
        </FormGroup>
        <FormGroup>
          <ControlLabel id="unit">Unit</ControlLabel>
            <FormControl
              type="text"
              name="unit"
              placeholder="Unit"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.unit}
            />
        </FormGroup>
        <FormGroup>
          <ControlLabel id="zip">Zip Code</ControlLabel>
            <FormControl
              type="integer"
              name="Zip"
              placeholder="Type Here"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.zip}
            />
        </FormGroup>
        <FormGroup>
          <ControlLabel id="city"> City </ControlLabel>
            <FormControl
              type="text"
              name="city"
              placeholder="Type Here"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.city}
            />
        </FormGroup>
        <FormGroup>
          <ControlLabel id="state"> State </ControlLabel>
            <FormControl
              type="text"
              name="state"
              placeholder="Type Here"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.state}
            />
        </FormGroup>
        <FormGroup>
          <ControlLabel id="country"> Country </ControlLabel>
            <FormControl
              type="text"
              name="country"
              placeholder="Type Here"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.country}
            />
        </FormGroup>
        <FormGroup>
          <ControlLabel id="manager_name"> Manager Name </ControlLabel>
            <FormControl
              type="text"
              name="manager_name"
              placeholder="Type Here"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.manager_name}
            />
        </FormGroup>
        <FormGroup>
          <ControlLabel id="manager_phone_number"> Manager Phone Number </ControlLabel>
            <FormControl
              type="text"
              name="manager_phone_number"
              placeholder="Type Here"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.manager_phone_number}
            />
        </FormGroup>
        <FormGroup>
          <ControlLabel id="manager_hours"> Manager Hours Number </ControlLabel>
            <FormControl
              type="text"
              name="manager_hours"
              placeholder="Type Here"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.manager_hours}
            />
        </FormGroup>
        <button onClick={this.handleChange2} type="submit" class="btn btn-primary" id="submit" >Create Apartment</button><br/>
        <button type="reset" class="btn btn-info">Cancel</button>
      </fieldset>
      </Form>
      {this.state.newAptSuccess &&
        <Redirect to='/apartments' />
        }
        </div>
        </main>
      );
  }
}

export default CreateApartments;
