import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProducts: (state, action) => {
            return action.payload;
        }
    },
});

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;