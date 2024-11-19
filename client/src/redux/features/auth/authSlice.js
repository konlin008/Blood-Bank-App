import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin } from "./authAction";
import { token } from "morgan";

// Example async action
export const fetchUser = createAsyncThunk("auth/fetchUser", async (userId) => {
  const response = await fetch(`/api/user/${userId}`);
  return response.json();
});

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, payload) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default authSlice;
