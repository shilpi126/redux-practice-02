import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        toggleCart:false,
        cartItems:[],
        totalQuantity:0,
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
        addToCart (state, action) {
            const item  = action.payload;
            const existingItem = state.cartItems.find((product)=> product.id === item.id)

            if(!existingItem){
                state.cartItems.push({
                    id:item.id,
                    price:item.price,
                    title:item.title,
                    image:item.image,
                    quantity:1,
                });

                state.totalQuantity = state.cartItems.length;
            }else{
                existingItem.quantity += 1;
            }
        },
        decreaseQuantity (state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((product)=> product.id === id )
            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity -= 1;
            }else{

            state.cartItems = state.cartItems.filter(product => product.id !== id)
            state.totalQuantity = state.cartItems.length;
            }
            
        },

        increaseQuantity (state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((product)=> product.id === id );
            if(existingItem){
                existingItem.quantity +=1;
            }

        }
    }

})

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;