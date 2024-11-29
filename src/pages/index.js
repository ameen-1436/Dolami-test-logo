import React, { useState } from "react";
import { store } from "../store/store";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import "./../app/globals.css";
import DropdownMenu from "../components/CategoryDropdown";
import { Provider, useSelector } from "react-redux";

const App = () => {
  const pass = "fedev2024test";
  const [inputValue, setInputValue] = useState("");
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState("All");
  const [menuItemSelectec, setMenuItemSelected] = useState("");

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
    <Provider store={store}>
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
          <ProductGrid />
        </div>
      </div>
    </Provider>
  );
};

export default App;
