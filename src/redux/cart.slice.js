import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (_, action) => {
            return action?.payload
        },
        emptyCart: () => {
            return [];
        }
    },
});

export const { addToCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;