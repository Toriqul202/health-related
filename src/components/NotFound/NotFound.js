import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="">
          <div className="d-flex justify-content-center">
            <img src="https://image.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg" alt="" />
          </div>
          <div className="d-flex justify-content-center">
              <Link to="/"><button className="btn btn-warning text-center">Go Back</button></Link>
           
          </div>
          
        </div>
    );
};

export default NotFound;