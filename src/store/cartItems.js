import { createSlice } from '@reduxjs/toolkit'

const initialCartItems = {};

export const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: initialCartItems,
    reducers: {
        increment(state, title){
            state[title.payload].quantity++;
        },
        decrement(state, title){
            state[title.payload].quantity <= 1
                ? delete state[title.payload]
                : state[title.payload].quantity--;
        },
        addToCart(state, product){
            const cartKey = product.payload.title;
            if(state[cartKey] === undefined){
                const newCartItem = product.payload;
                newCartItem.quantity = 1;
                newCartItem.total = product.payload.price;
                state[cartKey] = newCartItem;
            } else {
                state[cartKey].quantity++;
                state[cartKey].total = state[cartKey].quantity * state[cartKey].price;
            }
        }
    }
});