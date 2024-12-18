import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    userObj: {}
  },
  reducers: {
    getUserFunc: (state, action) => {
      state.userObj = action.payload
    },
   
  },
});

export const SidebarReducer = SidebarSlice.reducer;
export const {getUserFunc } = SidebarSlice.actions;
