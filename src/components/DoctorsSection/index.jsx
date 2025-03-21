import doctors5 from '../../assets/img/doctors/doctors-5.jpg';

const doctors = [
  {
    name: "Dr Karamutse Innocent",
    role: "Directing Manager",
    description: "",
    // description: "Dr. Karamutse Innocent is a distinguished medical professional renowned for his expertise and dedication to healthcare. He has made significant contributions to medical research and patient care.",
    image: doctors5,
    delay: 100,
    },
  // {
  //   name: "Sarah Jhonson",
  //   role: "Anesthesiologist",
  //   description: "Aut maiores voluptates amet et quis praesentium qui senda para",
  //   image: "assets/img/doctors/doctors-2.jpg",
  //   delay: 200,
  // },
  // {
  //   name: "William Anderson",
  //   role: "Cardiology",
  //   description: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
  //   image: "assets/img/doctors/doctors-3.jpg",
  //   delay: 300,
  // },
  // {
  //   name: "Amanda Jepson",
  //   role: "Neurosurgeon",
  //   description: "Dolorum tempora officiis odit laborum officiis et et accusamus",
  //   image: "assets/img/doctors/doctors-4.jpg",
  //   delay: 400,
  // },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="doctors section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Team</h2>
        <p>Meet our team of highly skilled and dedicated medical professionals who are committed to providing the best care possible.</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {doctors.map((doctor, index) => (
            <div key={index} className="col-lg-6" data-aos="fade-up" data-aos-delay={doctor.delay}>
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img src={doctor.image} className="img-fluid" alt={doctor.name} />
                </div>
                <div className="member-info">
                  <h4>{doctor.name}</h4>
                  <span>{doctor.role}</span>
                  <p>{doctor.description}</p>
                  <div className="social">
                    <a><i className="bi bi-twitter-x"></i></a>
                    <a><i className="bi bi-facebook"></i></a>
                    <a><i className="bi bi-instagram"></i></a>
                    <a><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
