import { createSlice } from "@reduxjs/toolkit";

/**
 * userSlice - DATA LAYER
 * action - triggers the `user` state. We change states by defining actions in the reducers
 */

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors - [selecting the state]
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
