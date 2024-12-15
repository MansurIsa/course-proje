import { createSlice } from "@reduxjs/toolkit";

const ServicesSlice = createSlice({
  name: "services",
  initialState: {
    serviceObj: {}
  },
  reducers: {
    getServiceDetailFunc: (state,action)=>{
      state.serviceObj=action.payload
    }
  }
})


export const ServicesReducer = ServicesSlice.reducer;
export const { getServiceDetailFunc } =ServicesSlice.actions;