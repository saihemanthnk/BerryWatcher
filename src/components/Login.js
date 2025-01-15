import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import {useState,useEffect} from "react"
import {useCookies} from "react-cookie"
import { useNavigate } from 'react-router-dom';

import axios from "axios"


function Login() {

  const [email,setEmail] = useState("")
  const [isEmail,setIsEmail] = useState("") 
  const [password,setPassword] = useState("") 
  const [isPassword,setIsPassword] = useState("")

  const regEx = /^[a-zA-Z0-9-._]*@[a-z-A-Z0-9-._]*\.[a-zA-Z]{2,4}$/;


  useEffect(()=>{

    setIsEmail(regEx.test(email) || email === "")

  },[email,regEx]) 

  useEffect(()=>{

    setIsPassword(password.trim().length<10)

  },[password])

  const [_,setCookies] = useCookies(["access_token"])

  const navigate = useNavigate()



  const submitHandler = async(event) => {
    event.preventDefault() 
    try{
      const res = await axios.post("http://localhost:3001/auth/login",{email,password}) 
      console.log(res)
      setCookies("access_token",res.data.accessToken) 
      window.localStorage.setItem("id",res.data.id)
      window.localStorage.setItem("name",res.data.name)
      window.localStorage.setItem("email",res.data.email)
      navigate("/")

    }
    catch(err){

      if(err.response&&err.response.status === 400 &&err.response.data&&err.response.data.error){
        alert(err.response.data.error)
        setEmail("")
        setPassword("")
      }

    }
  }





  return (
    <>
      <section className="login-section-content padding-y">
        <div className="login-card mx-auto">
          <article className="login-card-body">
            <header className="login-mb-4">
              <h4 className="login-card-title">Log In</h4>
            </header>
            <form onSubmit={submitHandler}>
              <div className="login-form-group">
                <label>Email Address</label>
                <input type="email" className={`login-form-control ${!isEmail?"invalid":""}`} placeholder="" value={email} onChange={(event)=>{setEmail(event.target.value)}} required/>
                {!isEmail&&<p className="error-msg">Enter a valid email address</p>}
              </div>
              <div className="login-form-group">
                <label>Password</label>
                <input className={`login-form-control ${!isPassword?"invalid":""}`} type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} required/>
                {!isPassword && (
                    <p className="error-msg">
                      Passwords must be less than 10 characters enter valid password
                    </p>
                  )}
              </div>
              
              <div className="login-form-group">
                <button type="submit" className="login-btn login-btn-primary login-btn-block">
                  Log In
                </button>
              </div>
            </form>
          </article>
        </div>
        <p className="login-text-center login-mt-4">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
        <br />
      </section>
    </>
  );
}

export default Login;


