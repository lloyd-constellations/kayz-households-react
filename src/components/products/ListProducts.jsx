import React from "react";
import Product from "./Product";

import "./Products.css";

const ListProducts = () => {
  return (
    <>
      <div className="products-container">
        <div className="products-grid">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};

export default ListProducts;
