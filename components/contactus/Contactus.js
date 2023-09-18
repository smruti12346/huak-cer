"use client";
import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Image from "next/image";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

function Contactus(props) {
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null); 

  const countryOptions = [
    // Define countryOptions only once
    { value: "afghanistan", label: "Afghanistan" },
    { value: "albania", label: "Albania" },
    { value: "algeria", label: "Algeria" },
    { value: "andorra", label: "Andorra" },
    { value: "angola", label: "Angola" },
    { value: "antigua-and-barbuda", label: "Antigua and Barbuda" },
    { value: "argentina", label: "Argentina" },
    { value: "armenia", label: "Armenia" },
    { value: "australia", label: "Australia" },
    { value: "austria", label: "Austria" },
    { value: "azerbaijan", label: "Azerbaijan" },
    { value: "bahamas", label: "Bahamas" },
    { value: "bahrain", label: "Bahrain" },
    { value: "bangladesh", label: "Bangladesh" },
    { value: "barbados", label: "Barbados" },
    { value: "belarus", label: "Belarus" },
    { value: "belgium", label: "Belgium" },
    { value: "belize", label: "Belize" },
    { value: "benin", label: "Benin" },
    { value: "bhutan", label: "Bhutan" },
    { value: "bolivia", label: "Bolivia" },
    { value: "bosnia-and-herzegovina", label: "Bosnia and Herzegovina" },
    { value: "botswana", label: "Botswana" },
    { value: "brazil", label: "Brazil" },
    { value: "brunei", label: "Brunei" },
    { value: "bulgaria", label: "Bulgaria" },
    { value: "burkina-faso", label: "Burkina Faso" },
    { value: "burundi", label: "Burundi" },
    { value: "cabo-verde", label: "Cabo Verde" },
    { value: "cambodia", label: "Cambodia" },
    { value: "cameroon", label: "Cameroon" },
    { value: "canada", label: "Canada" },
    { value: "central-african-republic", label: "Central African Republic" },
    { value: "chad", label: "Chad" },
    { value: "chile", label: "Chile" },
    { value: "china", label: "China" },
    { value: "colombia", label: "Colombia" },
    { value: "comoros", label: "Comoros" },
    { value: "congo", label: "Congo" },
    { value: "costa-rica", label: "Costa Rica" },
    { value: "cote-d-ivoire", label: "Cote d'Ivoire" },
    { value: "croatia", label: "Croatia" },
    { value: "cuba", label: "Cuba" },
    { value: "cyprus", label: "Cyprus" },
    { value: "czechia", label: "Czechia" },
    { value: "denmark", label: "Denmark" },
    { value: "djibouti", label: "Djibouti" },
    { value: "dominica", label: "Dominica" },
    { value: "dominican-republic", label: "Dominican Republic" },
    { value: "east-timor", label: "East Timor" },
    { value: "ecuador", label: "Ecuador" },
    { value: "egypt", label: "Egypt" },
    { value: "el-salvador", label: "El Salvador" },
    { value: "equatorial-guinea", label: "Equatorial Guinea" },
    { value: "eritrea", label: "Eritrea" },
    { value: "estonia", label: "Estonia" },
    { value: "ethiopia", label: "Ethiopia" },
    { value: "fiji", label: "Fiji" },
    { value: "finland", label: "Finland" },
    { value: "france", label: "France" },
    { value: "gabon", label: "Gabon" },
    { value: "gambia", label: "Gambia" },
    { value: "georgia", label: "Georgia" },
    { value: "germany", label: "Germany" },
    { value: "ghana", label: "Ghana" },
    { value: "greece", label: "Greece" },
    { value: "grenada", label: "Grenada" },
    { value: "guatemala", label: "Guatemala" },
    { value: "guinea", label: "Guinea" },
    { value: "guinea-bissau", label: "Guinea-Bissau" },
    { value: "guyana", label: "Guyana" },
    { value: "haiti", label: "Haiti" },
    { value: "honduras", label: "Honduras" },
    { value: "hungary", label: "Hungary" },
    { value: "iceland", label: "Iceland" },
    { value: "india", label: "India" },
    { value: "indonesia", label: "Indonesia" },
    { value: "iran", label: "Iran" },
    { value: "iraq", label: "Iraq" },
    { value: "ireland", label: "Ireland" },
    { value: "israel", label: "Israel" },
    { value: "italy", label: "Italy" },
    { value: "jamaica", label: "Jamaica" },
    { value: "japan", label: "Japan" },
    { value: "jordan", label: "Jordan" },
    { value: "kazakhstan", label: "Kazakhstan" },
    { value: "kenya", label: "Kenya" },
    { value: "kiribati", label: "Kiribati" },
    { value: "kosovo", label: "Kosovo" },
    { value: "kuwait", label: "Kuwait" },
    { value: "kyrgyzstan", label: "Kyrgyzstan" },
    { value: "laos", label: "Laos" },
    { value: "latvia", label: "Latvia" },
    { value: "lebanon", label: "Lebanon" },
    { value: "lesotho", label: "Lesotho" },
    { value: "liberia", label: "Liberia" },
    { value: "libya", label: "Libya" },
    { value: "liechtenstein", label: "Liechtenstein" },
    { value: "lithuania", label: "Lithuania" },
    { value: "luxembourg", label: "Luxembourg" },
    { value: "macedonia", label: "Macedonia" },
    { value: "madagascar", label: "Madagascar" },
    { value: "malawi", label: "Malawi" },
    { value: "malaysia", label: "Malaysia" },
    { value: "maldives", label: "Maldives" },
    { value: "mali", label: "Mali" },
    { value: "malta", label: "Malta" },
    { value: "marshall-islands", label: "Marshall Islands" },
    { value: "mauritania", label: "Mauritania" },
    { value: "mauritius", label: "Mauritius" },
    { value: "mexico", label: "Mexico" },
    { value: "micronesia", label: "Micronesia" },
    { value: "moldova", label: "Moldova" },
    { value: "monaco", label: "Monaco" },
    { value: "mongolia", label: "Mongolia" },
    { value: "montenegro", label: "Montenegro" },
    { value: "morocco", label: "Morocco" },
    { value: "mozambique", label: "Mozambique" },
    { value: "myanmar", label: "Myanmar" },
    { value: "namibia", label: "Namibia" },
    { value: "nauru", label: "Nauru" },
    { value: "nepal", label: "Nepal" },
    { value: "netherlands", label: "Netherlands" },
    { value: "new-zealand", label: "New Zealand" },
    { value: "nicaragua", label: "Nicaragua" },
    { value: "niger", label: "Niger" },
    { value: "nigeria", label: "Nigeria" },
    { value: "north-korea", label: "North Korea" },
    { value: "norway", label: "Norway" },
    { value: "oman", label: "Oman" },
    { value: "pakistan", label: "Pakistan" },
    { value: "palau", label: "Palau" },
    { value: "panama", label: "Panama" },
    { value: "papua-new-guinea", label: "Papua New Guinea" },
    { value: "paraguay", label: "Paraguay" },
    { value: "peru", label: "Peru" },
    { value: "philippines", label: "Philippines" },
    { value: "poland", label: "Poland" },
    { value: "portugal", label: "Portugal" },
    { value: "qatar", label: "Qatar" },
    { value: "romania", label: "Romania" },
    { value: "russia", label: "Russia" },
    { value: "rwanda", label: "Rwanda" },
    { value: "saint-kitts-and-nevis", label: "Saint Kitts and Nevis" },
    { value: "saint-lucia", label: "Saint Lucia" },
    { value: "saint-vincent-and-the-grenadines", label: "Saint Vincent and the Grenadines" },
    { value: "samoa", label: "Samoa" },
    { value: "san-marino", label: "San Marino" },
    { value: "sao-tome-and-principe", label: "Sao Tome and Principe" },
    { value: "saudi-arabia", label: "Saudi Arabia" },
    { value: "senegal", label: "Senegal" },
    { value: "serbia", label: "Serbia" },
    { value: "seychelles", label: "Seychelles" },
    { value: "sierra-leone", label: "Sierra Leone" },
    { value: "singapore", label: "Singapore" },
    { value: "slovakia", label: "Slovakia" },
    { value: "slovenia", label: "Slovenia" },
    { value: "solomon-islands", label: "Solomon Islands" },
    { value: "somalia", label: "Somalia" },
    { value: "south-africa", label: "South Africa" },
    { value: "south-korea", label: "South Korea" },
    { value: "south-sudan", label: "South Sudan" },
    { value: "spain", label: "Spain" },
    { value: "sri-lanka", label: "Sri Lanka" },
    { value: "sudan", label: "Sudan" },
    { value: "suriname", label: "Suriname" },
    { value: "swaziland", label: "Swaziland" },
    { value: "sweden", label: "Sweden" },
    { value: "switzerland", label: "Switzerland" },
    { value: "syria", label: "Syria" },
    { value: "taiwan", label: "Taiwan" },
    { value: "tajikistan", label: "Tajikistan" },
    { value: "tanzania", label: "Tanzania" },
    { value: "thailand", label: "Thailand" },
    { value: "togo", label: "Togo" },
    { value: "tonga", label: "Tonga" },
    { value: "trinidad-and-tobago", label: "Trinidad and Tobago" },
    { value: "tunisia", label: "Tunisia" },
    { value: "turkey", label: "Turkey" },
    { value: "turkmenistan", label: "Turkmenistan" },
    { value: "tuvalu", label: "Tuvalu" },
    { value: "uganda", label: "Uganda" },
    { value: "ukraine", label: "Ukraine" },
    { value: "united-arab-emirates", label: "United Arab Emirates" },
    { value: "united-kingdom", label: "United Kingdom" },
    { value: "united-states-of-america", label: "United States of America" },
    { value: "uruguay", label: "Uruguay" },
    { value: "uzbekistan", label: "Uzbekistan" },
    { value: "vanuatu", label: "Vanuatu" },
    { value: "vatican-city", label: "Vatican City" },
    { value: "venezuela", label: "Venezuela" },
    { value: "vietnam", label: "Vietnam" },
    { value: "yemen", label: "Yemen" },
    { value: "zambia", label: "Zambia" },
    { value: "zimbabwe", label: "Zimbabwe" }
    // Add more countries as needed
  ];
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleSubmit = (values) => {
    setLoader(true);
    setMessage("");

    const formData = new FormData();
    formData.append("first", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("country", selectedCountry ? selectedCountry.label : "");
    formData.append("message", values.message);

    axios
      .post(
        "https://api.huak-cer.com/wp-json/contact-form-7/v1/contact-forms/579/feedback",
        formData
      )
      .then((data) => {
        setLoader(false);
        if (data.data.status === "mail_sent") {
          window.location.href = `/thank-you?service=${values.name}`;
        }
        data.data.status === "mail_sent" ? setSuccess(true) : setSuccess(false);
        data.data.status === "mail_sent"
          ? setForm({
              name: "",
              email: "",
              phone: "",
              message: "",
            })
          : "";
        setMessage(data.data.message);
      });
  };

  return (
    <>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li> Contact</li>
        </ul>
        <h1>Contact us</h1>
      </section>
      <div id="nymain">
        <div className="right">
          <div className="container">
            <h2 className="text-center text-yellow">Contact Us</h2>
            <section className="contact_form_area contact_us section_padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-right contact_details">
                      <div className="hero-title-with-shape">
                        <h4 className="heading_with_border">Contact with us</h4>
                        <h1>
                          We offer 24/7 emergency service to all of our
                          customers
                        </h1>
                      </div>
                      <p>
                        There are many variations of passages of new lorem ipsum
                        available, but the majority have suffered.
                      </p>
                      <div className="contact_location_box">
                        <div
                          className="contact_location_map"
                          style={{ width: "100%", padding: "40px 20px !important" }}
                        >
                          <span className="icon-location" />
                          <p>
                            Address：1-2F, B2 Building, Junfeng Zhongcheng
                            Zhizao Innovation Park,
                            <br /> Heping Community, Fuhai Street,Bao'an
                            District, Shenzhen, China{" "}
                          </p>
                        </div>
                        <div
                          className="contact_location_map contact_location_call"
                          style={{ padding: "40px 20px !important" }}
                        >
                          <span className="icon-contact_call" />
                          <p>
                            patty@cer-mark.com
                            <br />
                            Phone: +86-135-28437881 <br />
                            Whatsapp: +86-135-28437881
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6" style={{ border: '2px solid #D5D5D5', padding: '12px' }}>
                    <div className="contact-right contact-right-style-2 responsive_mt">
                      <Formik
                        initialValues={{
                          name: "",
                          email: "",
                          phone: "",
                          country: null,
                          message: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                      >
                        <Form>
                          <div className="row">
                            <div className="col-md-6">
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-danger"
                              />
                              <Field
                                type="text"
                                name="name"
                                placeholder="Your name"
                                className=" input_m_right"
                              />
                             
                            </div>
                            <div className="col-md-6">
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                              />
                              <Field
                                type="email"
                                name="email"
                                placeholder="Email address"
                                className=""
                              />
                              
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                            <ErrorMessage
                                name="phone"
                                component="div"
                                className="text-danger"
                              />
                              <Field
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                              />
                              
                            </div>
                            <div className="col-md-6">
                              <Select
                                name="country"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                options={countryOptions}
                                placeholder="Select a country"
                                required
                               styles={{margin:'-8'}}
                              />
                            </div>
                          </div>
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="text-danger"
                          />
                          <Field
                            as="textarea"
                            name="message"
                            id="content"
                            placeholder="Write message"
                            rows="7" 
                          />
                          
                          <button
                            type="submit"
                            className="btn-yellow"
                            disabled={loader}
                          >
                            {loader ? (
                              <Image
                                src="/assets/images/loader6.gif"
                                width={30}
                                height={30}
                                alt="loader"
                                style={{ marginRight: "10px" }}
                              />
                            ) : (
                              ""
                            )}
                            SUBMIT NOW
                          </button>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;