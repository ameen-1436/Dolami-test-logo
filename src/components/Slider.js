import React, { useState } from "react";
import "./navbar.css"

const FilterPopup = ({isOpen, togglePopup}) => {
    // const [isOpen, setIsOpen] = useState(false);

    // // Toggle the popup
    // const togglePopup = () => {
    //   setIsOpen(!isOpen);
    // };

  return (
    <div className="filter-popup">
      {/* Filter Popup */}
      {isOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div
            className="popup-container"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Popup Header */}
            <div className="popup-header">
              <span className="popup-title">Filters</span>
              <button className="close-button" onClick={togglePopup}>
                &times;
              </button>
            </div>

            {/* Popup Body */}
            <div className="popup-body">
              {/* Price Range */}
              <div className="price-range">
                <label className="section-title">Price range</label>
                <div className="slider-container">
                  <input type="range" className="price-slider" />
                  <input type="range" className="price-slider" />
                </div>
                <div className="price-inputs">
                  <div className="price-input">
                    <span>Minimum</span>
                    <input type="text" placeholder="$ 000.00" />
                  </div>
                  <div className="price-input">
                    <span>Maximum</span>
                    <input type="text" placeholder="$ 000.00" />
                  </div>
                </div>
              </div>

              {/* Platforms */}
              <div className="platforms">
                <label className="section-title">Platforms</label>
                <div className="platform-grid">
                  {[
                    "VRChat (Quest)",
                    "VRChat (PCVR)",
                    "Spatial",
                    "ChilloutVR",
                    "Resonite",
                    "Neos VR",
                    "Cluster",
                    "Virtual Cast",
                    "Others",
                  ].map((platform, index) => (
                    <div className="platform-item" key={index}>
                      {platform}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Popup Footer */}
            <div className="popup-footer">
              <button className="clear-button" onClick={() => console.log("Clear all")}>
                Clear all
              </button>
              <button className="apply-button" onClick={() => console.log("Apply filters")}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPopup;
