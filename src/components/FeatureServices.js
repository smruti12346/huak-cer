import React, { useEffect, useState, useRef } from 'react';


const FeatureServiceArea = () => {
  const [isVisible, setIsVisible] = useState(false);

  const featureServiceAreaRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      if (featureServiceAreaRef.current) {
        const elementTop = featureServiceAreaRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop - windowHeight <= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    document.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load

    return () => {
      document.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div
      className={`feature_service_area text-center ${isVisible ? 'animate' : ''}`}
      ref={featureServiceAreaRef}
    >
      <div className="feature_service_box_width">
        <i className="icon-wallet"></i>
        <p>No Upfront Payments</p>
      </div>
      <div className="feature_service_box_width">
        <i className="icon-diploma"></i>
        <p>Satisfaction Guarantee</p>
      </div>
      <div className="feature_service_box_width">
        <i className="icon-big_clock"></i>
        <p>Emergency Service</p>
      </div>
      <div className="feature_service_box_width">
        <i className="icon-handshake"></i>
        <p>Fixed Right Promise</p>
      </div>
      <div className="feature_service_box_width">
        <i className="icon-mechanic"></i>
        <p>8 Years Experience</p>
      </div>
    </div>
  );
};

export default FeatureServiceArea;
