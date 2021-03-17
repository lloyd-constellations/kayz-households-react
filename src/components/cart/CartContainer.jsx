import React from "react";
import "./Cart.css"

import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  return (
    <>
    <div className="cart-container">
      <h2>Cart - {cartItems.length}</h2>
      {cartItems &&
        cartItems.map((cartItem) => {
          <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
    </div>
    </>
  );
};

export default CartContainer;
