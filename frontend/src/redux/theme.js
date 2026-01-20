import {createSlice} from "@reduxjs/toolkit"

// slice=reducers+actions+state

const themeSlice=createSlice({
    name:"theme",//name of the slice
    initialState:{
        value:localStorage.getItem("theme")||"light"
        //app loads-checks localstorage-if not found then "light",this is the initial state
    },
    reducers:{//these are fns that change state
        setTheme:(state,action)=>{//name of reducer=setTheme,this runs when we do-dispatch(setTheme("dark"))
            state.value=action.payload//update the current state of slice with the new action.payload value
            localStorage.setItem("theme",action.payload)
        }
    }
})

export const {setTheme}=themeSlice.actions
export default themeSlice.reducer;

// createSlice helps create a slice.
// A slice is state + reducers + actions.
// The state here stores the current theme.
// The initial theme comes from localStorage or defaults to "light".
// Reducers are functions that update this slice’s state.
// action.payload is the new theme value.
// We also save this value to localStorage so it persists after refresh.