import React, { Component } from 'react';
import Apartments from '../Pages/apartments';
import getApts from '../api';
import {
  Col,
  Button,
  Grid,
  PageHeader,
  Row,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

class ApartmentCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <Grid>
      <Row>
        <Col xs={12}>
          <ListGroup>
              <ListGroupItem >
                <h4>
                  <span className='apartment-address'>
                    {this.props.apartment.address}
                  </span>
                  - <small className='apartment-city'>{this.props.apartment.city} </small>
                </h4>
              </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
    </Grid>

    );
  }
}

export default ApartmentCard;
