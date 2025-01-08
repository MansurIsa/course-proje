import { createSlice } from "@reduxjs/toolkit";

const ClassesSlice = createSlice({
  name: "classes",
  initialState: {
    courses: [],
    myCourses: [],
    courseCreateModal: false,
    courseCreateInpVal: "",
    accounts: [],
    updateClassesModal: false,
    updateClassObj: {},
    courseUpdateInpVal: "",
    accountsUpdate: [],
    viewClassesModal: false,
    viewClassObj: {},
    unitCreateModal: false,
  },
  reducers: {
    getCoursesFunc: (state, action) => {
      state.courses = action.payload;
    },
    getMyCoursesFunc: (state, action) => {
      state.myCourses = action.payload;
    },
    courseCreateModalBtn: (state) => {
      state.courseCreateModal = true;
    },
    closeFunc: (state) => {
      state.courseCreateModal = false;
      state.updateClassesModal = false;
      state.viewClassesModal = false;
      state.unitCreateModal = false;
    },
    courseCreateInpHandle: (state, action) => {
      state.courseCreateInpVal = action.payload;
    },
    getAccountsFunc: (state, action) => {
      state.accounts = action.payload;
    },
    updateClassesModalFunc: (state, action) => {
      state.updateClassesModal = true;
      state.updateClassObj = action.payload;
      state.courseUpdateInpVal = action.payload.name;
    },
    courseUpdateInpHandle: (state, action) => {
      state.courseUpdateInpVal = action.payload;
    },
    accountsUpdateFunc: (state, action) => {
      state.accountsUpdate = action.payload;
    },
    viewClassesModalFunc: (state, action) => {
      state.viewClassesModal = true;
      state.viewClassObj = action.payload;
    },
    unitCreateModalFunc: (state) => {
      state.unitCreateModal = true;
    },
  },
});

export const ClassesReducer = ClassesSlice.reducer;
export const {
  getCoursesFunc,
  getMyCoursesFunc,
  courseCreateModalBtn,
  closeFunc,
  courseCreateInpHandle,
  getAccountsFunc,
  updateClassesModalFunc,
  courseUpdateInpHandle,
  accountsUpdateFunc,
  viewClassesModalFunc,
  unitCreateModalFunc,
} = ClassesSlice.actions;
