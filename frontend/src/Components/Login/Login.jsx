import React, { useEffect, useState } from "react";
import "./Login.css";
import "../../App.css";
import "../../index.css";
import Bg2 from "../../assets/cherrydeck-rMILC1PIwM0-unsplash.jpg";
import Bg1 from '../../assets/signup-bg.jpg'
import Bg3 from '../../assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg'
import Bg4 from '../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router";
import HrVerify from "../HrVerify/HrVerify";
import CompanyLogo from "../../assets/svg-image-1.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useForm } from "react-hook-form";
const Login = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [currentImage, setCurrentImage] = useState(0);
    const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
    } = useForm({ mode: "all" });

//  const validateForm=()=>{
//   let validationErrors = {};
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&.*]).{8,20}$/;
//   if (!formValues.email.trim()) {
//     validationErrors.email = "Email is required";
//   } else if (!emailRegex.test(formValues.email)) {
//     validationErrors.email = "Please enter a valid email address";
//   }
//   if (!formValues.password.trim()) {
//     validationErrors.password = "Password is required";
//   } else if (!passwordRegex.test(formValues.password)) {
//     validationErrors.password =
//       "Password must be atleast 8 characters long and must contain at least one uppercase letter, one lowercase letter, and one special character or number";
//   } else if (formValues.password.length < 8) {
//     validationErrors.password =
//       "Password must be between 8 and 20 characters";
//   }
//   setErrors(validationErrors);
//   return Object.keys(validationErrors).length === 0;

//  }
 const submitData=(data)=>{
  console.log(data)

 }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // if(  !validateForm()) return 
  // console.log(formValues)
  // navigate('/verification')


  //   // setIsHrVerifiedProcessing(true)

  //   //hit api to get what the role of user is , if it is hr show popup and if not , just redirect to dashboard.
  //   // if it is verified and is success then close the popup and redirect the user to dashboard
  //   // otherwise redirect them to login page.
  //   // and remove this setTimeOut code
  // };
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));

  //   setErrors((prevErrors)=>{
  //     let newErrors = { ...prevErrors };
  //     if (name === "email") {
  //       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //       if (!value.trim()) {
  //         newErrors.email = "Email is required";
  //       } else if (!emailRegex.test(value.trim())) {
  //         newErrors.email = "Please enter a valid email address";
  //       } else {
  //         newErrors.email = "";
  //       }
  //     }
  //     if (name === "password") {
  //       const passwordRegex =
  //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&*]).{8,20}$/;

  //       if (!value.trim()) {
  //         newErrors.password = "Password is required";
  //       } else if (!passwordRegex.test(value.trim())) {
  //         newErrors.password =
  //           "Password must be atleast 8 characters long and must contain at least one uppercase letter, one lowercase letter, and one special character or number.";
  //       } else {
  //         newErrors.password = "";
  //       }
  //     }
  //     return newErrors;
  //   })
    
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="login-page-container">
      <div className="login-image-div">
        {/* <div className="slider">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`slide ${index === currentImage ? "active" : ""}`}
            />
          ))}
       
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImage ? "active-dot" : ""}`}
              ></span>
            ))}
          </div>
        </div> */}
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Bg1} alt="42Works"/></SwiperSlide>
        <SwiperSlide><img src={Bg2} alt="42Works"/></SwiperSlide>
        <SwiperSlide><img src={Bg3} alt="42Works"/></SwiperSlide>
        <SwiperSlide><img src={Bg4} alt="42Works"/></SwiperSlide>
      </Swiper>
      </div>
      <div className="login-form-container">
        <div className="login-form-div">
        <div className="login-logo-div">
            <img src={CompanyLogo} alt="42 Works" />
          </div>
          <div className="login-title">
            <h1>Welcome to the hrm portal</h1>
          </div>
          <div className="login-description">
            <h1>Sign in with your credentials to access the HRMS portal</h1>
          </div>
          <form className="login-form" onSubmit={handleSubmit(submitData)}>
            <div className="login-email-div">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                maxLength={100}
                // value={formValues.email}
                // onChange={(e) => handleInputChange(e)}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  validate: {
                    matchPattern: (v) =>
                      /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9]+\.[A-Za-z]{2,}/.test(
                        v
                      ) || "Please enter a valid email address",
                  },
                })}
              />
                  {errors?.email && (
                  <small
                  className="errors-text"
                  >
                    {errors.email.message}
                  </small>
                )}
            </div>
            <div className="login-password-div">
              <input
                type={passwordType}
                placeholder="Password"
                name="password"
                maxLength={20}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  validate: {
                    matchPattern: (v) =>
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&.*]).{8,20}$/.test(
                        v
                      ) || "Password must be atleast 8 characters long and must contain at least one uppercase letter, one lowercase letter, and one special character or number",
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
                    errors.password.message === "Password is required"
                      ? "errors-text"
                      : "pass-errors-text"
                  }`}
                  >
                    {errors.password.message}
                  </small>
                )}
            </div>
            <div className="remember-container">
              <div className="remember-div">
                <input type="radio" />
                <span>Remember me</span>
              </div>
              <div className="forgot-pass-div" onClick={()=>navigate('/forgot-password')}>Forgot Password?</div>
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
