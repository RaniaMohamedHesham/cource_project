import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'


export default function Header() {
  return (
    <>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand >React_Project</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/movie/popular" className="mx-3">Movies</Link>
      

    </Nav>
    </Container>
  </Navbar>
  </>
    
  )
}

