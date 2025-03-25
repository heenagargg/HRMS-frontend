import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VerifyEmail.css";
import "../../index.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Popup from "../popup/Popup";
import { FaCircleCheck } from "react-icons/fa6";
import { EmailVerification } from "../Services/EmployeeOnboarding";

const VerifyEmail = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [cPasswordType, setCPasswordType] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "all" });

  const submitData = (data) => {
    console.log(data);
  };

  const [verifyToken, setVerifyToken] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const queryParams = new URLSearchParams(useLocation().search);
  const token = queryParams.get("token");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    if (token) {
      setVerifyToken(token);
    }
  }, [token]);

  useEffect(() => {
    const fetchVerification = async () => {
      if (!verifyToken) return;

      try {
        const response = await EmailVerification(verifyToken)
        //console.log(response.data);
        console.log(response.data.success);
        setIsPopupOpen(true);
        if (response.data.success) {
          console.log("first");
         const checkTimeout= setTimeout(() => {
            setIsChecked(true);
          }, 4000);
          const emailVerifiedTimeout=setTimeout(() => {
            console.log("second");
            setIsPopupOpen(false);
            setIsEmailVerified(true);
          }, 6000);
        } else {
          setIsEmailVerified(false);
        }
      } catch (error) {
        setIsPopupOpen(false)
        setIsChecked(false)
        console.log("errrr", error);
        if (error.response) {
          setErrMessage(error.response.data.message || "An error occurred.");
        } else {
          setErrMessage("Network error. Please try again.");
        }
      }finally{
        return ()=>{
            clearTimeout(checkTimeout)
            clearTimeout(emailVerifiedTimeout)
        }
      }
    };

    fetchVerification();
  }, [verifyToken]);

  return (
    <>
      {isEmailVerified && (
        <div className="new-pass-container">
          <div className="new-pass-div">
            <div className="new-pass-title">
              <h1>set new Password</h1>
            </div>
            <div className="new-pass-description">
              <h1>Create a new password for your account</h1>
            </div>
            <form className="new-pass-form" onSubmit={handleSubmit(submitData)}>
              <div className="new-password-div">
                <input
                  type={passwordType}
                  placeholder="Enter New Password"
                  name="password"
                  maxLength={20}
                  // value={formValues.password}
                  // onChange={(e) => handleInputChange(e)}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "New Password is required",
                    },
                    validate: {
                      matchPattern: (v) =>
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&.*]).{8,20}$/.test(
                          v
                        ) ||
                        "Password must be atleast 8 characters long and must contain at least one uppercase letter, one lowercase letter, and one special character or number",
                    },
                  })}
                />
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
                {errors?.password && (
                  <small
                    className={`${
                      errors.password.message === "New Password is required"
                        ? "errors-text"
                        : "pass-errors-text"
                    }`}
                  >
                    {errors.password.message}
                  </small>
                )}
              </div>
              <div className="reset-password-div">
                <input
                  type={cPasswordType}
                  placeholder="Confirm New Password"
                  name="cPassword"
                  maxLength={20}
                  // value={formValues.cPassword}
                  // onChange={(e) => handleInputChange(e)}
                  {...register("cPassword", {
                    required: {
                      value: true,
                      message: "Please confirm your password",
                    },
                    validate: (value) =>
                      value === getValues("password") ||
                      "Password does not match",
                  })}
                />
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
                {errors?.cPassword && (
                  <small className="errors-text">
                    {errors.cPassword.message}
                  </small>
                )}
              </div>
              <button >Send</button>
            </form>
          </div>
        </div>
      )}
      {isPopupOpen && (
        <Popup>
          <p>Just a moment! Your email is being verified. Please do not refresh the page. </p>
          <div className="check-div">
            {isChecked && (
              <FaCircleCheck
                style={{ color: "green", margin: "auto" }}
                size={22}
              />
            )}
          </div>
        </Popup>
      )}
      {errMessage && (
        <div className="err-msg-div">
          <p>{errMessage}</p>
        </div>
      )}
    </>
  );
};

export default VerifyEmail;
