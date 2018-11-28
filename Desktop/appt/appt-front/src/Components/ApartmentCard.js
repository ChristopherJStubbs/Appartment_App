import React, { Component } from 'react';

class ApartmentCard extends Component {
  render() {
    let {address, city, zip, state} = this.props.info
    return (
      <main>
        Apartment List
          <div className="cardLayout">
          {address}
          </div>
      </main>
    );
  }
}

export default ApartmentCard;
