import { configureStore } from "@reduxjs/toolkit";
import MyreactReducer1 from "./Slice1";

const Stores = configureStore({
    reducer:{
        slice1: MyreactReducer1,
        // slice2: MyreactReducer2,
    }
})

export default Stores;