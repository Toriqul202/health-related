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
        <div className="row">
            
              {
                services.filter(service=>service.type=="Sample").map(service=><SampleService
                   key={service.id} service={service}
                 ></SampleService>)
              }
           
        </div>
    );
};

export default Services;