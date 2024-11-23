// components/DropdownMenu.js
import { useState } from 'react';
import "./dropdown.css"

const DropdownMenu = ({isVisible}) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

if (!isVisible) return null

  return (
    <div className={'menuContainer'}>
      <div className={'menuItem'} onClick={() => handleMenuClick('avatars')}>
        Avatars
        {activeMenu === 'avatars' && (
          <div className={'subMenu'}>
            <button className={'subMenuItem'}>Human-like</button>
            <button className={'subMenuItem'}>Anthro & Furry</button>
            <button className={'subMenuItem'}>Robot & Cyborgs</button>
            <button className={'subMenuItem'}>Others</button>
            <button className={'subMenuItem'}>All in Avatars</button>
          </div>
        )}
      </div>
      <div className={'menuItem'} onClick={() => handleMenuClick('fashion')}>
        Fashion
      </div>
      <div className={'menuItem'} onClick={() => handleMenuClick('all')}>
        All
      </div>
    </div>
  );
};

export default DropdownMenu;
