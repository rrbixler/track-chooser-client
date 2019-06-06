import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { Link } from 'react-router-dom'

const authenticatedOptions = (
  <React.Fragment>
    <Nav.Link href="#tracks">Tracks</Nav.Link>
    <NavDropdown drop="left" title="Account" id="nav-dropdown-align-right">
      <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
    </NavDropdown>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Nav.Link href="#home">Home</Nav.Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <Navbar collapseOnSelect bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="the-title">Track Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { alwaysOptions }
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
