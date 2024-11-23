import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImagePlaceholder = styled.div`
  background-color: #f4f4f4;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #aaa;
  margin-bottom: 8px;
`;

const ProductInfo = styled.div`
  text-align: left;
`;

const ProductName = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const CreatorName = styled.div`
  color: #888;
  margin-bottom: 8px;
`;

const Rating = styled.div`
  color: gold;
  margin-bottom: 8px;
`;

const Price = styled.div`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

const ProductCard = ({ category, subcategory, productName, creatorName, rating, price }) => (
  <div className='Card'>
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
