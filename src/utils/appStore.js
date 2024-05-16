import { configureStore, createReducer } from "@reduxjs/toolkit";
import { useReducer } from "react";
import cartReducer from "./cartSlice"; // Import your cart reducer from cartSlice

const appStore = configureStore({
    reducer : {
       cart : cartReducer, // createReducer ,
     //  user : useReducer 
    },
});



export default appStore;

//The reason your code is not working is because useReducer is a hook provided by React for managing component-level state,
// and it cannot be directly used as a reducer function in Redux.

