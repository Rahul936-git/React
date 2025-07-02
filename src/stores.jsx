import {configureStore} from "@reduxjs/toolkit";
import  cartReducer from "./slice";

const stores = configureStore({
    reducer:{
        cart:cartReducer,
    }
})

export default stores;