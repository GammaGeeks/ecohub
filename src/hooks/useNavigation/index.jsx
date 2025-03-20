import { useEffect, useState } from 'react';

export const useNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');
  
  // Handle scroll detection
  useEffect(() => {
    const toggleScrolled = () => {
      const selectHeader = document.querySelector('#header');
      if (!selectHeader || 
          (!selectHeader.classList.contains('scroll-up-sticky') && 
           !selectHeader.classList.contains('sticky-top') && 
           !selectHeader.classList.contains('fixed-top'))) return;
      
      setScrolled(window.scrollY > 100);
      
      // This updates the body class to match the original JS behavior
      if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };
    
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
    
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
    };
  }, []);
  
  // Handle mobile nav toggle
  const toggleMobileNav = () => {
    setMobileNavActive(prev => !prev);
    
    // Toggle body class to match original behavior
    document.body.classList.toggle('mobile-nav-active');
  };
  
  // Handle nav link click
  const handleNavLinkClick = () => {
    if (mobileNavActive) {
      toggleMobileNav();
    }
  };
  
  // Toggle dropdown for mobile navigation
  const toggleDropdown = (e) => {
    e.preventDefault();
    const parent = e.target.parentNode;
    parent.classList.toggle('active');
    parent.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  };
  
  // Nav scrollspy
  useEffect(() => {
    const navmenuScrollspy = () => {
      const navmenulinks = document.querySelectorAll('.navmenu a');
      
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        const section = document.querySelector(navmenulink.hash);
        if (!section) return;
        
        const position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          setActiveNavItem(navmenulink.hash);
        }
      });
    };
    
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
    
    return () => {
      window.removeEventListener('load', navmenuScrollspy);
      document.removeEventListener('scroll', navmenuScrollspy);
    };
  }, []);
  
  // Correct scrolling position for hash links
  useEffect(() => {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          const section = document.querySelector(window.location.hash);
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop || '0'),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);
  
  return {
    scrolled,
    mobileNavActive,
    activeNavItem,
    toggleMobileNav,
    handleNavLinkClick,
    toggleDropdown
  };
};

export default useNavigation;