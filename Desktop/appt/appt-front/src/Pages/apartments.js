import React, { Component } from 'react';
import { getApts } from '../api';
import ApartmentCard from '../Components/ApartmentCard';

class Apartments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allApts: [
          {
          address: '123 G Street',
          city: 'San Diego',
          zip: 91956,
          state: 'California'
        }
      ]
    }
  }
  render() {
    let apartments = this.state.allApts.map((apartment) => {
      return <ApartmentCard key={apartment.address} id={apartment.address} />
    })
    return (
      <div className="Apartments-Div">
        <h1><center>Apartment List</center></h1>
          <div className="cardLayout">
          {apartments}
          </div>
      </div>
    );
  }
    componentDidMount() {
      getApts()
      .then(APIApts => {
        this.setState({allApts: APIApts})
      })
    }
}

export default Apartments;
