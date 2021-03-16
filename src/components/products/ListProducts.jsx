import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../../store/slices/productsSlice";

import "./Products.css";

const ListProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productItems);
  console.log("hey", products);
  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

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
