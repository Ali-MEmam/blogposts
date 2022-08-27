import { PayloadAction, Reducer } from "@reduxjs/toolkit";
import { IPostReducerState, Post } from "../Models/PostsModel";

import {
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_DELETE_POSTS_SUCCESS,
  FETCH_SINGLE_POSTS_SUCCESS,
  FETCH_UPDATE_POSTS_SUCCESS,
} from "../Types/PostsTypes";

const initialState: IPostReducerState = {
  posts: [],
  viewedPost: {
    id: 0,
    title: "",
    body: "",
    userId: 0,
  },
};
export const postsReducer: Reducer<any, any> = (
  state: any = initialState,
  action: PayloadAction<any>
) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCESS:
      return { ...state, posts: action.payload };

    case FETCH_SINGLE_POSTS_SUCCESS:
      return { ...state, viewedPost: action.payload };

    case FETCH_DELETE_POSTS_SUCCESS:
      const newPostsWithDeletedPost = state.posts.filter(
        (post: Post) => post.id !== action.payload
      );
      return { ...state, posts: newPostsWithDeletedPost };

    case FETCH_UPDATE_POSTS_SUCCESS:
      const newPostsWithUpdatedPost = state.posts.map((post: Post) =>
        post.id === action.payload.id ? action.payload : post
      );
      return { ...state, posts: newPostsWithUpdatedPost };

    default:
      return state;
  }
};
