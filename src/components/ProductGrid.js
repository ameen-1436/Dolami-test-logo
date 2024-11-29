import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

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

const ProductGrid = () => {
  const catState = useSelector((state) => state?.category);
  const handleCardClick = (product) => {};
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
            onClick={() => handleCardClick(product)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
