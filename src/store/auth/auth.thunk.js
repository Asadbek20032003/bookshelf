import { createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../messages/messages.slice";
import AuthService from "./auth.service";

export const register = createAsyncThunk("auth/register", async (data, thunkAPI) => {
  try {
    const response = await AuthService.register(data);
    thunkAPI.dispatch(setMessage(response.data.message));
    console.log("response", response);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});
