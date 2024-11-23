import React,{useState} from 'react';
import Link from 'next/link';
import DropdownMenu from './CategoryDropdown';
import "./navbar.css"

function Navbar() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => { setIsDropdownVisible(!isDropdownVisible)};
  return (
    <nav className={"navbar"}>
      <div className={"logo"}>
        <Link href="/">
          <img src="/logoimage.png" alt="Your Logo" />
        </Link>
      </div>
      <div className={"search"}>
        <input type="text" placeholder="Keyword" />
        <button onClick={toggleDropdown}> categories</button>
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
        <DropdownMenu isVisible={isDropdownVisible}/>
      <div className={"actions"}>
        <Link href="/list-creation">
          <button>
            <i className="fa fa-plus"></i>
            List Your Creation
          </button>
        </Link>
        <button>
          <i className="fa fa-bars"></i>
        </button>
        <Link href="/cart">
          <button>
            <i className="fa fa-shopping-cart"></i>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;