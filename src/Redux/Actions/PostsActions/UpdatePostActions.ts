import { IPostUpdateAndNavigate, Post } from "../../Models/PostsModel";
import {
  FETCH_UPDATE_POSTS_FAILURE,
  FETCH_UPDATE_POSTS_START,
  FETCH_UPDATE_POSTS_SUCCESS,
} from "../../Types/PostsTypes";

export function getUpdatePostStart(post: IPostUpdateAndNavigate) {
  return {
    type: FETCH_UPDATE_POSTS_START,
    payload: post,
  };
}
export function getUpdatePostSuccess(post: Post) {
  return {
    type: FETCH_UPDATE_POSTS_SUCCESS,
    payload: post,
  };
}
export function getUpdatePostFailure(error: String) {
  return {
    type: FETCH_UPDATE_POSTS_FAILURE,
    payload: error,
  };
}
