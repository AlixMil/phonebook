import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../App.css'

export default function InsertContact(props) {
  // const [state, setState] = useState({
  //   name: '',
  //   surName: '',
  //   number: ''
  // });
  const inputEl1 = useRef(null);
  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  return (
    <Form>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control ref={inputEl1} type="contactName" placeholder="name contact"/>
            </Col>
            <Col>
              <Form.Control ref={inputEl2} type="contactSurName" placeholder="surname contact"/>
            </Col>
            <Col>
             <Form.Control ref={inputEl3} type="contactNumber" placeholder="number contact"/>
            </Col>
            <Col>
              <Button onClick={() => props.handleAdd(inputEl1.current.value, inputEl2.current.value, inputEl3.current.value)}>Add</Button>
            </Col>
          </Row>
        </Form.Group>
    </Form>
  )
}