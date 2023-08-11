"use client"
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { api_url } from '@/Auth';

const validationSchema = Yup.object().shape({
  // first: Yup.string().trim().required('*Name is required').min(3, '*Name must be at least 3 characters').max(50, '*Name can be at most 50 characters'),
  // email: Yup.string().trim().required('*Email is required').email('*Invalid email format').max(100, '*Email can be at most 100 characters'),
  // phone: Yup.string().trim().required('*Mobile number is required').matches(/^[0-9]+$/, '*Mobile number must contain only digits').min(10, '*Mobile number must be at least 10 digits').max(15, '*Mobile number can be at most 15 digits'),
});

const getData = async (slug) => {
  const res = await fetch(`${api_url}/pages?slug=${slug}`, {
    next: { revalidate: 2 },
  });
  const data = await res.json();
  return data;
};

async function handleSubmit(values, { resetForm }) {
  try {
    const response = await axios.post(
      'https://huak-api.thecbdworld.org/wp-json/contact-form-7/v1/contact-forms/749/feedback',
      values,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.status === 200) {
      console.log('Form data sent successfully!');
    } else {
      console.error('Failed to send form data.');
    }
    resetForm();
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

export async function generateMetadata({ params }) {
  const product = await getData(params.one);
  return {
    title: product?.[0]?.acf?.meta_title || 'Default Title',
    openGraph: {
      title: product?.[0]?.acf?.meta_title || 'Default Title',
      description: product?.[0]?.acf?.meta_description || '',
    },
  };
}

async function Page(props) {
  let data = await getData(props.params.one);
  const initialValues = {
    first: '',
    email: '',
    phone: '',
    message: '',
    id: '749',
  };

  return (
    <>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Services</li>
        </ul>
        <h1>Our services</h1>
      </section>
      <div className="col-12 col-sm-12">
      <div className="service_style_3_area text-center section_padding one-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12">
              <div
                style={{
                  width: "30px",
                  height: "4px",
                  marginLeft: "3px",
                  marginBottom: "5px",
                  backgroundColor: "#D8B14B",
                }}
              ></div>
              <h3
                style={{
                  textAlign: "left",
                  color: "#000",
                  marginBottom: "15px",
                }}
              >
                {data[0].title?.rendered}
              </h3>
            </div>
        
            
              <div
                style={{ textAlign: "left", fontWeight: "400" }}
                dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
              ></div>
               <section>
          <div className="col-12 col-sm-12">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <div className="contact-right contact-right-style-2 responsive_mt">
       
        <Form>
          {/* <ErrorMessage name="first" component="div" style={{ color: 'red' }} className="error-message" /> */}
          <input type="text" name="first" placeholder="Your name" className="half_width input_m_right" style={{background:"#ddd"}} />
          {/* <ErrorMessage name="email" component="div" style={{color:"red"}} className="error-message" style={{background:"#dbd5d5"}} /> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="half_width "  style={{background:"#ddd"}} 
            />
               
               {/* <ErrorMessage name="phone" component="div" style={{color:"red"}} className="error-message" /> */}
                <input
                type="tel"
                name="phone"
                placeholder="Phone number"    style={{background:"#ddd"}}            
               />
               <input type="hidden"  name="service" />
              
                <textarea
                    name="message"
                    id="content"
                    cols={160}
                    rows={10}
                    placeholder="Write message"
                    defaultValue={""} style={{background:"#ddd"}}
              >
                
              </textarea>
           

          <button type="submit" className="btn-yellow">
            Submit Now
          </button>
        </Form>
       
        </div>
      </Formik>
      </div>
      </section>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Page;
