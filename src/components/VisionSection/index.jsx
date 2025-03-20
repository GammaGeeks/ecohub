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
              Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia
              molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis
              asperiores placeat.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-vial-circle-check"></i>
                <div>
                  <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                  <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-pump-medical"></i>
                <div>
                  <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                  <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-heart-circle-xmark"></i>
                <div>
                  <h5>Voluptatem et qui exercitationem</h5>
                  <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
