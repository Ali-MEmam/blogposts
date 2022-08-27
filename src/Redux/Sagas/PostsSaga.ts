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
} from "../slices/Posts/GetAllPostsSlice";

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
    // yield put(getPostsSuccess(formattedPosts));
  } catch (error) {
    if (error instanceof Error) {
      yield put(setPostFailure(error.message));
    }
  }
}

function* handleEditPost(
  action: PayloadAction<Post>
): Generator<CallEffect | PutEffect> {
  try {
    const posts = yield call(editPostRequest, action.payload);
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
    if (posts.status === 200) {
      const state = yield select();
      const newPostsWithoutDeleted = state.posts.posts.filter(
        (post: Post) => post.id !== action.payload
      );
      yield put(setPostsState(newPostsWithoutDeleted));
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
