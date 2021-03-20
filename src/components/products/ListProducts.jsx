import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../store/slices/productsSlice";

import "./Products.css";

const ListProducts = () => {
  const products = useSelector((state) => state.products.productItems);
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getTotals());
  }, [products, dispatch]);

  return (
    <>
      <div className="products-container">
        <div className="products-grid">
          {products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ListProducts;
