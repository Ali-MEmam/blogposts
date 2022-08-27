import { Post } from "../../Models/PostsModel";
import {
  FETCH_DELETE_POSTS_FAILURE,
  FETCH_DELETE_POSTS_START,
  FETCH_DELETE_POSTS_SUCCESS,
} from "../../Types/PostsTypes";

export function getDeletePostStart(id: Number) {
  return {
    type: FETCH_DELETE_POSTS_START,
    payload: id,
  };
}
export function getDeletePostSuccess(id: Number) {
  return {
    type: FETCH_DELETE_POSTS_SUCCESS,
    payload: id,
  };
}
export function getDeletePostFailure(error: String) {
  return {
    type: FETCH_DELETE_POSTS_FAILURE,
    payload: error,
  };
}
