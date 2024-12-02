import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "./../app/description.css";
import { Provider, useSelector } from "react-redux";
import { store } from "../store/store";
import RootLayout from "../app/layout";
import "./../app/description.css";

export default function Product() {
  const [product, setProduct] = useState(null);

  const router = useRouter();
  useEffect(() => {
    if (router.query.id) {
      const { id, name } = router.query;
      setProduct({ id, name });
    }
  }, [router.query]);

  const goBack = () => {
    router.push("/");
  };

  return (
    <Provider store={store}>
      <RootLayout>
        <div className="product-container">
          <div
            onClick={goBack}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            {" "}
            &larr; Back to Products Page
          </div>
          {/* Product Page */}
          <div className="product-page">
            {/* Product Images Section */}
            <div className="product-images">
              <img
                src="/logoimage.png"
                alt="Main Product"
                className="main-image"
              />
              <div className="thumbnail-container">
                <img
                  src="/logoimage.png"
                  alt="Thumbnail 1"
                  className="thumbnail"
                />
                <img
                  src="/logoimage.png"
                  alt="Thumbnail 2"
                  className="thumbnail"
                />
                <img
                  src="/logoimage.png"
                  alt="Thumbnail 3"
                  className="thumbnail"
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div className="product-details">
              <h1 className="product-title">{product?.name}</h1>
              <h5>{product?.name} is an Avatar created by Dolami.Inc using latest VR Technology</h5>
              <p className="owner">
                Created by: <span>Yuta</span>
              </p>
              <p className="price">₹1,349</p>
              <p className="discounted-price">₹2,999</p>
              <p className="rating">4.5 ⭐ | 27 ratings | 10 reviews</p>

              {/* Colors */}
              <div className="product-color">
                <h3>Color:</h3>
                <div className="color-options">
                  <div className="color-box red"></div>
                  <div className="color-box blue"></div>
                  <div className="color-box yellow"></div>
                </div>
              </div>

              {/* Sizes */}
              <div className="product-size">
                <h3>Avatar Variants:</h3>
                <div className="size-options">
                  <button className="size">A</button>
                  <button className="size">B</button>
                  <button className="size">C</button>
                  <button className="size">D</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="add-to-cart">Add to Cart</button>
                <button className="buy-now">Buy Now</button>
              </div>
            </div>
          </div>

          {/* User Reviews Section */}
          <div className="reviews-section">
            <h2>User Reviews</h2>
            <div className="review">
              <p>
                <strong>John Doe:</strong> Excellent product! Very comfortable.
              </p>
            </div>
            <div className="review">
              <p>
                <strong>Jane Smith:</strong> Great quality and perfect fit!
              </p>
            </div>
          </div>
        </div>
      </RootLayout>
    </Provider>
  );
}
