import React from 'react'
// import { Link } from 'react-router-dom'
// import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navv = () => (
  <Navbar collapseOnSelect bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="auto">
        <Nav.Link href="#tracks">All Tracks</Nav.Link>
        <Nav.Link href="#track-create">Create New Track</Nav.Link>
        <Nav.Link href="#search-tracks">Search Track</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navv
