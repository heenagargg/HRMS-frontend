import React, { useRef, useState } from "react";
import "./EmailVerify.css";
import "../../App.css";
import "../../index.css";
import SignupBg from "../../assets/bg.png";
import { useNavigate } from "react-router";
const EmailVerify = ({ length = 6 }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);
  const navigate=useNavigate()

  const handleChange = (e, index) => {
    const { value } = e.target;

    // Only allow single digit input
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (index < length - 1) {
        inputs.current[index + 1].focus();
      } else if (value === "") {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }

    // Move focus to previous input on backspace
    if (value === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index] !== "") {
        // Clear the current input
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Move focus to previous input and clear it
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputs.current[index - 1].focus();
      }
    }
  };


    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(otp.join().replaceAll(",",""))
      setTimeout(() => {
        navigate('/login')
      }, 3000);

      // add the toast here to notify user that verification is successful
    
    }

  return (
    <div className="verify-page-container">
      <div className="verify-image-div">
        <img src={SignupBg} alt="bg" />
      </div>
      <div className="verify-form-container">
        <div className="verify-form-div">
          <div className="verify-title">
            <h1>Verify Your Account </h1>
          </div>
          <form className="verify-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="verify-email-div">
              {otp.map((_, index) => (
                <input
                  key={index}
                  className="verify-box-input"
                  type="text"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputs.current[index] = el)}
                />
              ))}
            </div>
            <button>Verify</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
