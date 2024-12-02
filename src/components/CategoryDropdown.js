"use client";

import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useDispatch } from "react-redux";
import { setMainCat, setSubCat } from "../store/categorySlice";
import "./dropdown.css";

const CategoriesPopup = ({
  isPopupVisible,
  toggleCatPopup,
  openSubMenu,
  goBack,
  activeSubmenu,
}) => {
  const [activeMenu, setActiveMenu] = useState("All");
  const [menuItemSelectec, setMenuItemSelected] = useState("");
  const [device, setDevice] = useState("");
  useEffect(() => {
    if (isMobile) setDevice(true);
  }, []);

  const dispatch = useDispatch();
  const MENU_DATA = [
    {
      name: "Avatars",
      submenu: [
        "Human-like",
        "Anthro & Furry",
        "Robot & Cyborgs",
        "Others",
        "All in Avatars",
      ],
    },
    {
      name: "Fashion",
      submenu: ["Clothes", "Accessories", "Others", "All in Fashion"],
    },
    {
      name: "All",
    },
  ];

  const handleMenuMouseEnter = (menuName, submenu) => {
    if (submenu?.length > 0) {
      setActiveMenu(menuName);
    }
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleSubmenuClick = (item) => {
    setMenuItemSelected(item);
    dispatch(setMainCat(activeMenu));
    dispatch(setSubCat({ item }));
    toggleCatPopup(false);
  };

  return (
    <>
      {isPopupVisible && (
        <>
          <div className={!device ? "popup-menu" : "popup-menu-mobile"}>
            {/* Main Menu */}
            <div
              className={!device ? "main-menu" : "menu-list"}
              onMouseLeave={handleMouseLeave}
            >
              {activeSubmenu === null &&
                MENU_DATA.map((menu, index) => (
                  <>
                    {activeSubmenu === null && (
                      <span
                        key={`main-menu-${menu.name}-${index}`}
                        className={device ? "menu-item" : "menu-nonmobile"}
                        onMouseEnter={() =>
                          handleMenuMouseEnter(menu?.name, menu?.submenu)
                        }
                        onClick={() => openSubMenu(menu?.submenu, menu?.name)}
                      >
                        {menu?.name}{" "}
                        <span className="arrow-mobile">
                          {menu?.name != "All" && (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 5L16 12L9 19"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </span>
                      </span>
                    )}
                  </>
                ))}
            </div>

            {/* Dividing Line */}
            {!device && (
              <div className={`divider ${activeMenu ? "visible" : ""}`}></div>
            )}

            {/* Submenu */}
            {
              <div
                className={!device ? "submenu" : ""}
                onMouseEnter={() => setActiveMenu(activeMenu)} // Keep submenu active when hovering over it
                onMouseLeave={handleMouseLeave} // Hide submenu when cursor leaves
              >
                {device && activeSubmenu !== null && (
                  <span className="menu-header" onClick={goBack}>
                    {activeMenu !== "All" && <div>{activeMenu}</div>}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5L16 12L9 19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                  </span>
                )}
                {((device && activeSubmenu) || (!device && activeMenu)) &&
                  MENU_DATA.filter((menu) => menu?.name === activeMenu).map(
                    (menu, index) =>
                      menu?.submenu?.map((item, subIndex) => (
                        <span
                          key={`submenu-${menu.name}-${item}-${index}-${subIndex}`}
                          className={device ? "menu-item" : ""}
                          onClick={() => handleSubmenuClick(item)}
                        >
                          {item}
                        </span>
                      ))
                  )}
              </div>
            }
          </div>
        </>
      )}
    </>
  );
};

export default CategoriesPopup;
