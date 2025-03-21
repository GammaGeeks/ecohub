import React from 'react';
import about from '../../assets/img/about2.jpg'; // Assuming you have a separate CSS file for this component

const VisionSection = () => {
  return (
    <section id="vision" className="about section">
      <div className="container">
        <div className="row gy-4 gx-5">
          <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="200">
            <img src={about} className="img-fluid" alt="Our Vision" />
            <a href="https://www.youtube.com/watch?v=EBd9gBH0QL8&t=3s" className="glightbox pulsating-play-btn"></a>
          </div>

          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <h3>Our Vision</h3>
            <p>
              ALTHOUGH THE ELNASA consulting hub / ECOHAB ltd is highly competitive , we believe that there is a place for high quality innovative ,attractive durable ,affordable consulting hub services .
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-vial-circle-check"></i>
                <div>
                  <h5>Mission</h5>
                  <p>To built , connect and sell high quality consulting hub successful results and oriented services ,that will be cherished and handed down  from country wide business to  the world ide generation</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-pump-medical"></i>
                <div>
                  <h5>Goals</h5>
                  <p>To build and market consulting hub results  and success that will entertain ,encourage ,enhance the businessman to succeed and stand in the market place here and the world wide</p>
                </div>
              </li>
              {/* <li>
                <i className="fa-solid fa-heart-circle-xmark"></i>
                <div>
                  <h5>Voluptatem et qui exercitationem</h5>
                  <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
