import { MDBCol, MDBContainer, MDBFooter, MDBRow } from 'mdbreact';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div >
            <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4"className="p-5">
            <h5 className="title">Footer Content</h5>
            <p>
            We manufacture and market a wide range of branded generic medicines covering almost all therapeutic classes such as antibiotics, anti-ulcerents, Cardiovascular, NSAIDs, anti-diabetics, antipsychotic, antiviral, vitamins and minerals etc. offering different dosage forms like Solid Tablets, Capsules, Small volume Parenteral (SVPs), Dry powder for Suspensions, Cream and Ointments, Metered-dose Inhalers (MDIs), Ophthalmic products, and Prefilled Syringe for Biogenerics etc
            </p>
          </MDBCol>
          <MDBCol md="4" className="p-5">
            <h3 className="title">Useful Links</h3>
            <ul className="ps-0">
              <li className="list-unstyled">
                <Link to="/">Home</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/about">About</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/services">Services</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/contact">Contact</Link>
              </li>
            
             
            </ul>
          </MDBCol>
          <MDBCol md="4"className="p-5">
            <img className="img-fluid h-100" src="https://skillstraining.edu.au/wp-content/uploads/2018/09/500x500-1492558433.nursing-blog-main-image.jpg" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: I Health Care
        </MDBContainer>
      </div>
    </MDBFooter>
            </div>
        </div>
    );
};

export default Footer;