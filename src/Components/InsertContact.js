import React from 'react';
import { Form } from 'react-bootstrap';
import '../App.css'

export default function InsertContact(props) {
  return (
    <Form>
      <Form.Control type="contact" placeholder="name contact"/>
    </Form>
  )
}