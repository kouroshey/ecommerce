import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    mainPrice: 0,
    delivery: 35000,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const itemPrice = Number(newItem.price)
            const existsItem = state.items.find(item => item.id === newItem.id)
            state.mainPrice = state.mainPrice + itemPrice
            if (existsItem) {
                existsItem.amount++
                existsItem.itemTotalPrice = existsItem.price * existsItem.amount
            } else {
                state.items.push(
                    {
                        ...newItem,
                        itemTotalPrice: itemPrice
                    }
                )
            }
            console.log(state.items);
        },
        removeFromCart(state, action) {
            const existsItem = state.items.find(item => item.id === action.payload.id)
            state.mainPrice = state.mainPrice - existsItem.price
            if (existsItem.amount > 1) {
                existsItem.amount--
                existsItem.itemTotalPrice = existsItem.price * existsItem.amount
            } else if (existsItem.amount === 1) {
                state.items = state.items.filter(item => item.id !== existsItem.id)
            }
        },
        clearFromCart(state, action) {
            const existsItem = state.items.find(item => item.id === action.payload.id)
            state.mainPrice = state.mainPrice - (existsItem.price * existsItem.amount)
            state.items = state.items.filter(item => item.id !== existsItem.id)
        }
    }
})

// selectors
export const getAllCartItems = (state) => state.cart.items
export const getCartMainPrice = (state) => state.cart.mainPrice
export const getDeliveryPrice = (state) => state.cart.delivery

// actions
export const {addToCart, removeFromCart, clearFromCart} = cartSlice.actions

export default cartSlice.reducer