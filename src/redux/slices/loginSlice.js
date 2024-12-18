import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    psw: ""
  },
  reducers: {
    emailHandle: (state, action) => {
      state.email = action.payload
    },
    pswHandle: (state,action)=>{
      state.psw=action.payload
     }
  },
});

export const LoginReducer = LoginSlice.reducer;
export const { emailHandle,pswHandle } = LoginSlice.actions;
