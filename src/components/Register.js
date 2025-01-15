import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [isfirstname, setIsFirstName] = useState(false);
  const [lastname, setLastName] = useState("");
  const [islastname, setIsLastName] = useState(true);
  const [email, setEmail] = useState("");
  const [isemail, setIsEmail] = useState(true);
  const [phone, setPhone] = useState("");
  const [isPhone, setIsPhone] = useState(true);
  const [password, setPassword] = useState("");
  const [reenterpassword, setReenteredPassword] = useState("");
  const [ismatch, setIsMatch] = useState(true);

  const navigate = useNavigate()

  const regEx = /^[a-zA-Z0-9-._]*@[a-z-A-Z0-9-._]*\.[a-zA-Z]{2,4}$/;

  useEffect(() => {
    setIsFirstName(
      /^[a-zA-Z]*$/.test(firstname) && firstname.trim().length < 10
    );
  }, [firstname]);

  useEffect(() => {
    setIsLastName(/^[a-zA-Z]*$/.test(lastname) && lastname.trim().length < 10);
  }, [lastname]);

  useEffect(() => {
    setIsEmail(regEx.test(email) || email === "");
  }, [email, regEx]);

  useEffect(() => {
    if(phone===""){
      setIsPhone(true)
    }
    else{
      setIsPhone(phone.trim().length === 10 && /^[\d]*$/.test(phone.trim()));

    }
   
  }, [phone]);

  useEffect(() => {
    setIsMatch(password === reenterpassword && password.trim().length < 10);
  }, [password, reenterpassword]);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      if (password !== reenterpassword) {
        alert("password does not match");
        setPassword("");
        setReenteredPassword("");
        return;
      } else if (!regEx.test(email)) {
        alert("Enter valid email address");
        setEmail("");
        return;
      } else if (phone.trim().length !== 10 || !/^\d+$/) {
        alert("Not a valid Phone number");
        setPhone("");
        return;
      } else if (firstname.trim().length > 10) {
        alert("first name is too large");
        setFirstName("");
        return;
      } else {
        const res = await axios.post("http://localhost:3001/auth/register", {
          firstname,
          lastname,
          email,
          phone,
          password,
          reenterpassword,
        });
        
        alert("Registration succesfull now login");
        navigate("/login")
      }
    } catch (err) {
      if(err.response&&err.response.status===409&&err.response.data&&err.response.data.error){
        alert(err.response.data.error)
        setEmail("")


      }
      
    }
  };

  return (
    <>
      <section className="section-content padding-y">
        <div className="card mx-auto">
          <article className="card-body">
            <header className="mb-4">
              <h4 className="card-title">Sign up</h4>
            </header>
            <form onSubmit={submitHandler}>
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <label htmlFor="firstname">First name</label>
                  <input
                    type="text"
                    id="firstname"
                    className={`form-control ${
                      !isfirstname ? "invalid-input" : ""
                    }`}
                    placeholder=""
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                    value={firstname}
                    required
                  />
                   {!isfirstname&&<p className="error-message">First name is too long</p>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    type="text"
                    id="lastname"
                    className={`form-control ${
                      !islastname ? "invalid-input" : ""
                    }`}
                    placeholder=""
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                    value={lastname}
                    required
                  />
                  {!islastname&&<p className="error-message">Last name is too long</p>}
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className={`form-control ${
                      !isemail ? "invalid-input" : ""
                    }`}
                    placeholder=""
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    value={email}
                    required
                  />
                  {!isemail&&<p className="error-message">Enter a valid email address</p>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    className={`form-control ${
                      !isPhone ? "invalid-input" : ""
                    }`}
                    placeholder=""
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                    value={phone}
                    required
                  />
                  {!isPhone && (
                    <p className="error-message">
                      Enter a valid phone number with exactly 10 digits
                    </p>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <label htmlFor="password">Create password</label>
                  <input
                    id="password"
                    className={`form-control ${
                      !ismatch ? "invalid-input" : ""
                    }`}
                    type="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    value={password}
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="repassword">Repeat password</label>
                  <input
                    id="repassword"
                    className={`form-control ${
                      !ismatch ? "invalid-input" : ""
                    }`}
                    type="password"
                    onChange={(event) => {
                      setReenteredPassword(event.target.value);
                    }}
                    value={reenterpassword}
                    required
                  />
                  {!ismatch && (
                    <p className="error-message">
                      Passwords must match and be less than 10 characters
                    </p>
                  )}
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </div>
            </form>
          </article>
        </div>
        <p className="text-center mt-4">
          Have an account? <Link to="/login">Log In</Link>
        </p>
        <br />
      </section>
    </>
  );
}

export default Register;
