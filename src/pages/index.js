import React, { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import "./../app/globals.css";

const App = () => {
  const pass = "fedev2024test";
  const [inputValue, setInputValue] = useState("");
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    if (inputValue === pass) {
      setIsOverlayVisible(false);
    } else {
      alert("Please enter the correct password.");
    }
  };
  return (
    <>
      {isOverlayVisible && (
        <div className={"overlay"}>
          <div className={"modal"}>
            <h2 style={{color: "black"}}>Please Enter the password</h2>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter Password Here"
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
      <Navbar />
      <div className="AppContainer">
        <div className="Main">
          <div className="Breadcrumb">Pardent category &gt; Child category</div>
          <ProductGrid />
        </div>
      </div>
    </>
  );
};

export default App;
