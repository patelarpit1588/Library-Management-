import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authstatus : false,
    userData : null
}

const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers :{
        login : (state,action) =>{
            state.authstatus = true
            state.userData = action.payload
        },
        logout :(state,action) =>{
            state.authstatus = false;
            state.userData = null
        }
    }
})

export default authSlice.reducer;

export const {login,logout} = authSlice.actions ;