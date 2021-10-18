import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ExactDetail from './ExactDetail';

const Detail = () => {
    const {detail}=useParams()
    const [data,setData]=useState([])
    useEffect(()=>{
       fetch(`/services.json`)
       .then(res=>res.json())
       .then(data=>setData(data))
    },[])
   
    console.log(data?.name);
    return (

    <div className="container p-3">
          <div className="row d-flex justify-content-center">
           
            <div className="col-lg-3   mt-2 text-center">
            {
               data.filter(service=>service.id== detail).map(service=> <ExactDetail key={service.key} service={service}></ExactDetail>    )
           }
            </div>
           
          
        </div>
    </div>
     
    );
};


export default Detail;