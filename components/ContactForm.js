"use client";
import React from 'react';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  first: Yup.string().required('Name is required*'),
  email: Yup.string().email('Invalid email').required('Email is required*'),
  phone: Yup.string().required('Phone number is required*'),
  service: Yup.string().required('Please select a service*'),
});

const ContactForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {

      const response = await axios.post(
        "https://huak-api.thecbdworld.org/wp-json/contact-form-7/v1/contact-forms/579/feedback",
        values,
        {
          headers: {
            
            // "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Form data sent successfully!");
        handleClose();
      } else {
        console.error("Failed to send form data.");
      } resetForm();
    } catch (error) {
      console.error("An error occurred:", error);
    }
    };
  // };
  return (
    <>
      {/*===========================
        Start Contact Form
===========================*/}
      <section className="contact_form_area">
        <div className="contact_form_width">
          <h1 className="contact_map_title text-center">
            We're not putting on airs - our work is guaranteed to satisfy.
          </h1>
          <div id="map1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58902.27948373723!2d113.76967834453768!3d22.67642932883249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340394d9ce7ed49f%3A0x5bd406a7d54c7d6b!2sBaoan%2C%20Shenzhen%2C%20China%2C%20518103!5e0!3m2!1sen!2sin!4v1691664018181!5m2!1sen!2sin"
              width="100%"
              height={600}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        {/*end .contact_form_width*/}
        <div className="contact_form_width contact-right">
          <div className="hero-title-with-shape">
            <h4 className="heading_with_border">Get a free quote</h4>
            <h1>To request a service call, please fill out the form below</h1>
          </div>
          {/*end .hero-title-width-shape*/}
         <Formik
            initialValues={{first: '',
            email: '',
            phone: '',
            service: '',
            wpCommentCookiesConsent: false,}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            
              <Form>
                 <ErrorMessage name="name" component="div" style={{color:"red"}} className="error-message" />
                <Field
              type="text"
                  name="name"
              placeholder="Your name"
                  className="half_width input_m_right"
                  
                  
            />
               
               <ErrorMessage name="email" component="div" style={{color:"red"}} className="error-message" />
                <Field
                  type="email"
              name="email"
              placeholder="Email address"
                  className="half_width "
                 
                
            />
               
               <ErrorMessage name="phone" component="div" style={{color:"red"}} className="error-message" />
                <Field
              type="tel"
                  name="phone"
              placeholder="Phone number"
                
                
            />
              
              <ErrorMessage name="service" component="div" style={{color:"red"}} className="error-message" />
                <Field
                as="select"
                name="service"
                id="select"
                className="select_icon"
              >
                <option value="">Select Service</option>
                <option value="American Certification">American Certification</option>
                <option value="Australian Certification Project">Australian Certification Project</option>
                <option value="Certification Project of Asian">Certification Project of Asian</option>
                <option value="Certification Project of China">Certification Project of China</option>
                <option value="EU Certification Project">EU Certification Project</option>
                <option value="Other Certification Projects">Other Certification Projects</option>
              </Field>
           

            <button
                  type="submit"
                  
              className="btn-yellow"
                  
                > Submit Now

            </button>
              </Form>
          
          </Formik>
        </div>
        {/*end .contact_form_width*/}
      </section>
      {/*end .contact_form_area*/}
      {/*===========================
        End Contact Form
===========================*/}
    </>
  );
}

export default ContactForm;
