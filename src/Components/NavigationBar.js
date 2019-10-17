import React, { useRef } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import '../App.css';

export default function NavigationBar(props) {
  const searchLine = useRef(null);
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">PhoneBook</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="https://github.com/AlixMil/phonebook">GitHub</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl ref={searchLine} type="text" placeholder="search" className="mr-sm-2" onChange={() => props.handleSearch(props.data, searchLine.current.value)} />
      </Form>
    </Navbar>
  )
}