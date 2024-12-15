import { createSlice } from "@reduxjs/toolkit";

const AboutSlice = createSlice({
  name: "about",
  initialState: {
    aboutImage: [],
    aboutContent: [],
  },
  reducers: {
    aboutImageFunc: (state, action) => {
      state.aboutImage = action.payload;
    },
    aboutContentFunc: (state, action) => {
      state.aboutContent = action.payload;
    },
  },
});

export const AboutReducer = AboutSlice.reducer;
export const { aboutImageFunc, aboutContentFunc } = AboutSlice.actions;
