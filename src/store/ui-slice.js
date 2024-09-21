import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:"ui",
    initialState:{
        toggleCart:false,
        notification:null,
        
    },
    reducers:{
        showNotification(state,action){
            
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message,
            }
        }
        ,
        showCart (state, action){
            state.toggleCart= !state.toggleCart;
        },

     
      
    }
})






export const uiAction = uiSlice.actions;

export default uiSlice.reducer;