import { createSlice } from "@reduxjs/toolkit";

const HomeworkSlice = createSlice({
  name: "homework",
  initialState: {
    myHomeworks: [],
    homeworks: [],
    homeworkCreateModal: false,
    myGroups: [],
    hwCreateInpVal: "",
    hwCreateSelectVal: ""
  },
  reducers: {
    getMyHomeworksFunc: (state,action)=>{
      state.myHomeworks=action.payload
    },
    getHomeworksFunc: (state,action)=>{
      state.homeworks=action.payload
    },
    homeworkCreateFunc:(state)=>{
      state.homeworkCreateModal=true
    },
    closeModal:(state)=>{
      state.homeworkCreateModal=false
    },
    getMyGroupsFunc: (state,action)=>{
      state.myGroups=action.payload
    },
    hwCreateInpHandle: (state,action)=>{
      state.hwCreateInpVal=action.payload
    },
    hwCreateSelectHandle: (state,action)=>{
      state.hwCreateSelectVal=action.payload
    }
  }
})


export const HomeworkReducer = HomeworkSlice.reducer;
export const { getMyHomeworksFunc,getHomeworksFunc,homeworkCreateFunc,
  closeModal,getMyGroupsFunc,hwCreateInpHandle,hwCreateSelectHandle } =HomeworkSlice.actions;