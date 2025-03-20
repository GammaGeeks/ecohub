import React, { useEffect, useState } from "react";

function ScrollTop() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const toggleScrollTop = () => {
      setIsActive(window.scrollY > 100);
    };

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
    
    return () => {
      window.removeEventListener('load', toggleScrollTop);
      document.removeEventListener('scroll', toggleScrollTop);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#" 
      className={`scroll-top d-flex align-items-center justify-content-center ${isActive ? 'active' : ''}`} 
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}

export default ScrollTop;
