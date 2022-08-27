import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReduxStatePosts, Post } from "../../Models/PostsModel";

const initialState: IReduxStatePosts = {
  posts: [],
  isLoading: false,
  error: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllPosts: (state: IReduxStatePosts): void => {
      state.isLoading = true;
      state.error = "";
    },
    getSinglePost: (
      state: IReduxStatePosts,
      action: PayloadAction<Number | undefined>
    ): void => {
      state.isLoading = true;
      state.error = "";
    },
    deletePost: (
      state: IReduxStatePosts,
      action: PayloadAction<Number>
    ): void => {
      state.isLoading = true;
      state.error = "";
    },
    updatePost: (
      state: IReduxStatePosts,
      action: PayloadAction<Post>
    ): void => {
      state.isLoading = true;
      state.error = "";
    },
    setPostsState: (
      state: IReduxStatePosts,
      action: PayloadAction<Post[]>
    ): void => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    setPostFailure: (state: IReduxStatePosts, action): void => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getAllPosts,
  setPostsState,
  setPostFailure,
  deletePost,
  updatePost,
  getSinglePost,
} = postsSlice.actions;

export default postsSlice.reducer;
