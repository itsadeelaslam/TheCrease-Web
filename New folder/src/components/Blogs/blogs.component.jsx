import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';

const Blogs = () => {
  return (
    <Container style={{marginTop: '20px'}}>
      <Row>
        <Col md={12} lg={6}>
          <div className="border-none p-2" style={{ backgroundColor: '#282C2F', borderRadius: '15px', color: 'whitesmoke'}}>
            <h3 style={{color: 'white'}}>Most Recent</h3>
            <div className="h-270px">
              <img className="w-100 h-100" src={require('../../assets/blogs.jpg')} />
            </div>
            <div style={{marginTop: '7px', paddingBottom: '5px'}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolore
              mollitia, exercitationem dignissimos cum consequatur delectus ut quisquam quo quod in
              eos at aliquid? Veniam impedit deserunt accusamus ipsam officia!
            </div>
            <div className="d-flex justify-content-between">
              <div className="border-none font-weight-bold d-flex justify-content-center">
                <p className="m-0 p-0">Tornament Name</p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="m-0 p-0 font-weight-bold">29/09/2019</p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="border-none p-2" style={{backgroundColor: '#282C2F', borderRadius: '15px', color: 'whitesmoke'}}>
            <h5 style={{color: 'white'}}>2nd Recent</h5>
            <div className="h-180px">
              <img className="w-100 h-100" src={require('../../assets/blogs.jpg')} />
            </div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            <div className="d-flex justify-content-between">
              <div className="border-none d-flex justify-content-center font-weight-bold">
                <p className="m-0 p-0 ">Tornament Name</p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="m-0 p-0 font-weight-bold">29/09/2019</p>
              </div>
            </div>
          </div>
          <div className="border-none p-2" style={{marginTop: '5px',backgroundColor: '#282C2F', borderRadius: '15px', color: 'whitesmoke'}}>
            <h5 style={{color: 'white'}}>2nd Recent</h5>
            <div className="h-180px">
              <img className="w-100 h-100" src={require('../../assets/blogs.jpg')} />
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolore
              mollitia
            </div>
            <div className="d-flex justify-content-between">
              <div className="border-none d-flex justify-content-center">
                <p className="m-0 p-0 font-weight-bold">Tornament Name</p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="m-0 p-0 font-weight-bold">29/09/2019</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
