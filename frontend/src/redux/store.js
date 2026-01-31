import { configureStore } from "@reduxjs/toolkit";
// creating the Store = one global box
// • It holds all slice reducers together
import themeReducer from "./theme"
import chatReducer from "./userChat"
import onlineUsersReducer from "./onlineUsers"

export const store=configureStore({
    reducer:{
        theme:themeReducer,
        chat:chatReducer,
        onlineUsers:onlineUsersReducer
    }
});