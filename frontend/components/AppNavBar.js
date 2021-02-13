import React from "react";
import {Navbar, Nav, NavItem, Form, FormControl, Button} from 'react-bootstrap';

const AppNavBar = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#home">The Meme Machine</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#recent">recent</Nav.Link>
          <Nav.Link href="#top">top memes</Nav.Link>
          <Nav.Link href="#create">create</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      </>
  );
};

export default AppNavBar;
