import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      content: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.",
      author: "Jim Doe",
      designation: "Director",
      image: "/testimonialimage/testimonial-1.jpg",
    },
    {
      id: 2,
      content: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.",
      author: "Mark Doe",
      designation: "Developer",
      image: "/testimonialimage/testimonial-1.jpg",
    },
    {
      id: 3,
      content: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.",
      author: "Shirley Smith",
      designation: "Director",
      image: "./testimonialimage/testimonial-1.jpg",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonial_area text-center section_padding">
      <div className="container">
        <div className="testimonial_slider">
          <Slider {...settings}>
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className="testimonial_details">
                <p>{testimonial.content}</p>
                <h4>{testimonial.author}</h4>
                <span>{testimonial.designation}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
