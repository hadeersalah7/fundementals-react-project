import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import axios from "axios";
import { openModal } from "./modal/modalSlice";
const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: false,
};

const url = "https://www.course-api.com/react-useReducer-cart-projects";

export const getCartItem = createAsyncThunk("cart/getCartItems", async (thunkAPI) => {
    try {
        console.log("thunlApi----", thunkAPI)
        thunkAPI.dispatch(openModal())
        const res = await axios(url);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue("something went wrong")
    }

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
    extraReducers: (builder) => {
        builder.addCase(getCartItem.pending, (state) => {
            state.isLoading = true;
        },).addCase(getCartItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },).addCase(getCartItem.rejected, (state, action) => {
            state.isLoading = false;
        },)
    }

});


export const { clearCart, removeItem, increase, decrease, calcTotals } =
    cartSlice.actions;

export default cartSlice.reducer;
