import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Reducers/cartCount"; // Update the path to your cartSlice
import cartItemsReducer from "../Reducers/cartItems"; // Ensure the path and name match your file

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartItems: cartItemsReducer, // Updated to match the name of the cart items reducer
    },
   
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
