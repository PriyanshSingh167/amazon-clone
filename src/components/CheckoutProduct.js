import React from "react";
import "../styles/CheckoutProduct.css";
import Button from "@mui/material/Button";
import { useStateValue } from "../context/StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (e) => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    e.preventDefault();
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
      <Button onClick={removeFromBasket}>Remove From Cart</Button>
    </div>
  );
}

export default CheckoutProduct;
