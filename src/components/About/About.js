import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <>
          <Container>
            <div className="p-5 bg-success mt-3">
            <Row>
                <Col lg={6}>
                  <div className="p-3 ">
                  <h1>We Offer<br/>
                    Reliable <span style={{color:'orange'}}>HealthCare</span> 
                    </h1>
                    <p>Discover Health Insurances Australia At Asksly! - Easily Found! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily. Types: Products Online, Instant Results, Big Variaty, 24/7 Accessible</p>
                    <button className="btn btn-warning">Go Back Home</button>
                  </div>
                </Col>
                <Col lg={6}>
                <div>
                    <img src="http://health.templines.org/wp-content/uploads/2018/07/about1.png" className="img-fluid"alt="" />
                </div>
                
                </Col>
            </Row>
            </div>
            
        </Container>  
        </>
    );
};

export default About;