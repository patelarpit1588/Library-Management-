import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: JSON.parse(localStorage.getItem("userData")) || null,
    authstatus: !!localStorage.getItem("userData")
};

const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers :{
        login : (state,action) =>{
            state.authstatus = true
            state.userData = action.payload
            localStorage.setItem("userData",JSON.stringify(action.payload))
        },
        logout :(state,action) =>{
            state.authstatus = false;
            state.userData = null
        }
    }
})

export default authSlice.reducer;

export const {login,logout} = authSlice.actions ;