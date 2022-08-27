import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReduxStatePosts, Post } from "../../Models/PostsModel";

const initialState: IReduxStatePosts = {
  posts: [],
  isLoading: false,
  viewedPost: {
    id: 0,
    title: "",
    body: "",
    userId: 0,
  },
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
    setSinglePostState: (
      state: IReduxStatePosts,
      action: PayloadAction<Post>
    ): void => {
      state.viewedPost = action.payload;
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
  getSinglePost,
  deletePost,
  updatePost,
  setPostsState,
  setPostFailure,
  setSinglePostState,
} = postsSlice.actions;

export default postsSlice.reducer;
