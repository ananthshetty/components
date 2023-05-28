import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        increament: (state, {type, payload}) => state + payload,
        decreament: (state, {type, payload}) => state - payload
        // decreament: state => state - 1
    }
});

export const {increament, decreament} = counterSlice.actions;
export default counterSlice.reducer;