import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Registar = () => {
    const {handleName,handleEmailChange,handleReg,handlePass,setIsLoading,gitHandle,error,googleSignIn}=useAuth()
    const location=useLocation()
            
            const history=useHistory()
            const redirect_url=location.state?.from || '/'
    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(result=>{
            setIsLoading(false)
            history.push(redirect_url)
            console.log(result)
            
            
        })
        
    }
    const handleGit=()=>{
        gitHandle()
        .then(result=>{
            setIsLoading(false)
            history.push(redirect_url)
            console.log(result)
            
            
        })
    }
    return (
        <>
          <div className="row">
              <div className="col-lg-4">

              </div>
              <div className="col-lg-4 bg-warning p-3">
              <h2 className="text-center">Please Registar</h2>
               <form onSubmit={handleReg}>
               <div className="form-group">
                            <label htmlFor="exampleName">Your Name</label>
                            <input type="text" onBlur={ handleName} className="form-control" id="exampleName"  placeholder="Your Name"/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" onBlur={ handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" onBlur={handlePass} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        
                        
                      <button type="submit" className="btn btn-primary btb-lg btn-block">Submit</button>
                     <h4>
                       <Link to="/login" className="text-danger" style={{textDecoration:'none'}} >Already Account?</Link>
                    </h4> 
              </form>
              <div className="text-center ">
            <h4>-------------- or---------------</h4> 
              <button className="btn btn-dark btn-lg btn-block  text-center" onClick={handleGit}>Signup With Github</button>
              <br/>
              <br/>
                <button className="btn btn-danger btn-lg btn-block  text-center" onClick={handleGoogleLogin}>Signup With Google</button>
              </div>
             
              <h3>{error}</h3>
              </div>
              <div className="col-lg-4">

              </div>
              
              
         </div>  
        </>
    );
};

export default Registar;