import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import ProductReducer from "./features/ProductSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductReducer,
  },
});
