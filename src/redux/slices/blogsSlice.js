import { createSlice } from "@reduxjs/toolkit";

const BlogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    blogsDetail: {},
  },
  reducers: {
    getBlogFunc: (state, action) => {
      state.blogs = action.payload;
    },
    getBlogDetailFunc: (state, action) => {
      state.blogsDetail = action.payload;
    },
  },
});

export const BlogsReducer = BlogsSlice.reducer;
export const { getBlogFunc, getBlogDetailFunc } = BlogsSlice.actions;
