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
    viewUpdateModal: false,
    viewClassUnitObj: {},
    uniteUpdateInpValue: {},
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
      state.viewUpdateModal = false;
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
      // state.accounts=action.payload.accounts
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
    viewClassesUniteModalFunc: (state, action) => {
      state.viewUpdateModal = true;
      state.viewClassUnitObj = action.payload;
      state.uniteUpdateInpValue = action.payload; 
    },
    viewClassesUniteModalHandle: (state, action) => {
      const { key, value } = action.payload;
      if (key === "name" || key === "about") {
        state.uniteUpdateInpValue = {
          ...state.uniteUpdateInpValue,
          [key]: value,
        };
      }
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
  viewClassesUniteModalFunc,
  viewClassesUniteModalHandle
} = ClassesSlice.actions;
