import { createSlice } from "@reduxjs/toolkit";

const ClassesSlice = createSlice({
  name: "classes",
  initialState: {
    courses: [],
    myCourses: [],
  },
  reducers: {
    getCoursesFunc: (state, action) => {
      state.courses = action.payload;
    },
    getMyCoursesFunc: (state, action) => {
      state.myCourses = action.payload;
    },
  },
});

export const ClassesReducer = ClassesSlice.reducer;
export const { getCoursesFunc, getMyCoursesFunc } = ClassesSlice.actions;
