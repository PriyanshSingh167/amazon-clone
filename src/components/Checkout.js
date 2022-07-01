import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import Product from "./Product";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const createEntry = (item) => {
    return (
      <Product
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        rating={item.rating}
        image={item.image}
      />
    );
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />

        <div>
          <h2 className="checkout__title">Your Shopping cart</h2>
          <div className="checkout__items">{basket.map(createEntry)}</div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
