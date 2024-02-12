import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cart.js'
import { cartItemsSlice } from './cartItems.js'


export const store = configureStore(
    { reducer: { cart: cartSlice.reducer, cartItems: cartItemsSlice.reducer }}
);

export const cartActions = cartSlice.actions;
export const cartItemsActions = cartItemsSlice.actions;