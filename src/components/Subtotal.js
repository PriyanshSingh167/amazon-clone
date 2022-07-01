import React from "react";
import "../styles/Subtotal.css";
import Button from "@mui/material/Button";
import { useStateValue } from "../context/StateProvider";

function Subtotal() {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  // let value = 0;
  // basket.forEach((item) => {
  //   value += item.price;
  // });

  var totalVal = 0;
  totalVal = basket?.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div className="subtotal">
      <>
        <p>
          {/* Part of the homework */}
          Subtotal ({basket.length} items):₹ <strong>{totalVal}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </>

      <Button>Proceed to Checkout</Button>
    </div>
  );
}

export default Subtotal;
