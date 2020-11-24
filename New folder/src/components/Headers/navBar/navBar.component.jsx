import React from 'react';
import { Navbar, Row, Col, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

const NavBar = () => {
  return (
    // <Container>
    <Row className="w-100 m-0 p-0">
      <Col lg={12} md={6} className="p-0" >
        <Navbar className="opacity h-110px">
          <Container>
            <Nav.Link className="w-10p" to="/">
              <div className="d-flex flex-column align-items-center">
                <div className="w-75">
                  <img className="w-100 h-100" src={require('../../../assets/logo.png')} />
                </div>
              </div>
            </Nav.Link>
            <div className="w-60">
              <Nav className="mr-auto d-flex justify-content-between w-100" >
                <Nav.Link className="font-weight-bold" href="#home" style={{ color: 'white' }}>
                  Home
                </Nav.Link>
                <Nav.Link className="font-weight-bold" href="/teams" style={{ color: 'white' }}>
                  Team
                </Nav.Link>
                <Nav.Link className="font-weight-bold" href="/players" style={{ color: 'white' }}>
                  Players
                </Nav.Link>
                <Nav.Link className="font-weight-bold" href="/aboutus" style={{ color: 'white' }}>
                  About Us
                </Nav.Link>
                <Nav.Link className="font-weight-bold" href="/ranking" style={{ color: 'white' }}>
                  Ranking
                </Nav.Link>
                <Nav.Link className="font-weight-bold" href="#pricing" style={{ color: 'white' }}>
                  Officals
                </Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </Col>
    </Row>
    // </Container>
  );
};

export default NavBar;
