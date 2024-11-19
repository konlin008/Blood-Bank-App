import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Example async action
export const fetchUser = createAsyncThunk("auth/fetchUser", async (userId) => {
  const response = await fetch(`/api/user/${userId}`);
  return response.json();
});

const initialState = {
  user: null,
  status: "idle", 
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice;
