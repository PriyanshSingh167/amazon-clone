import React from "react";
import "./Product.css";

function Product({ title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="heading__image">{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>{rating}</p>
        </div>
      </div>
      <img src={image} alt="chainsaw man" />
      <button>Add To Cart</button>
    </div>
  );
}

export default Product;
