import { createSlice } from "@reduxjs/toolkit";
import ProductItems from "../../components/products/ProductItems";

const initialState = {
  productItems: [],
  cartItems: [],
  cartTotalQuantity: 0,
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
          productItem = {
            ...productItem,
            cartQuantity: productItem.cartQuantity + 1,
          };

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
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, cartTotalQuantity: quantity, cartTotalAmount: total };
    },
  },
});

export const { productsFetch, addToCart, getTotals } = productsSlice.actions;

export default productsSlice.reducer;
