// features/cartSlice.ts (or cartSlice.js)
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  cartItemCount: number;
}

const initialState: CartState = {
  cartItemCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.cartItemCount += 1;
    },
    decrement: (state) => {
      if (state.cartItemCount > 0) {
        state.cartItemCount -= 1;
      }
    },

  },
});

// Export the actions
export const { increment, decrement } = cartSlice.actions;

// Export the reducer to be added to the store
export default cartSlice.reducer;
