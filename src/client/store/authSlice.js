import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload; 
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null; 
      state.error = action.payload;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { signInRequest, signInSuccess, signInFailure, signOut } = authSlice.actions;
export default authSlice.reducer;
