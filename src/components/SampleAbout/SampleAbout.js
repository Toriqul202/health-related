import React from 'react';
import { Link } from 'react-router-dom';

const SampleAbout = () => {
    return (
        <>
           <div className="container p-3 mt-5">
               <div className="row">
                   <div className="col-lg-6">
                       <img src="http://html.thememascot.net/2021/health/medikx/medikx-html/images/about/5.png" className="img-fluid" alt="" />
                   </div>
                   <div className="col-lg-6 p-5">
                       <p style={{color:'red'}}>About I Health Care</p>           
                     <h2 style={{fontSize:'45px'}}>We Provide Best Medical <br/>Treatment In The World</h2>
                     <p>Discover Health Insurances Australia At Asksly! - Easily Found! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily. Types: Products Online, Instant Results, Big Variaty, 24/7 Accessible</p>
                     <Link to="/about">
                      <button className="btn btn-primary">More Info</button>
                     </Link>
                    

                   </div>
               </div>
            </div> 
        </>
    );
};

export default SampleAbout;