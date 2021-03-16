import { createSlice } from "@reduxjs/toolkit";
import ProductItems from "../../components/products/ProductItems";

const initialState = {
  productItems: [],
  cartItems: [],
  cartAmount: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetch(state, action) {
      return { ...state, productItems: ProductItems };
    },
    addToCart(state, action) {
      state.productItems.map((productItem) => {
        if (productItem.id === action.payload.id) {
          productItem = {
            ...productItem,
            productAmount: productItem.productAmount + 1,
          };
          state.cartItems.push(productItem);
          console.log(productItem)
        }
      });

      // let tempProducts = state.productItems.map(productItem => {
      //   return productItem;
      // });
      // return { ...state, productItems: tempProducts };
    },
  },
});

export const { productsFetch, addToCart } = productsSlice.actions;

export default productsSlice.reducer;
