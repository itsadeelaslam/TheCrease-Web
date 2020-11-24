import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#282C2F', marginTop: '20px' }}>
      <Container>
        <Row>
          <Col lg={4} md={12}>
            <div
              style={{ width: '30%' }}
              className="d-flex flex-column justify-content-center align-items-center" >
              <h3 style={{ color: 'white' }}>Blogs</h3>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3 style={{ color: 'white' }}>Blogs</h3>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 style={{ color: 'white' }}>Blogs</h3>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
              <p style={{ color: 'white'}}>Heading 1</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
