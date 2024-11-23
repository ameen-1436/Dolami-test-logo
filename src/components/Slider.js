import React, { useState, useRef, useEffect } from 'react';
import "./navbar.css"

function RangeSlider() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const minSliderRef = useRef(null);
  const maxSliderRef = useRef(null);

  const handleSliderDrag = (e, sliderRef, setValue) => {
    const slider = sliderRef.current;
    const sliderWidth = slider.offsetWidth;
    const sliderPosition = e.clientX - slider.offsetLeft;
    const percentage = (sliderPosition / sliderWidth) * 100;
    const value = Math.round(percentage / 100 * 100);
    setValue(value);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMinSliderDrag);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMinSliderDrag = (e) => {
      handleSliderDrag(e, minSliderRef, setMinValue);
    };

    minSliderRef.current.addEventListener('mousedown', (e) => {
      document.addEventListener('mousemove', handleMinSliderDrag);
      document.addEventListener('mouseup', handleMouseUp);
    });

    maxSliderRef.current.addEventListener('mouseup', (e) => {
        document.addEventListener('mousemove', handleMinSliderDrag);
        document.addEventListener('mousedown', handleMouseUp);
      });
  }, []);

  return (
    <div className="slider-container">
      <label>Price range</label>
      <div className="slider">
        <div className="slider-track"></div>
        <div className="slider-thumb" ref={minSliderRef} />
        <div className="slider-thumb" ref={maxSliderRef} />
      </div>
      <div className="price-range">
        <div className="min-price">$ {minValue.toFixed(2)}</div>
        <div className="max-price">$ {maxValue.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default RangeSlider;