import React from 'react'
import './Signup.css'
import '../../App.css'
import '../../index.css'
import SignupBg from '../../assets/bg.png'
const Signup = () => {
  return (
    <div className='signup-page-container'>
        <div className="signup-image-div">
            <img src={SignupBg} alt="bg" />
        </div>
        <div className="signup-form-container">
            <div className="signup-form-div">
                <div className="signup-title"><h1>Sign Up</h1></div>
                <div className="signup-form">
                    <div className="name-email-div">
                        <div className="name-div">
                            <input type="text" placeholder='Full Name' />
                        </div>
                        <div className="email-div">
                        <input type="text" placeholder='Email Address' />
                        </div>
                    </div>
                    <div className="contact-div-container">
                        <div className="contact-div">
                            <input type="text" placeholder='Contact Number' />
                        </div>
                        <div className="contact-div">
                        <input type="text" placeholder='Emergency Contact Number' />
                        </div>
                    </div>
                    <div className="address-div">
                            <input type="text" placeholder='Address' />        
                    </div>
                    <div className="role-container">
                        <div className="role-div">
                            <select name="role" id="role" >
                            <option value="" disabled selected >Role</option>
                                <option value="hr">HR</option>
                                <option value="manager">Manager</option>
                                <option value="employee">Employee</option>
                            </select>
                        </div>
                        <div className="team-div">
                            <input type="text" placeholder='Your Team Name' />
                        </div>
                        <div className="designation-div">
                        <input type="text" placeholder='Your Designation' />
                        </div>
                    </div>
                    <div className="password-div-container">
                        <div className="password-div">
                            <input type="text" placeholder='Password' />
                        </div>
                        <div className="password-div">
                        <input type="text" placeholder='Confirm Password' />
                        </div>
                    </div>
               <button>Sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup