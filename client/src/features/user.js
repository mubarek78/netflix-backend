import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    status: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      console.log(action.payload)
      state.isFetching = false;
      state.status = true;
      state.currentUser = action.payload;
    //   window.localStorage.setItem('user', JSON.stringify(action.payload))
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
const userReducer = userSlice.reducer
 export default userReducer