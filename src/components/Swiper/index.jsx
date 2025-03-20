import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SwiperComponent({ className, config, children }) {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Initialize Swiper
      swiperInstance.current = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination],
        ...config
      });
    }

    return () => {
      // Destroy Swiper instance on component unmount
      if (swiperInstance.current) {
        swiperInstance.current.destroy();
      }
    };
  }, [config]);

  return (
    <div className={`init-swiper ${className || ''}`} ref={swiperRef}>
      <div className="swiper-wrapper">
        {children}
      </div>
      {config.pagination && <div className="swiper-pagination"></div>}
      {config.navigation && (
        <>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </>
      )}
      <div className="swiper-config" style={{ display: 'none' }}>
        {JSON.stringify(config)}
      </div>
    </div>
  );
}

export default SwiperComponent;
