import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {

        addToCart: (state, action) => {
            console.log(action.payload, 'itemInCart')
            const itemInCart = state.cart.findIndex((item) => item.id === action.payload.id);

            if (itemInCart >= 0) {
                state.cart[itemInCart].quantity++;
            } else {
                state.cart.push({ ...action.payload })
                console.log(action.payload)
            }

        },
        decreaseCart: (state, action) => {
            const item = state.cart.findIndex((item) => item.id === action.payload.id);
            if (state.cart[item] === 1) {
                state.cart[item].quantity = 1
            } else {
                state.cart[item].quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeItem;
        }

        // incrQuantity: (state, action) => {
        //     console.log("cart", current(state.cart), '\n payload : ', action.payload);
        //     var item = current(state.cart.find((item) => item.id === action?.payload?.id));
        //     let obj = { ...item, quantity: item.quantity + 1 }
        //     state.cart[item] = obj

        //     // console.log("produobj : ", item);
        //     item.quantity++;
        // }
    }
})
export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    decreaseCart,
    removeItem
} = cartSlice.actions;