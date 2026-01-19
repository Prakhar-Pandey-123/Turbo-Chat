import { configureStore } from "@reduxjs/toolkit";
// creating the Store = one global box
// • It holds all slice reducers together
import themeReducer from "./theme"

export const store=configureStore({
    reducer:{
        theme:themeReducer
    }
});