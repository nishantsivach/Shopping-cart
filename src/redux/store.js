import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './Action';
import { combineReducers } from '@reduxjs/toolkit';
import ProductsReducer from './Product_list';

const data = combineReducers({
    ProductsReducer,
    cartReducer

})


const store = configureStore({
    reducer: data,
})

export default store;