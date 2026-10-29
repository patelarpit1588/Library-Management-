import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: JSON.parse(sessionStorage.getItem("userData")) || null,
  authstatus: !!sessionStorage.getItem("userData"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      state.authstatus = true;
      state.userData = action.payload;

      sessionStorage.setItem(
        "userData",
        JSON.stringify(action.payload)
      );
    },

    logout: (state) => {
      state.authstatus = false;
      state.userData = null;

      sessionStorage.removeItem("userData");
      sessionStorage.removeItem("token");
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;

