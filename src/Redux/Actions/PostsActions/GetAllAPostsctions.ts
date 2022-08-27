import { IReduxStatePosts } from "../../Models/PostsModel";
import {
  FETCH_ALL_POSTS_FAILURE,
  FETCH_ALL_POSTS_START,
  FETCH_ALL_POSTS_SUCCESS,
} from "../../Types/PostsTypes";

export function getPostsStart() {
  return {
    type: FETCH_ALL_POSTS_START,
  };
}

export function getPostsSuccess(post: IReduxStatePosts) {
  return {
    type: FETCH_ALL_POSTS_SUCCESS,
    payload: post,
  };
}

export function getPostsFailure(error: String) {
  return {
    type: FETCH_ALL_POSTS_FAILURE,
    payload: error,
  };
}
