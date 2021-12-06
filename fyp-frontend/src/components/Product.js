import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="ProdListViewCard">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="ProdListViewCardBody">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link> 
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">Rs&nbsp;{product.price}</div>
      </div>
    </div>
  );
}