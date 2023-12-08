import products from '../pages/shop/content/store'
import layout from './layout'
import cart from '../pages/cart/content/store'
import login from '../pages/login/content/store'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    products,
    layout,
    cart,
    login
})

export type RootReducer = ReturnType<typeof rootReducer>
export default rootReducer