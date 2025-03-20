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
                    <option value="">Select Services</option>
                    <option value="health_clinic_setup">Set up of health & medical clinic, pharmacy, hospital, polyclinic, and related</option>
                    <option value="job_contracts">Job / business contracts</option>
                    <option value="investment_proposals">Investment proposals and follow-up</option>
                    <option value="policy_strategy">Establishing & providing policies, action, and strategic plans</option>
                    <option value="health_management">Short- and long-term health entity leadership and management</option>
                    <option value="insurance_assistance">Assistance for health & medical insurance application and follow-up</option>
                    <option value="medical_advice">Medical & health advice based on lab results and medical condition</option>
                    <option value="patient_orientation">Patient health orientation to excellent experts for better treatments</option>
                    <option value="patient_rights">Patient rights assistance and legal advocacy</option>
                    <option value="medical_negligence">Patient follow-up on any occurred medical negligence</option>
                    <option value="medical_report_analysis">Medical report analysis, interpretation, and use</option>
                    <option value="health_awareness">Increasing knowledge and awareness of health and medical reports</option>
                    <option value="business_growth">Upgrading failed businesses</option>
                    <option value="official_documents">Assisting customers in obtaining official documents</option>
                    <option value="medical_supplies">Excellent supply of medical and health equipment</option>
                    <option value="invoice_recovery">Invoice recovery and follow-up</option>
                    <option value="talent_therapy">Squeezing talent therapy</option>
                    <option value="medical_therapy">Medical therapy, counseling, and business therapy</option>
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
