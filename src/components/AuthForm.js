import React from 'react'
import { useRef } from "react";
import { useCookies } from "react-cookie";
import Form from "./Form"
import "./AuthForm.css"


const AuthForm = () => {

    const uploadSectionRef = useRef(null);
    const [cookies, setCookies] = useCookies(["access_token"]);

  return (
    <div>
    {cookies.access_token&&<div className="footer-back" ref={uploadSectionRef}>
          <Form></Form>
      </div>}
 </div>
  )
}

export default AuthForm
