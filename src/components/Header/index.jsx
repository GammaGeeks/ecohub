import React from "react";
import useNavigation from "../../hooks/useNavigation";
import logo from '../../assets/logo.png'

function Header() {
  const { 
    scrolled, 
    mobileNavActive, 
    activeNavItem,
    toggleMobileNav, 
    handleNavLinkClick,
    // eslint-disable-next-line no-unused-vars
    toggleDropdown
  } = useNavigation();

  return (
    <header id="header" className={`header sticky-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:info@elnasa.com">info@elnasa.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+250 783 036 687</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center me-auto">
            <img src={logo} alt="EcoHub Logo" className="logo-img" />
          </a>
          <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li><a href="#hero" onClick={handleNavLinkClick} className={activeNavItem === '#hero' ? 'active' : ''}>Home</a></li>
              <li><a href="#vision" onClick={handleNavLinkClick} className={activeNavItem === '#vision' ? 'active' : ''}>Vision</a></li>
              <li><a href="#services" onClick={handleNavLinkClick} className={activeNavItem === '#services' ? 'active' : ''}>Our Services</a></li>
              {/* Example of dropdown menu - uncomment if needed */}
              {/* <li className="dropdown">
                <a href="#" onClick={handleNavLinkClick}>
                  <span>Dropdown</span> 
                  <i className="bi bi-chevron-down toggle-dropdown" onClick={toggleDropdown}></i>
                </a>
                <ul>
                  <li><a href="#" onClick={handleNavLinkClick}>Dropdown 1</a></li>
                  <li className="dropdown">
                    <a href="#" onClick={handleNavLinkClick}>
                      <span>Deep Dropdown</span> 
                      <i className="bi bi-chevron-down toggle-dropdown" onClick={toggleDropdown}></i>
                    </a>
                    <ul>
                      <li><a href="#" onClick={handleNavLinkClick}>Deep Dropdown 1</a></li>
                      <li><a href="#" onClick={handleNavLinkClick}>Deep Dropdown 2</a></li>
                      <li><a href="#" onClick={handleNavLinkClick}>Deep Dropdown 3</a></li>
                    </ul>
                  </li>
                  <li><a href="#" onClick={handleNavLinkClick}>Dropdown 2</a></li>
                </ul>
              </li> */}
              <li><a href="#contact" onClick={handleNavLinkClick} className={activeNavItem === '#contact' ? 'active' : ''}>Contact</a></li>
            </ul>
          </nav>
          <a className="cta-btn d-none d-sm-block" href="#appointment">Make an Appointment</a>
          
          <i 
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          ></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
