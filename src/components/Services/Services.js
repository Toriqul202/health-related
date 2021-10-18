import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
         fetch('services.json')
         .then(res=>res.json())
         .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className="text-center">See Our All Services</h1>
            <div className="container">
                <div className="row g-4">
                    {
                         services.map(service=><Service key={service.key} service={service}></Service>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Services;