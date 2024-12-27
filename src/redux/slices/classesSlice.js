import { createSlice } from "@reduxjs/toolkit";

const ClassesSlice = createSlice({
  name: "classes",
  initialState: {
    courses: [],
    myCourses: [],
    courseCreateModal: false,
    courseCreateInpVal: "",
    accounts: []
  },
  reducers: {
    getCoursesFunc: (state, action) => {
      state.courses = action.payload;
    },
    getMyCoursesFunc: (state, action) => {
      state.myCourses = action.payload;
    },
    courseCreateModalBtn: (state)=>{
      state.courseCreateModal=true
    },
    closeFunc: (state)=>{
      state.courseCreateModal=false
    },
    courseCreateInpHandle: (state, action) => {
      state.courseCreateInpVal=action.payload
    },
    getAccountsFunc: (state,action)=>{
      state.accounts=action.payload
    }
  },
});

export const ClassesReducer = ClassesSlice.reducer;
export const { getCoursesFunc, getMyCoursesFunc,courseCreateModalBtn,
  closeFunc,courseCreateInpHandle,getAccountsFunc } = ClassesSlice.actions;
