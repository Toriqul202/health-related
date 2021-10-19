import React from 'react';
import { Link } from 'react-router-dom';

const SampleService = ({service}) => {
    const {name,img,description,id}=service
    const url= `/services/${id}` 
    return (
        <div className="col-lg-3">
    <div className="card text-center">
    <img src={img} className="" height="250px" width="100%" alt=""/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description?.slice(0,100)}</p>
      <Link to={url}> <button className="btn btn-primary">Detail</button></Link>
     
      </div>
      </div>
    </div>
    );
};

export default SampleService;