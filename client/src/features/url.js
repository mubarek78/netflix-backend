import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
  name: "url",
  initialState: {
    trailerUrl: "",
  },
  reducers: {
    setUrl: (state, action) => {
        console.log(action.payload)
      state.trailerUrl = action.payload;
    },
  },
});

export const { setUrl } = urlSlice.actions;
const urlReducer = urlSlice.reducer
 export default urlReducer