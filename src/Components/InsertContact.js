import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../App.css'

export default function InsertContact(props) {
  return (
    <Form>
      
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="contactName" placeholder="name contact"/>
            </Col>
            <Col>
              <Form.Control type="contactSurName" placeholder="sur name contact"/>
            </Col>
            <Col>
             <Form.Control type="contactNumber" placeholder="number contact"/>
            </Col>
            <Col>
              <Button>Add</Button>
            </Col>
          </Row>
        </Form.Group>
      
    </Form>
  )
}