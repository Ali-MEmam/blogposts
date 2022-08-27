import { Post } from "../../Models/PostsModel";
import {
  FETCH_SINGLE_POSTS_FAILURE,
  FETCH_SINGLE_POSTS_START,
  FETCH_SINGLE_POSTS_SUCCESS,
} from "../../Types/PostsTypes";

export function getSinglePostStart(id: number) {
  return {
    type: FETCH_SINGLE_POSTS_START,
    payload: id,
  };
}
export function getSinglePostSuccess(post: Post) {
  return {
    type: FETCH_SINGLE_POSTS_SUCCESS,
    payload: post,
  };
}
export function getSinglePostFailure(error: String) {
  return {
    type: FETCH_SINGLE_POSTS_FAILURE,
    payload: error,
  };
}
