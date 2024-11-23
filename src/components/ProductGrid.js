import React from 'react';
import ProductCard from './ProductCard';



const products = [
  { category: 'Avatars', subcategory: 'Human-like', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Avatars', subcategory: 'Anthro & Furry', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Avatars', subcategory: 'Robot & Cyborgs', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Fashion', subcategory: 'Clothes', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Fashion', subcategory: 'Accessories', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Avatars', subcategory: 'Human-like', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Avatars', subcategory: 'Anthro & Furry', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Avatars', subcategory: 'Robot & Cyborgs', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Fashion', subcategory: 'Clothes', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Fashion', subcategory: 'Accessories', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Avatars', subcategory: 'Human-like', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Avatars', subcategory: 'Anthro & Furry', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Avatars', subcategory: 'Robot & Cyborgs', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Fashion', subcategory: 'Clothes', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
  { category: 'Fashion', subcategory: 'Accessories', productName: 'Product name', creatorName: 'Creator name', rating: 5.0, price: 10.00 },
];

const ProductGrid = () => (
  <div style={{display:"flex", flexWrap: "wrap", justifyContent: "center"}}>
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
);

export default ProductGrid;
