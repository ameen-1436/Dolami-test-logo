import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLangPopup } from "../store/categorySlice";

const LanguageSelector = () => {
  const state = useSelector((state) => state.category);

  return (
    <>
      {/* Popup */}
      {state?.langPopup && (
        <div className="lang-menu" >
            <div className="mainlang-menu" >sdfdsa</div>
        </div>
      )}
    </>
  );
};

export default LanguageSelector;
