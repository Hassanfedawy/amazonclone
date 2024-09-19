import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    images: string[];
    quantity: number; // Added quantity property to track number of items
}

interface CartState {
    products: Product[];
}

const initialState: CartState = {
    products: [],
};

const cartSlice = createSlice({
    name: "CartItems",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            
            if (existingProduct) {
                // If the product is already in the cart, increase its quantity
                existingProduct.quantity += 1;
            } else {
                // If the product is new, add it with a quantity of 1
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const existingProduct = state.products.find(product => product.id === action.payload);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            } else {
                // If the quantity is 1, remove the product from the cart
                state.products = state.products.filter(product => product.id !== action.payload);
            }
        },
    },
});

export const { addToCart, removeFromCart, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
