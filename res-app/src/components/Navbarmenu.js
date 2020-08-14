import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome ,faList, faPlus , faSearch} from '@fortawesome/free-solid-svg-icons'
import {Navbar,Nav} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
class Navbarmenu extends Component { 

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/"><FontAwesomeIcon icon={faHome}/>Home</Nav.Link>
      <Nav.Link href="/Create"><FontAwesomeIcon icon={faPlus}/>Create</Nav.Link>
      <Nav.Link href="/List"><FontAwesomeIcon icon={faList}/>List</Nav.Link>
      <Nav.Link href="/Search"><FontAwesomeIcon icon={faSearch}/>Search</Nav.Link>
      
      {
          localStorage.getItem('login') ?
          <Nav.Link href="/Logout"><FontAwesomeIcon icon={faUser}/>Logout</Nav.Link>
          :
          <Nav.Link href="/Login"><FontAwesomeIcon icon={faUser}/>Login</Nav.Link>
      }
      </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
        );
    }
}

export default Navbarmenu;