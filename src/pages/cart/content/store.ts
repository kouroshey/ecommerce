import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootReducer } from "../../../app/rootReducer";

interface CartItemType {
    id: number,
    img: string,
    price: number,
    title: string,
    amount: number,
    totalPrice: number
}

interface StoreStateType {
    items: CartItemType[] | [],
    mainPrice: number,
    delivery: number
}

const initialState: StoreStateType = {
    items: [],
    mainPrice: 0,
    delivery: 35000,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem: CartItemType = action.payload
            const itemPrice = Number(newItem.price)
            const existsItem = state.items.find(item => item.id === newItem.id)
            state.mainPrice = state.mainPrice + itemPrice
            if (existsItem) {
                existsItem.amount++
                existsItem.totalPrice = existsItem.price * existsItem.amount
            } else {
                const newCartItem: CartItemType = { ...newItem, totalPrice: itemPrice }
                state.items = [...state.items, newCartItem]
                toast.success('آیتم به سبد خرید اضاف شد')
            }
        },
        removeFromCart(state, action) {
            const existsItem = state.items.find(item => item.id === action.payload.id)
            if (existsItem) {
                state.mainPrice = state.mainPrice - existsItem!.price
                if (existsItem.amount > 1) {
                    existsItem.amount--
                    existsItem.totalPrice = existsItem.price * existsItem.amount
                } else if (existsItem.amount === 1) {
                    state.items = state.items.filter(item => item.id !== existsItem.id)
                    toast.success('آیتم از سبد خرید حذف شد')
                }
            }

        },
        clearFromCart(state, action) {
            const existsItem = state.items.find(item => item.id === action.payload.id)
            if (existsItem) {
                state.mainPrice = state.mainPrice - (existsItem.price * existsItem.amount)
                state.items = state.items.filter(item => item.id !== existsItem.id)
                toast.success('آیتم از سبد خرید حذف شد')
            }
        }
    }
})

// selectors
export const getAllCartItems = (state: RootReducer) => state.cart.items
export const getCartMainPrice = (state: RootReducer) => state.cart.mainPrice
export const getDeliveryPrice = (state: RootReducer) => state.cart.delivery

// actions
export const { addToCart, removeFromCart, clearFromCart } = cartSlice.actions

export default cartSlice.reducer