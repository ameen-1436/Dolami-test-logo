import React, { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import "./../app/globals.css";
import DropdownMenu from "../components/CategoryDropdown";

const App = () => {
  const pass = "fedev2024test";
  const [inputValue, setInputValue] = useState("");
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedSubMenu, setSelectedSubMenu] = useState("");

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    if (!isDropdownVisible) setActiveMenu("");
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
    setSelectedSubMenu("");
    console.log("Menu clicked:", menu);
  };

  const handleSubMenuClick = (subMenu) => {
    setSelectedSubMenu(subMenu);
    console.log("Submenu clicked:", subMenu);
  };

  const handleCategory = () =>{
    
  }
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
      <Navbar toggleDropdown={toggleDropdown} />
      <div className="AppContainer">
      <DropdownMenu
        isVisible={isDropdownVisible}
        activeMenu={activeMenu}
        onMenuClick={handleMenuClick}
        onSubMenuClick={handleSubMenuClick}
      />
        <div className="Main">
          <div className="Breadcrumb">Pardent category &gt; Child category</div>
          <ProductGrid />
        </div>
      </div>
    </>
  );
};

export default App;
