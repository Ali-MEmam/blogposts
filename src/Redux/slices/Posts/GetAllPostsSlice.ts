import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReduxStatePosts, Post } from "../../Models/PostsModel";

const initialState: IReduxStatePosts = {
  posts: [],
  isLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsFetch: (state: IReduxStatePosts): void => {
      state.isLoading = true;
    },
    getPostsSuccess: (
      state: IReduxStatePosts,
      action: PayloadAction<Post[]>
    ): void => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostsFailure: (state: IReduxStatePosts): void => {
      state.isLoading = false;
    },
    deletePost: (
      state: IReduxStatePosts,
      actions: PayloadAction<Number>
    ): void => {
      state.isLoading = true;
    },
    updatePost: (
      state: IReduxStatePosts,
      actions: PayloadAction<Post>
    ): void => {
      state.isLoading = true;
    },
  },
});

export const {
  getPostsFetch,
  getPostsSuccess,
  getPostsFailure,
  deletePost,
  updatePost,
} = postsSlice.actions;

export default postsSlice.reducer;
