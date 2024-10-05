import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: false,
};

const url = "https://www.course-api.com/react-useReducer-cart-project";

export const getCartItem = createAsyncThunk("cart/getCartItems", () => {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
});

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calcTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers: {
        [getCartItem.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItem.fulfilled]: (state, action) => {
            console.log("action", action);
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItem.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calcTotals } =
    cartSlice.actions;

export default cartSlice.reducer;
