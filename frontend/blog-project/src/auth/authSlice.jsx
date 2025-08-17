import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    user: null,
    isLoggedIn: false
  },
  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    logout: (state) =>{
      state.accessToken = null;
      state.user = null;
      state.isLoggedIn = false;
    }
  }
});
export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer