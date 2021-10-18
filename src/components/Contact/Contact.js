import Button from '@restart/ui/esm/Button';
import React from 'react';

const Contact = () => {
    return (
        <div>
             <h2 className="text-center my-3">Get Us Through Contact</h2>
            <div className=" ">
           
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">

                    </div>
                    <div className="col-lg-6 bg-danger p-5 rounded">
                    <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="email" className="form-control" placeholder="Your Email" aria-label="Email" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group">
            <span className="input-group-text">Enter Your Issue</span>
            <textarea  className="form-control" ></textarea>
           

            
            </div> 
            <button className=" btn btn-warning mt-3 ">Submit</button>
                        </div>
                        <div className="col-lg-3">
                        
                        </div>
                </div>
            </div>
         
        </div>
        </div>
    );
};

export default Contact;