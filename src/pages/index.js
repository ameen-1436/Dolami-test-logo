import React from "react";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import "./../app/globals.css";

const App = () => (
  <>
    {" "}
    <Navbar />
    <div className="AppContainer">
      <div className="Main">
        <div className="Breadcrumb">Parent category &gt; Child category</div>
        <ProductGrid />
      </div>
    </div>
  </>   
);

export default App;
