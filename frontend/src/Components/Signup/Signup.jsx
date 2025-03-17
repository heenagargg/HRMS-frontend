import React, { useState } from "react";
import "./Signup.css";
import "../../App.css";
import "../../index.css";
import SignupBg from "../../assets/bg.png";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router";
const Signup = () => {
    const navigate=useNavigate()
    const [formValues,setFormValues]=useState({
        fullName:'',
        email:'',
        contact:'',
        emergencyContact:'',
        address:'',
        role:'',
        teamName:'',
        designation:'',
        password:'',
        cPassword:''
    })
  const [passwordType, setPasswordType] = useState("password");
  const [cPasswordType, setCPasswordType] = useState("password");

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formValues)
    navigate('/login')
  }
  const handleInputChange=(e)=>{
    const {name,value}=e.target
    console.log(e.target.name,e.target.value)
    setFormValues((prev=>({
        ...prev,
        [name]:value
    })))}
   
  return (
    <div className="signup-page-container">
      <div className="signup-image-div">
        <img src={SignupBg} alt="bg" />
      </div>
      <div className="signup-form-container">
        <div className="signup-form-div">
          <div className="signup-title">
            <h1>Sign Up</h1>
          </div>
          <form className="signup-form" onSubmit={(e)=>handleSubmit(e)}>
            <div className="name-email-div">
              <div className="name-div">
                <input type="text" placeholder="Full Name" name="fullName" value={formValues.fullName} onChange={(e)=>handleInputChange(e)}/>
              </div>
              <div className="email-div">
                <input type="text" placeholder="Email Address" name="email" value={formValues.email} onChange={(e)=>handleInputChange(e)}/>
              </div>
            </div>
            <div className="contact-div-container">
              <div className="contact-div">
                <input type="text" placeholder="Contact Number" name="contact" value={formValues.contact} onChange={(e)=>handleInputChange(e)}/>
              </div>
              <div className="contact-div">
                <input type="text" placeholder="Emergency Contact" name="emergencyContact" value={formValues.emergencyContact} onChange={(e)=>handleInputChange(e)}/>
              </div>
            </div>
            <div className="address-div">
              <input type="text" placeholder="Address" name="address" value={formValues.address} onChange={(e)=>handleInputChange(e)}/>
            </div>
            <div className="role-container">
              <div className="role-div">
                <select name="role" id="role" value={formValues.role} onChange={(e)=>handleInputChange(e)}>
                  <option value="" disabled selected >
                    Role
                  </option>
                  <option value="hr">HR</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
              <div className="team-div">
                <input type="text" placeholder="Team Name" name="teamName" value={formValues.teamName} onChange={(e)=>handleInputChange(e)}/>
              </div>
              <div className="designation-div">
                <input type="text" placeholder="Designation" name="designation" value={formValues.designation} onChange={(e)=>handleInputChange(e)}/>
              </div>
            </div>
            <div className="password-div-container">
              <div className="password-div">
                <input type={passwordType} placeholder="Password" name="password" value={formValues.password} onChange={(e)=>handleInputChange(e)}/>
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
              <div className="password-div">
                <input type={cPasswordType} placeholder="Confirm Password" name="cPassword" value={formValues.cPassword} onChange={(e)=>handleInputChange(e)} />
                {cPasswordType === "password" ? (
                  <FaEyeSlash
                    className="eye-icon pass-hidden"
                    onClick={() => setCPasswordType("text")}
                  />
                ) : (
                  <FaEye
                    className="eye-icon"
                    onClick={() => setCPasswordType("password")}
                  />
                )}
              </div>
            </div>
            <button>Sign up</button>
          </form>
          <div className="signup-info-div">
            Already have an account? <span className="login-link" onClick={()=>navigate('/login')}>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
