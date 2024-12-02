import React from "react";
import { useSelector, useDispatch } from "react-redux";

const LanguageSelector = () => {
  const state = useSelector((state) => state.category);

  return (
    <>
      {/* Popup */}
      {state?.langPopup && (
        <div className="lang-menu" >
            <div className="mainlang-menu" ></div>
        </div>
      )}
    </>
  );
};

export default LanguageSelector;
