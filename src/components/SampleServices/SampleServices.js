import React, { useEffect, useState } from 'react';
import SampleService from '../SampleService/SampleService';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{

        fetch(`services.json`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container">
            <h1 className="my-4 mt-5 p-2 text-center">Our Latest <span style={{color:"red"}}>Health Care</span>  Services</h1>
            
            <div className="row gy-5">
            {
                services.filter(service=>service.type==="Sample").map(service=><SampleService
                   key={service.id} service={service}
                 ></SampleService>)
              }
            </div>
           
        </div>
    );
};

export default Services;