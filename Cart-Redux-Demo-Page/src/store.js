import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./fetature/cart/cartSlice";
import modalSlice from "./fetature/cart/modal/modalSlice";
const store = configureStore({
    reducer: {
        cart: cartSlice,
        modal: modalSlice
    },
});

export default store;
