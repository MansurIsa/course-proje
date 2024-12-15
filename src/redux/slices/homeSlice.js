import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    bannerSlider: [],
    services: [],
    loader: false
  },
  reducers: {
    getBannerSliderFunc: (state,action)=>{
      state.bannerSlider=action.payload
    },
    getServicesFunc: (state,action)=>{
      state.services=action.payload
    },
    isLoading: (state)=>{
      state.loader=true
    },
    stopIsLoading: (state)=>{
      state.loader=false
    }
  }
})


export const HomeReducer = HomeSlice.reducer;
export const { getBannerSliderFunc,getServicesFunc,isLoading,stopIsLoading } =HomeSlice.actions;