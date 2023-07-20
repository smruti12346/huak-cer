"use client";
import { useEffect, useState, useRef } from "react";

const FeatureServiceArea = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const featureServiceAreaRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      if (featureServiceAreaRef.current) {
        const elementTop =
          featureServiceAreaRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop - windowHeight <= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    document.addEventListener("scroll", checkScroll);
    checkScroll(); // Check on page load

    return () => {
      document.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      startCount(10000, setCount1);
      startCount(8923, setCount2);
      startCount(12, setCount3, 1000);
    }
  }, [isVisible]);

  const startCount = (targetCount, setCount) => {
    let currentCount = 0;
    const increment = Math.ceil(targetCount / 400); // Adjust the animation speed here

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        clearInterval(timer);
        currentCount = targetCount;
      }
      setCount(currentCount);
    }, 10);
  };

  return (
    <div
      className={`feature_service_area text-center ${
        isVisible ? "animate" : ""
      }`}
      ref={featureServiceAreaRef}
    >
      <div className="feature_service_box_width">
        <i className="icon-wallet"></i>
        <p className="heading">Excellent Price 100$+</p>
      </div>
      <div className="feature_service_box_width">
        <i className="icon-diploma"></i>
        <p className="heading">Certificate Of Authentication 50+</p>
      </div>
      <div className="feature_service_box_width">
        <i className="icon-big_clock"></i>
        <p className="heading">Successful projects</p>
        <p className="numbercounter">{count1}+</p>{" "}
        {/* Updated: Display count1 */}
      </div>
      <div className="feature_service_box_width">
        <i className="icon-handshake"></i>
        <p className="heading">Happy customers</p>
        <p className="numbercounter">{count2}+</p>{" "}
        {/* Updated: Display count2 */}
      </div>
      <div className="feature_service_box_width">
        <i className="icon-mechanic"></i>
        <p className="heading">Year of experience</p>
        <p className="numbercounter">{count3}+</p>{" "}
        {/* Updated: Display count3 */}
      </div>
    </div>
  );
};

export default FeatureServiceArea;
