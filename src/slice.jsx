import {createSlice} from "@reduxjs/toolkit";

const MYfoodSlicer = createSlice({
    name:"MYfoodSlicer",
    initialState:{count:0},
    reducers:{
        addItem:(state)=>{state.count++},
        removeItem:(state)=>{state.count--},
    }
})

export default MYfoodSlicer.reducer;
export const {addItem,removeItem} = MYfoodSlicer.actions;