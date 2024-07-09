import { createSlice } from "@reduxjs/toolkit";
import { register } from "./auth.thunk";
import { getLocal } from "../../services/local";
import { USER_DATA } from "../../services/axios";

const initialState = {
  isAuthenticated: !!getLocal(USER_DATA)?.key,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.loading = false;
      });
    // .addCase(builder.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.error;
    // });
  },
});

const { reducer } = authSlice;
export default reducer;
