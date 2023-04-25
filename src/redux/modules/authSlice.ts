import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false,
  },
  reducers: {
    loginSuccess: state => {
      console.log('in');
      state.loggedIn = true;
    },
  },
});

export const {loginSuccess} = authSlice.actions;

export default authSlice.reducer;
