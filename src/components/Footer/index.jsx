import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-6 footer-about">
            <a href="index.html" className="logo2 d-flex align-items-center">
              <img src={logo} style={{width: '150px', height: '100%'}} alt="EcoHub Logo" className="logo-img" />
            </a>
            <div className="footer-contact pt-3">
              <p>KG 33 Ave</p>
              <p>Kigali, Rwanda</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+250 789 660 034</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@elnasa.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Health Facility Setup</a></li>
              <li><a href="#">Contracts & Business</a></li>
              <li><a href="#">Insurance Assistance</a></li>
              <li><a href="#">Patient Advocacy</a></li>
              <li><a href="#">Medical Equipment</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">EcoHub</strong> <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://gammageeks.com/" target='__blank'>GammaGeeks</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
