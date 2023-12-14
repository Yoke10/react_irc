 import React, { useState } from "react";
 import './loginsignup.css';

  import contact from '../assets/contact.png';
  import email from '../assets/envelope.png';
  import password from '../assets/padlock.png';

 const LoginSignup = ()=>{

      const[action,setAction]=useState("Sign Up");   

    return(
       <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>    
        <div className="inputs">
            {action==="Login"?<div></div>:           
             <div className="input">
                <img src={contact} alt="" className="icon"/>
                <input type="text" placeholder="First name" />
            </div>}
            {action==="Login"?<div></div>:           
             <div className="input">
                <img src={contact} alt="" className="icon"/>
                <input type="text" placeholder="Last name" />
            </div>}

            

            
            <div className="input">
                <img src={email} alt="" className="icon"/>
                <input type="email" placeholder="Email-id" />
            </div>
            
            <div className="input">
                <img src={password} alt="" className="icon"/>
                <input type="password" placeholder="Password"/>
            </div>
            {action==="Login"?<div></div>: <div className="input">
                <img src={password} alt="" className="icon"/>
                <input type="password" placeholder="Confirm password"/>
            </div>}
        </div>
         {action==="Sign Up"?<div></div>:<div className="forgot-password">Forget Password?<span>Click Here!</span></div>}
        
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div> 
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div> 
            </div>
       </div>
    );
 }
 export default LoginSignup;