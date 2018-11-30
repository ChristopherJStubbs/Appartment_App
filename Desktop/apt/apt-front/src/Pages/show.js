import React, { Component } from 'react';
import { getApt } from '../api';

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartment: undefined
    }
  }
  render() {
    let apartment = this.state.apartment
    if(apartment === undefined){
      console.log(apartment)
      return(
        <div>
        Loading...
        </div>
      )
    } else {
    return (
      <main>
      <div className = "AddressDiv">
        <h1> {apartment.address} </h1>
        <div> Unit: {apartment.unit} </div>
        <div> City: {apartment.city} </div>
        <div> Zip Code: {apartment.zip} </div>
        <div> State: {apartment.state} </div>
        <div> Country: {apartment.country} </div>
        <div> Manger Name: {apartment.manager_name} </div>
        <div> Manager Phone #: {apartment.manager_phone_number} </div>
        <div> Hours of Contact: {apartment.manager_hours} </div>
      </div>

        </main>
      )
    }
  }
    componentDidMount(){
    const id = this.props.match.params.id
    console.log(id)
    getApt(id)
    .then(apartment => {
      this.setState({apartment})
    })
  }

}

export default Show;
