import React from "react";
import "../styles/Product.css";
import Button from "@mui/material/Button";
import { useStateValue } from "../context/StateProvider";

function Product({ id, title, price, rating, image }) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (prevState) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="heading__image">{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="chainsaw man" />
      <Button onClick={addToBasket}>Add To Cart</Button>
    </div>
  );
}

export default Product;
