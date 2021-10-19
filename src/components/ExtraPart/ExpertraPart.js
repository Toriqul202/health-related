import React from 'react';
import { Link } from 'react-router-dom';

const ExpertPart = () => {
    return (
        <div className="container bg-dark p-5 pb-0 mt-5">
        <div className="row">
            <div className="col-lg-6">
                <img src="http://html.kodesolution.live/f/drpoint/2.1/demo/images/about/3.png" alt="" />
            </div>
            <div className="col-lg-6 p-5 text-white">
                <p style={{color:'red'}}>I Health Care </p>           
              <h2 style={{fontSize:'45px'}}>Get any time <br/>Any moment 24/7</h2>
              <p>Discover Health Insurances Australia At Asksly! - Easily Found! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily. Types: Products Online, Instant Results, Big Variaty, 24/7 Accessible</p>
             
               <button className="btn btn-danger">Get Help</button>
             
             

            </div>
        </div>
     </div>
    );
};

export default ExpertPart;