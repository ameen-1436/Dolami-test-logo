import React, { useState, useEffect } from "react";
import { store } from "../store/store";
import { useRouter } from "next/router";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import "./../app/globals.css";
import DropdownMenu from "../components/CategoryDropdown";
import { Provider, useSelector } from "react-redux";


const products = [
  {
    category: "Avatars",
    subcategory: "Human-like",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Avatars",
    subcategory: "Anthro & Furry",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Avatars",
    subcategory: "Robot & Cyborgs",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Fashion",
    subcategory: "Clothes",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Fashion",
    subcategory: "Accessories",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Avatars",
    subcategory: "Human-like",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Avatars",
    subcategory: "Anthro & Furry",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Avatars",
    subcategory: "Robot & Cyborgs",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Fashion",
    subcategory: "Clothes",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Fashion",
    subcategory: "Accessories",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Avatars",
    subcategory: "Human-like",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Avatars",
    subcategory: "Anthro & Furry",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Avatars",
    subcategory: "Robot & Cyborgs",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Fashion",
    subcategory: "Clothes",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
  {
    category: "Fashion",
    subcategory: "Accessories",
    productName: "Product name",
    creatorName: "Creator name",
    rating: 5.0,
    price: 10.0,
  },
];

const App = () => {
  const pass = "fedev2024test";
  const [inputValue, setInputValue] = useState("");
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  

  useEffect(() => {
    // Check sessionStorage for authentication status
    const isAuthenticated = sessionStorage.getItem("authenticated");
    if (isAuthenticated) {
      setIsOverlayVisible(false);
    } else {
      setAuthenticated(true);
    }

    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const router = useRouter();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCardClick = (product) => {
    router.push({
      pathname:"/description",
      query: {
        id: product.category,
        name: product.subcategory,
      },
    });
  };

  const handleSubmit = () => {
    if (inputValue === pass) {
      sessionStorage.setItem("authenticated", "true"); // Save authentication status
      setIsOverlayVisible(false);
      setAuthenticated(true);
    } else {
      alert("Please enter the correct password.");
    }
  };
  if(isOverlayVisible){
    return(
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
    )
  }
  return (
    <Provider store={store}>
      <Navbar />
      <div className="AppContainer">
        <div className="Main">
          <ProductGrid products={products} handleCardClick={handleCardClick}/>
        </div>
      </div>
    </Provider>
  );
};

export default App;
