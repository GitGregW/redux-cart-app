import { createSlice } from '@reduxjs/toolkit'

const initialCart = { show: false };

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        toggleShow(state){
            state.show = !state.show;
        }
    }
});