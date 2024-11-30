import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, handleCardClick }) => {
  const router = useRouter();
  const catState = useSelector((state) => state?.category);

  let filteredProducts = [];
  if (catState?.mainCat === "All") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (product) => product?.subcategory === catState?.subCat
    );
  }

  return (
    <>
      <div className="Breadcrumb" style={{ padding: "5px" }}>
        {catState?.mainCat} &gt; {catState?.subCat}
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            handleCardClick={handleCardClick}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
