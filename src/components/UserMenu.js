import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserMenu } from "../store/categorySlice";
import "./Burgermenu.css";

const MENU_ITEMS = [
  { title: "Shopping", options: ["Your cart"] },
  { title: "Your account", options: ["Sign in", "Sign up"] },
  { title: "Support", options: ["Message to Yuta (The founder)"] },
  { title: "Language", options: ["English (US)"] },
];

const UserMenu = () => {
  //   const [isMenuVisible, setMenuVisible] = useState(false); // State to toggle menu
  const isMenuVisible = useSelector(
    (state) => state?.category?.isUserMenuVisible
  );
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(setUserMenu(!isMenuVisible));
  };
  const Arrow = () => {
    return (
      <div>
        {" "}
        <svg
          style={{ marginBottom: "-6px", marginRight: "40px" }}
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
            transform="360deg"
          />
        </svg>
      </div>
    );
  };

  const CartIcon = () => {
    return (
      <svg
      style={{paddingRight:"10px"}}
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
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <div className="userburger-menu">
      {/* Side menu */}
      {isMenuVisible && (
        <div className="userside-menu">
          <span
            className="usermenu-header"
            style={{ color: "white" }}
            onClick={toggleMenu}
          >
            <svg
              style={{
                transform: "rotate(180deg)",
                paddingTop: "10px",
                marginBottom: "-6px",
              }}
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
                transform="360deg"
              />
            </svg>{" "}
            Go back
          </span>
          <p className="usermenu-greeting">Hello,</p>
          {MENU_ITEMS.map((menu, index) => (
            <div key={index} className="usermenu-section">
              <div className="usermenu-title">{menu.title}</div>
              {menu.options.map((option, idx) => (
                <div key={idx} className="usermenu-item">
                  <div style={{ display: "flex" }}>
                    {option === "Your cart" && <CartIcon />} {option}
                  </div>{" "}
                  <Arrow />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
