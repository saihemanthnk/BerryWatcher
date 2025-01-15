import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


function Footer({scrollToTop}) {

  // const uploadSectionRef = useRef(null);
  // const [cookies, setCookies] = useCookies(["access_token"]);

  return (
    <footer id="footer">
      {/* {cookies.access_token&&<div className="footer-back" ref={uploadSectionRef}>
      
          <Form></Form>
      </div>} */}

      <div className="foot-panel2">
        <ul>
          <p>Get to Know Us</p>
          <Link to="#"> Mission and Vision</Link>
          <Link to="#">Our Team</Link>
          <Link to="#">Research and Development</Link>
          <Link to="#">Blog</Link>
        
        </ul>
        <ul>
          <p>Services</p>
          <Link to="#">Disease Detection</Link>
          <Link to="#">Image Analysis</Link>
          <Link to="#">Research Collaborations</Link>
          <Link to="#">API Access</Link>
        </ul>

        <ul>
          <p>Connect with Us</p>
          <Link to="#">Facebook</Link>
          <Link to="#">Twitter</Link>
          <Link to="#">Instagram</Link>
          <Link to="#">LinkedIn</Link>
          <Link to="#">berrywatcher@strawberrydetection.com</Link>

        </ul>

        <ul>
          <Link to="/support"><p>Support</p></Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Join our Developer Community</Link>
          <Link to="#">Help</Link>
        </ul>
      </div>

      <div className="foot-panel3" >
        <Link to="/" smooth={true} duration={500} onClick={scrollToTop}>
        <div className="foot-logo"></div></Link>
      </div>

      <div className="foot-panel4">
        <div className="pages">
          <Link to="#">Conditions of Use</Link>
          <Link to="#">Privacy Notice</Link>
          <Link to="#">Your Ads Privacy Choices</Link>
        </div>

        <div class="copy">
          © 2023-2025, Berry Watcher.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
}

export default Footer;
