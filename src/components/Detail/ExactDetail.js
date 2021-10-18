import React from 'react';
import { Link } from 'react-router-dom';

const ExactDetail = (props) => {
    const {name,img,description}=props.service
    return (
        <>
      <div className="card">
            
            <img src={img} className="img-fluid" alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <Link to="/services"><button className="btn btn-warning">Go Services</button></Link>
            </div>
        </div>
        </>
    );
};

export default ExactDetail;