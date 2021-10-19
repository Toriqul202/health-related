
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {setIsLoading,error,handlePass,handleSignIn,googleSignIn, gitHandle,handleEmailChange}=useAuth()
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
           <div className="row p-3">
               <div className="col-lg-4">

               </div>
               <div className="col-lg-4 p-3 bg-warning">
               <h2 className="text-center">Please Login</h2>
               <form onSubmit={handleSignIn}>
              
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" onBlur={ handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" onBlur={handlePass} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        
                        
                      <button type="submit " className="btn btn-primary btn-lg btn-block">Submit</button>
                      <br/>
                      <br/>
                      <h4>
                          <Link to="/registar" className="text-danger " style={{textDecoration:'none'}}>
                              New User
                         </Link>
                    </h4>
              </form>
              <div className="text-center ">
            <h4>-------------- or---------------</h4> 
              <button className="btn btn-dark btn-lg btn-block  text-center" onClick={handleGit}>Login With Github</button>
              <br/>
              <br/>
                <button className="btn btn-danger btn-lg btn-block  text-center" onClick={handleGoogleLogin}>Login With Google</button>
              </div>
             
              <h3>{error}</h3>
               </div>
               <div className="col-lg-4">

               </div>
               
               
              
           </div>
           
        </>
    );
};

export default Login;