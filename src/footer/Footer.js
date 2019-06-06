import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { Link } from 'react-router-dom'

const authenticatedOptions = (
  <React.Fragment>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Nav.Link href="#">Created by Robbie Bixler</Nav.Link>
  </React.Fragment>
)

const Footer = ({ user }) => (
  <footer className="main-header footer-main">
    <Navbar fixed="bottom" collapseOnSelect bg="success" variant="dark">
      <Navbar.Brand href="#home">helping Djs stay on track</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { user && <Nav.Link href="#"id = "welcome-message">Welcome, {user.email}</Nav.Link>}
          { user ? authenticatedOptions : unauthenticatedOptions }
          { alwaysOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </footer>
)

export default Footer
