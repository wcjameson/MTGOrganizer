import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (

    <React.Fragment>
      <h1>MTGOrganizer</h1>
      {/* <Navbar.Brand href='/'> Home </Navbar.Brand>
      <Navbar.Brand href='/signin'> Account/Sign In </Navbar.Brand> */}

      {/* <Navbar bg = "dark" variant = "dark" >
      <Container>
        <Navbar.Brand>MTGOrganizer</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/signin'>Account</Nav.Link>
        </Nav>
      </Container>
  </Navbar > */}

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Account</Link>
        </li>
      </ul>
    </React.Fragment>
  )
}

export default Header;