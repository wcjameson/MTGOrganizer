import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (

    <React.Fragment>
      <h1>MTGOrganizer</h1>
      <Navbar.Brand href='/'> Home </Navbar.Brand>
      <Navbar.Brand href='/signin'> Account/Sign In </Navbar.Brand>

      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Account</Link>
        </li>
      </ul> */}
    </React.Fragment>
  )
}

export default Header;