import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./fetature/cart/cartSlice";
const store = configureStore({
    reducer: {
       cart: cartSlice,
    },
});

export default store;
