import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string()
      .notRequired()
      .matches(/^\+250\d{9}$/, 'Phone number must be in the format +250XXXXXXXXX'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const sendEmail = (values, setSubmitting) => {
    emailjs
      .send(
        'service_jaa8nmt',
        'template_ga1cnmz',
        values,
        'cr8lzBXgto7pgQ4ap'
      )
      .then(
        (result) => {
          console.log('Email sent:', result);
          setSuccessMessage('Your message has been sent. Thank you!');
        },
        (error) => {
          console.error('Email sending error:', error.text);
          setErrorMessage('An error occurred while sending the message. Please try again later.');
        }
      )
      .finally(() => {
        setSubmitting(false); // Stop loading state
      });
  };

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      {/* Google Maps */}
      <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 0, width: '100%', height: '270px' }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Location</h3>
                <p>KG 33 Ave, Kigali, Rwanda</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+250 783 036 687</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@elnasa.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            {successMessage && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                {successMessage}
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setSuccessMessage('')}></button>
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {errorMessage}
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setErrorMessage('')}></button>
              </div>
            )}
            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                sendEmail(values, setSubmitting);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <Field
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                      />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>

                    <div className="col-md-6">
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    <div className="col-md-12">
                      <Field
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Your Phone Number (+250788888888)"
                      />
                      <ErrorMessage name="phone" component="div" className="text-danger" />
                    </div>

                    <div className="col-md-12">
                      <Field
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                      />
                      <ErrorMessage name="subject" component="div" className="text-danger" />
                    </div>

                    <div className="col-md-12">
                      <Field
                        as="textarea"
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Message"
                      />
                      <ErrorMessage name="message" component="div" className="text-danger" />
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                      <button type="submit" disabled={isSubmitting}>
                        Send Message
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
