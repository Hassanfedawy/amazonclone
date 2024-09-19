import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    count: number;
}

const initialState: CartState = {
    count: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset:(state)=>{
            state.count=0
        }
    },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
