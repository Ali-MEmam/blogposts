import { PayloadAction } from "@reduxjs/toolkit";
import {
  call,
  CallEffect,
  put,
  PutEffect,
  select,
  SelectEffect,
  takeEvery,
} from "redux-saga/effects";
import { IReduxStatePosts, Post } from "../Models/PostsModel";
import {
  deletePostRequest,
  editPostRequest,
  getAllPostsRequest,
  getSinglePostRequest,
} from "../Requesets/PostsCRUD";
import {
  setPostFailure,
  setPostsState,
  setSinglePostState,
} from "../slices/Posts/GetAllPostsSlice";
import { RootState } from "../Store";

function* handleGetAllPosts(): Generator<CallEffect | PutEffect, void, any> {
  try {
    const posts = yield call(getAllPostsRequest);
    const formattedPosts = yield posts.json();
    yield put(setPostsState(formattedPosts));
  } catch (error) {
    if (error instanceof Error) {
      yield put(setPostFailure(error.message));
    }
  }
}

function* handleGetSinglePost(
  action: PayloadAction<Number>
): Generator<CallEffect | PutEffect, void, any> {
  console.log(action);
  try {
    const posts = yield call(getSinglePostRequest, action.payload);
    const formattedPosts = yield posts.json();
    yield put(setSinglePostState(formattedPosts));
  } catch (error) {
    if (error instanceof Error) {
      yield put(setPostFailure(error.message));
    }
  }
}

function* handleEditPost(
  action: PayloadAction<Post>
): Generator<SelectEffect | CallEffect | PutEffect, void, any> {
  try {
    const posts = yield call(editPostRequest, action.payload);
    if (posts.ok) {
      const state = yield select();
      const newPostsWithoutDeleted = state.posts.posts.map((post: Post) =>
        post.id === action.payload.id ? action.payload : post
      );
      yield put(setPostsState(newPostsWithoutDeleted));
    } else {
      yield put(setPostFailure("JSON PLACEHOLDER Special Case"));
    }
    // yield put(getPostsSuccess(formattedPosts));
  } catch (error) {
    if (error instanceof Error) {
      yield put(setPostFailure(error.message));
    }
  }
}

function* handleDeletePost(
  action: PayloadAction<Number>
): Generator<SelectEffect | CallEffect | PutEffect, void, any> {
  try {
    const posts = yield call(deletePostRequest, action.payload);
    if (posts.ok) {
      const state = yield select();
      const newPostsWithoutDeleted = state.posts.posts.filter(
        (post: Post) => post.id !== action.payload
      );
      yield put(setPostsState(newPostsWithoutDeleted));
    } else {
      yield put(setPostFailure("JSON PLACEHOLDER Special Case"));
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(setPostFailure(error.message));
    }
  }
}

function* watcherPostsSaga() {
  yield takeEvery("posts/getAllPosts", handleGetAllPosts);
  yield takeEvery("posts/getSinglePost", handleGetSinglePost);
  yield takeEvery("posts/updatePost", handleEditPost);
  yield takeEvery("posts/deletePost", handleDeletePost);
}

export default watcherPostsSaga;
