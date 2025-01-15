import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
import Search from "../components/Search"

function Navbar({ scrollToFooter, scrollToLib }) {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate()


  const logoutHandler = () =>{
    setCookies("access_token","")
    window.localStorage.removeItem("id")
    window.localStorage.removeItem("name")
    navigate("/login")

  }

  return (
    <header id="header">
      <div className="navbar">
        <div className="nav-logo border">
          <Link to="/">
            <div className="logo"></div>
          </Link>
        </div>

        <div className="nav-address border">
          <p id="add-first">Location</p>
          <div className="add-icon">
            <i className="fa-solid fa-location-dot"></i>
            <p id="add-second">Nellore</p>
          </div>
        </div>



        <Search></Search>

        <div className="nav-signin border">
          <Link to="/register">
            <p>
              <span>Hello,signin</span>
            </p>
          </Link>
          <p>
            <span className="nav-second">Accounts&Lists</span>
          </p>
        </div>

        {!cookies.access_token ? (
          <div class="nav-login border">
            <Link to="/login">
              <p>
                <span className="nav-second">Login</span>
              </p>
            </Link>
          </div>
        ) : (
          <div class="nav-login border" onClick={logoutHandler}>
              <p>
                <span>Logout</span>
              </p>
            <p>
              <span class="nav-second">&{window.localStorage.getItem("name")}</span>
            </p>
          </div>
        )}

        <div className="nav-cart border">
          <i className="fa-regular fa-bell"></i>
          Alerts
        </div>
      </div>

      <div className="panel">
        <div className="panel-all">
          <i className="fa-solid fa-bars"></i>
          All
        </div>

        <div className="panel-items">
          <Link to="/" smooth={true} duration={500} onClick={scrollToFooter}>
            Upload Image
          </Link>
          <Link to="/results">View Results</Link>
          <Link to="/" smooth={true} duration={500} onClick={scrollToLib}>
            Disease Library
          </Link>
          <Link to="/userGuide">User Guide</Link>
          {cookies.access_token? <Link to="/support">Support</Link>: <Link to="#">Support</Link>}
        
          <Link to="/about">About</Link>
          <Link href="#">What's New </Link>

          <select className="panel-select">
            <option>Prime</option>
          </select>
        </div>

        <Link to="/details/Healthy Fruit"><div className="panel-deals">Explore Tips for Healthy Strawberries</div></Link>
      </div>
    </header>
  );
}

export default Navbar;
