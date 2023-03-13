import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState : {
    user : null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user= action.payload;
      state.value = state.user;
    },
    logout: (state) => {
      state.user = null;
      state.value = null;
    },
  },
});

export const { login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
