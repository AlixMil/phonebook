import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../App.css'

export default function InsertContact(props) {
  const [state, setState] = useState({
    name: '',
    surName: '',
    number: ''
  });
  return (
    <Form>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control onChange={(e) => {
                setState(prevState => {
                  return ({
                    name: e.target.value,
                    surName: prevState.surName,
                    number: prevState.number
                  })
                });
              }} type="contactName" placeholder="name contact"/>
            </Col>
            <Col>
              <Form.Control onChange={(e) => {
                setState(prevState => {
                  return {
                    name: prevState.name,
                    surName: e.target.value,
                    number: prevState.number
                  }
                });
              }} type="contactSurName" placeholder="sur name contact"/>
            </Col>
            <Col>
             <Form.Control onChange={(e) => {
                setState(prevState => {
                  return {
                    name: prevState.name,
                    surName: e.target.value,
                    number: prevState.number
                  }
                });
              }} type="contactNumber" placeholder="number contact"/>
            </Col>
            <Col>
              <Button onClick={() => props.handleAdd(state.name, state.surName, state.number)}>Add</Button>
            </Col>
          </Row>
        </Form.Group>
      
    </Form>
  )
}