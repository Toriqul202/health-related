import React from 'react';

const Service = (props) => {
    const {name,img,description}=props.service
    return (
        <div className="col-lg-3">
    <div className="card text-center">
    <img src={img} class="card-img-top" height="250px" alt=""/>
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <p className="card-text">{description?.slice(0,100)}</p>
      
      </div>
      </div>
    </div>
    );
};

export default Service;