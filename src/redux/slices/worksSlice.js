import { createSlice } from "@reduxjs/toolkit";

const WorksSlice = createSlice({
  name: "works",
  initialState: {
    works: [],
  },
  reducers: {
    getWorksFunc: (state, action) => {
      state.works = action.payload;
    },
  },
});

export const WorksReducer = WorksSlice.reducer;
export const { getWorksFunc } = WorksSlice.actions;
