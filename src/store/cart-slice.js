import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{toggleCart:false},
    reducers:{
        showCart (state, action){
            state.toggleCart= !state.toggleCart;
        }
    }

})

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;