import {createSlice} from "@reduxjs/toolkit";

const MyreactSlice1 = createSlice({
    name: "slice1",
    initialState: {count:0},
    reducers: {
        Increment : (state)=>{state.count = state.count + 1},
        Decrement : (state)=>{state.count = state.count - 1},
        Reset     : (state)=>{state.count=0}
    }
})

export default MyreactSlice1.reducer;

export const {Increment , Decrement , Reset} = MyreactSlice1.actions;