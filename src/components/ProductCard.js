import React from 'react';

const ProductCard = ({ category, subcategory, productName, creatorName, rating, price, product, handleCardClick }) => (
  <div className='Card' onClick={() => handleCardClick(product)}>
    <div className='ImagePlaceholder'>{`${category} > ${subcategory}`}</div>
    <div className='ProductInfo'>
      <div className='ProductName'>{productName}</div>
      <div className='CreatorName'>{creatorName}</div>
      <div className='Rating'>{`★★★★★ ${rating}`}</div>
      <div className='Price'>{`$${price}`}</div>
    </div>
  </div>
);

export default ProductCard;
