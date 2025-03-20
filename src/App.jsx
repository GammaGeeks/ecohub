import React, { useEffect } from "react";
import Header from "./components/Header";
import ScrollTop from "./components/ScrollTop";
import HeroSection from "./components/HeroSection";
import VisionSection from "./components/VisionSection";
import ServicesSection from "./components/ServicesSection";
// import DepartmentsSection from "./components/DepartmentsSection";
// import DoctorsSection from "./components/DoctorsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import StatsSection from "./components/StatsSection";
import Appointment from "./components/Appointment";
import FAQSection from "./components/FAQSection";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  // Initialize AOS
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Handle preloader if it exists
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    // You can initialize other libraries here:
    // - GLightbox
    // - PureCounter
    // etc.
  }, []);

  return (
    <>
      {/* Preloader - will be removed by the useEffect above */}
      {/* <div id="preloader"></div> */}
      
      <Header />
      
      <main className="main">
        <HeroSection />
        <VisionSection />
        <StatsSection />
        <ServicesSection />
        <Appointment />
        <FAQSection />
        {/* <DepartmentsSection />
        <DoctorsSection /> */}
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Scroll-to-top button */}
      <ScrollTop />
    </>
  );
}

export default App;