import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';


const ProductDetail = () => {
  const params = useParams<Record<string, string>>();
  return (
    <div>Product Detail :{params.productId}</div>
  )
}

export default ProductDetail;  