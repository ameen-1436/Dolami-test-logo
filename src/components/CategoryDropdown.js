import React, { useState } from "react";
import "./dropdown.css";

const CategoriesPopup = ({ isPopupVisible, toggleCatPopup }) => {
  const [activeMenu, setActiveMenu] = useState("All");

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
      submenu:[],
    },
  ];

  const handleMenuMouseEnter = (menuName, submenu) => {
    if (submenu?.length > 0) setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };
  const handleSubmenuClick = (item) => {
    alert(`You clicked on ${item}`);
    toggleCatPopup(false); // Close popup after click
  };

  return (
    <>
      {isPopupVisible && (
        <>
          <div className="popup-menu">
            {/* Main Menu */}
            <div
              className="main-menu"
              onMouseLeave={handleMouseLeave} // Hide submenu if cursor leaves the main menu area
            >
              {MENU_DATA.map((menu) => (
                <span
                  key={menu.name}
                  onMouseEnter={() =>
                    handleMenuMouseEnter(menu?.name, menu?.submenu)
                  }
                >
                  {menu?.name}{" "}
                  <span className="arrow">
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
                          stroke="#111827"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </span>
              ))}
            </div>

            {/* Dividing Line */}
            <div className={`divider ${activeMenu ? "visible" : ""}`}></div>

            {/* Submenu */}
            <div
              className="submenu"
              onMouseEnter={() => setActiveMenu(activeMenu)} // Keep submenu active when hovering over it
              onMouseLeave={handleMouseLeave} // Hide submenu when cursor leaves
            >
              {MENU_DATA.filter((menu) => menu.name === activeMenu).map(
                (menu) =>
                  menu.submenu.map((item) => (
                    <span key={item} onClick={() => handleSubmenuClick(item)}>
                      {item}
                    </span>
                  ))
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CategoriesPopup;
