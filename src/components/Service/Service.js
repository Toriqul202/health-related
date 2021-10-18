import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name,img,description,id}=props.service
    const url=`/services/${id}`
    return (
        <div className="col-lg-3">
    <div className="card text-center">
    <img src={img} class="card-img-top" height="250px" alt=""/>
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <p className="card-text">{description?.slice(0,100)}</p>
      <Link to={url}><button className="btn btn-primary">Detail </button></Link>
      
      </div>
      </div>
    </div>
    );
};

export default Service;