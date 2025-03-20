import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const Appointment = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    doctor: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    date: Yup.string().required('Appointment date is required'),
    department: Yup.string().required('Department is required'),
    doctor: Yup.string().required('Doctor is required'),
  });

  const sendEmail = (values, setSubmitting) => {
    emailjs
      .send(
        'service_jaa8nmt',
        'template_a39wjcv',
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


  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    sendEmail(values, setSubmitting);
  };

  return (
    <section id="appointment" className="appointment section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Appointment</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
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
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="row">
                <div className="col-md-4 form-group">
                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                  />
                  <ErrorMessage name="name" component="div" className="error-message" style={{color: 'red'}} />
                </div>

                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                  <ErrorMessage name="email" component="div" className="error-message" style={{color: 'red'}} />
                </div>

                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <Field
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Your Phone"
                  />
                  <ErrorMessage name="phone" component="div" className="error-message" style={{color: 'red'}} />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <Field
                    type="datetime-local"
                    name="date"
                    className="form-control datepicker"
                    placeholder="Appointment Date"
                  />
                  <ErrorMessage name="date" component="div" className="error-message" style={{color: 'red'}} />
                </div>

                <div className="col-md-4 form-group mt-3">
                  <Field as="select" name="department" className="form-select">
                    <option value="">Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </Field>
                  <ErrorMessage name="department" component="div" className="error-message" style={{color: 'red'}} />
                </div>

                <div className="col-md-4 form-group mt-3">
                  <Field as="select" name="doctor" className="form-select">
                    <option value="">Select Doctor</option>
                    <option value="Doctor 1">Doctor 1</option>
                    <option value="Doctor 2">Doctor 2</option>
                    <option value="Doctor 3">Doctor 3</option>
                  </Field>
                  <ErrorMessage name="doctor" component="div" className="error-message" style={{color: 'red'}} />
                </div>
              </div>

              <div className="form-group mt-3">
                <Field
                  as="textarea"
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Message (Optional)"
                />
              </div>

              <div className="mt-3">
                {isSubmitting && <div className="loading">Loading</div>}
                <div className="text-center">
                  <button type="submit" disabled={isSubmitting}>
                    Make an Appointment
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Appointment;
