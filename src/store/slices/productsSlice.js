import { createSlice } from "@reduxjs/toolkit";
import ProductItems from "../../components/products/ProductItems";

const initialState = {
  productItems: [],
  cartItems: [],
  cartTotalAmount: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetch(state, action) {
      return { ...state, productItems: ProductItems };
    },
    addToCart(state, action) {
      let tempProductItems = state.productItems.map((productItem) => {
        if (productItem.id === action.payload.id) {
          // Update a product
          productItem = {
            ...productItem,
            cartAmount: productItem.cartAmount + 1,
          };

          // Update the cart
          const nextCartItems = [...state.cartItems];
          const existingIndex = nextCartItems.findIndex(
            (item) => item.id === action.payload.id
          );

          if (existingIndex >= 0) {
            nextCartItems[existingIndex] = {
              ...productItem,
            };
          } else {
            nextCartItems.push(productItem);
          }

          state.cartItems = nextCartItems;
        }
        return productItem;
      });
      state.productItems = tempProductItems;
      // return { ...state, productItems: tempProductItems };
    },
  },
});

export const { productsFetch, addToCart } = productsSlice.actions;

export default productsSlice.reducer;
