// Loader.js
import React, { useState, useEffect } from "react";
import "../../assets/css/custom_loader.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Hide loader after 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (!loading) {
    return null; // Don't render anything if loading is false
  }
  const popupStyle = {
    zIndex: 2006,
  };
  return (
    <div
      id="meHideFade"
      role="dialog"
      className="van-popup van-popup--center van-toast van-toast--middle van-toast--loading"
      style={popupStyle}
    >
      <div
        className="van-loading van-loading--circular van-toast__loading"
        aria-live="polite"
        aria-busy="true"
      >
        <span className="van-loading__spinner van-loading__spinner--circular">
          <svg className="van-loading__circular" viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"></circle>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Loader;
