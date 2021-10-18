import React from 'react';

const SampleService = ({service}) => {
    const {name,img,description}=service
    return (
        <div className="col-lg-3">
    <div className="card text-center">
    <img src={img} class="" height="250px" width="100%" alt=""/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description?.slice(0,100)}</p>
     
      <button className="btn btn-primary">Detail {name}</button>
      </div>
      </div>
    </div>
    );
};

export default SampleService;