import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name :"cart",

    initialState:{
      items:[],
    },

    reducers : {
         addItem : (state,action)=>{
            // mutating the state here 
            state.items.push(action.payload);
         },
         removeItem : (state) =>{
             state.items.pop();
         },
         // Redux toolkit say either mutate the state or return a new State
         clearCart : (state)=>{
            console.log(state) ; // this will not show obj only proxy object will appear
            console.log(current(state)); // in redux we have to use current to see obj
          // state=[]  ; // this will not work 
            state.items.length =0 ;
         },
    },
 }) ;

export const {addItem,removeItem,clearCart} = cartSlice.actions ;
export default cartSlice.reducer ;

