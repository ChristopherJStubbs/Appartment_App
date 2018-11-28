import React, { Component } from 'react';
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

  render() {
    console.log(this.props)
    return (

      <Grid>
      <Row>
        <Col xs={12}>
          <ListGroup>
          {this.props.apartments.map((apartment) =>{
            return (
              <ListGroupItem >
                <h4>
                  <span className='dog-name'>
                    {apartment.address}
                  </span>
                  - <small className='apartment-age'>{apartment.city} </small>
                </h4>
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </Col>
    </Row>

    </Grid>

    );
  }
}

export default ApartmentCard;
