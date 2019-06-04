import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Nav.Link href="#tracks">Tracks</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
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
    <Navbar collapseOnSelect bg="dark" expand="md" variant="dark">
      <Navbar.Brand href="#home">Track Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { user && <span>Welcome, {user.email}</span>}
          { user ? authenticatedOptions : unauthenticatedOptions }
          { alwaysOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
