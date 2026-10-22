import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: JSON.parse(localStorage.getItem("adminData")) || null,
    authstatus: !!localStorage.getItem("adminData")
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        login: (state, action) => {
            state.authstatus = true;
            state.userData = action.payload;

            localStorage.setItem(
                "adminData",
                JSON.stringify(action.payload)
            );
        },

        logout: (state) => {
            state.authstatus = false;
            state.userData = null;

            localStorage.removeItem("adminData");
            localStorage.removeItem("token");
        }
    }
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;