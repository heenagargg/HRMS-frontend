import React, { useState } from "react";
import "./Login.css";
import "../../App.css";
import "../../index.css";
import SignupBg from "../../assets/bg.png";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router";
import HrVerify from "../HrVerify/HrVerify";
const Login = () => {
    const navigate=useNavigate()
  const [passwordType, setPasswordType] = useState("password");
  const [formValues,setFormValues]=useState({
    email:'',
    password:''
  })
    const [isHrVerifiedProcessing,setIsHrVerifiedProcessing]=useState(false)
    const [isHrVerified,setIsHrVerified]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formValues)
    setIsHrVerifiedProcessing(true)

    //hit api to get what the role of user is , if it is hr show popup and if not , just redirect to dashboard.
    // if it is verified and is success then close the popup and redirect the user to dashboard
    // otherwise redirect them to login page.
    // and remove this setTimeOut code
    setTimeout(() => {
        setIsHrVerifiedProcessing(false)
        setIsHrVerified(true)
        navigate('/')
    }, 3000);
  }
  const handleInputChange=(e)=>{
console.log(e.target.value)  
const {name,value}=e.target
setFormValues((prev)=>({
    ...prev,
    [name]:value
}))
}
  return (
    <div className="login-page-container">
         {isHrVerifiedProcessing && <HrVerify/>}
      <div className="login-image-div">
        <img src={SignupBg} alt="bg" />
      </div>
      <div className="login-form-container">
        <div className="login-form-div">
          <div className="login-title">
            <h1>Log In</h1>
          </div>
          <form className="login-form" onSubmit={(e)=>handleSubmit(e)}>
            <div className="login-email-div">
              <input type="text" placeholder="Email Address" name="email" value={formValues.email} onChange={((e)=>handleInputChange(e))}/>
            </div>
              <div className="login-password-div">
                <input type={passwordType} placeholder="Password" name="password" value={formValues.password} onChange={((e)=>handleInputChange(e))}/>
                {passwordType === "password" ? (
                  <FaEyeSlash
                    className="eye-icon pass-hidden"
                    onClick={() => setPasswordType("text")}
                  />
                ) : (
                  <FaEye
                    className="eye-icon"
                    onClick={() => setPasswordType("password")}
                  />
                )}
              </div>
          
            <button>Login</button>
          </form>
          <div className="login-info-div">
            Don't have an account? <span className="login-link" onClick={()=>navigate('/')}>Signup</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
