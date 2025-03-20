import React from "react";
import heroBg from "../../assets/img/hero-bg.jpg";

function HeroSection() {
  return (
    <section id="hero" className="hero section light-background">
      <img src={heroBg} alt="Hero Background" data-aos="fade-in" />
      <div className="container position-relative">
        <div className="welcome position-relative gy-4" data-aos="fade-down" data-aos-delay="100">
          <h2>WELCOME TO <span style={{color: '#1F7D53'}}>EcoHub</span></h2>
          <h3>Your success is our concern</h3>
          <p style={{color: 'black', lineHeight: '1.8em'}}>Your trusted partner in specialized medical and health solutions.<br />We offer consulting, policy development, and management <br />for healthcare businesses and patients alike.</p>
        </div>
        <div className="content row gy-4">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
              <h3>Why Choose ECOHUB?</h3>
              <p>At ECOHUB, we provide expert consulting, medical advice, and strategic support for healthcare ventures and patients.</p>
              <div className="text-center">
                <a href="#services" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-center">
              <div className="row gy-4">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay="300">
                    <i className="bi bi-clipboard-data"></i>
                    <h4>Expert Healthcare Consulting</h4>
                    <p>We provide specialized consulting for setting up and managing medical businesses and health services.</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay="400">
                    <i className="bi bi-gem"></i>
                    <h4>Medical Policy & Strategy</h4>
                    <p>We develop tailored policies, action plans, and strategies for healthcare organizations to thrive.</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay="500">
                    <i className="bi bi-inboxes"></i>
                    <h4>Patient Advocacy & Legal Support</h4>
                    <p>We assist patients with legal advocacy, rights protection, and medical negligence follow-ups.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;