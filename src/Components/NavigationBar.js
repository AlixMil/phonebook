import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import '../App.css';

export default function NavigationBar(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">PhoneBook</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="https://github.com/AlixMil/phonebook">GitHub</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  )
}