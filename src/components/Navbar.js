"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CategoriesPopup from "./CategoryDropdown";
import { isMobile } from "react-device-detect";
import "./navbar.css";
import FilterPopup from "./Slider";
import {
  setMainCat,
  setSubCat,
  setUserMenu,
  setLangPopup,
} from "../store/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import UserMenu from "./UserMenu";
import LanguageSelector from "./LanguagePopup";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [device, setDevice] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const dispatch = useDispatch();
  const slectedCategory = useSelector((state) => state?.category);

  const toggleLangPopup = () => {
    dispatch(setLangPopup(!slectedCategory?.langPopup));
  };
  useEffect(() => {
    if (isMobile) setDevice(true);
  }, []);

  const handleUserMenu = () => {
    if (device) dispatch(setUserMenu(!slectedCategory?.isUserMenuVisible));
  };

  const toggleCatPopup = () => {
    setIsPopupVisible(!isPopupVisible);
    setActiveSubmenu(null);
  };

  const openSubMenu = (submenu, activeMenu) => {
    if (device) {
      setActiveSubmenu(submenu);
    }
    if(activeMenu === "All") dispatch(setMainCat(activeMenu));
    setTimeout(() => {
      if (activeMenu === "All") setIsPopupVisible(false);
    }, "10");
  };

  if (slectedCategory.mainCat === "ALL") {
    setIsPopupVisible(!isPopupVisible);
    dispatch(setSubCat(null));
  }

  const goBack = () => {
    setActiveSubmenu(null); // Go back to the main menu
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className={"navbar"}>
      {!device && (
        <div className={"logo"}>
          <Link href="/">
            <Image src="/logoimage.png" alt="Your Logo" width={100} height={25} />
          </Link>
        </div>
      )}
      <div className="overlapping-search-bar-container">
        <input
          type="text"
          placeholder="keyword"
          className="search-bar-input search-1"
        />
        <button className="search-bar-input search-2" onClick={toggleCatPopup}>
          Category
        </button>

        {/* Search Button */}
        <button className="search-bar-button">
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(90)"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </button>
      </div>
      <CategoriesPopup
        isPopupVisible={isPopupVisible}
        toggleCatPopup={toggleCatPopup}
        activeSubmenu={activeSubmenu}
        goBack={goBack}
        openSubMenu={openSubMenu}
      />
      {!device && (
        <>
          {" "}
          <div
            className="icon-container"
            style={{ marginLeft: "2%" }}
            onClick={togglePopup}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6V4M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10M12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10M6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14M6 18C4.89543 18 4 17.1046 4 16C4 14.8954 4.89543 14 6 14M6 18V20M6 14V4M12 10V20M18 18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14M18 18C16.8954 18 16 17.1046 16 16C16 14.8954 16.8954 14 18 14M18 18V20M18 14V4"
                stroke="white"
                strokeWidth="2"

              />
            </svg>
          </div>
          <FilterPopup isOpen={isOpen} togglePopup={togglePopup} />
        </>
      )}
      
      <div className={"actions"}>
        {!device && (
          <>
            <div style={{ marginLeft: "5%", width: "50%" }}>
              List Your Creation
            </div>
            <div className="" onClick={toggleLangPopup}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </>
        )}
        <div className="user-icon" style={{ marginLeft: "5%" }}>
          <div
            style={{ marginLeft: device ? "8px" : "" }}
            onClick={handleUserMenu}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 10H20M4 14H20M4 18H20"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div>
            {!device && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z"
                  fill="white"
                />
                <path
                  d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
        <UserMenu />
        {!device && (
          <div className="cart-icon" style={{ marginLeft: "5%" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        )}
        
      </div>
    </nav>
    </>
  );
}

export default Navbar;
