import { AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  call,
  CallEffect,
  put,
  PutEffect,
  select,
  SelectEffect,
  takeEvery,
} from "redux-saga/effects";
import { setError } from "../Actions/ErrorsActions/ErrorActions";
import {
  setLoaderEnd,
  setLoaderStart,
} from "../Actions/LoaderActions/LoaderActions";
import {
  getUpdatePostSuccess,
  getDeletePostSuccess,
  getPostsSuccess,
  getSinglePostSuccess,
} from "../Actions/PostsActions";
import {
  IPostReducerState,
  IPostUpdateAndNavigate,
} from "../Models/PostsModel";
import {
  deletePostRequest,
  editPostRequest,
  getAllPostsRequest,
  getSinglePostRequest,
} from "../Requesets/PostsCRUD";

function* handleGetAllPosts(): Generator<CallEffect | PutEffect, void, any> {
  try {
    yield put(setLoaderStart());
    const posts = yield call(getAllPostsRequest);
    const formattedPosts = yield posts.json();
    yield put(getPostsSuccess(formattedPosts));
    yield put(setLoaderEnd());
  } catch (error) {
    yield put(setLoaderEnd());
    if (error instanceof Error) {
      yield put(setError(error.message));
      toast.error(error.message);
    }
  }
}

function* handleGetSinglePost(
  action: PayloadAction<Number>
): Generator<SelectEffect | CallEffect | PutEffect, void, AnyAction> {
  try {
    yield put(setLoaderStart());
    const posts = yield call(getSinglePostRequest, action.payload);
    const formattedPosts = yield posts.json();
    const store = yield select();
    const updatedElement = store.posts.posts.find(
      (post: any) => formattedPosts.id === post.id
    );
    yield put(getSinglePostSuccess(updatedElement || formattedPosts));
    yield put(setLoaderEnd());
  } catch (error) {
    yield put(setLoaderEnd());
    if (error instanceof Error) {
      yield put(setError(error.message));
      toast.error(error.message);
    }
  }
}

function* handleEditPost(
  action: PayloadAction<IPostUpdateAndNavigate>
): Generator<SelectEffect | CallEffect | PutEffect, void, AnyAction> {
  try {
    yield put(setLoaderStart());
    const posts = yield call(editPostRequest, action.payload.post);
    if (posts.ok) {
      yield put(getUpdatePostSuccess(action.payload.post));
      yield put(setLoaderEnd());
      toast.success("Updated Successfuly !");
      action.payload.navigate("/blogposts");
    }
  } catch (error) {
    yield put(setLoaderEnd());
    if (error instanceof Error) {
      yield put(setError(error.message));
      toast.error(error.message);
    }
  }
}

function* handleDeletePost(
  action: PayloadAction<Number>
): Generator<SelectEffect | CallEffect | PutEffect, void, AnyAction> {
  try {
    yield put(setLoaderStart());
    const posts = yield call(deletePostRequest, action.payload);
    if (posts.ok) {
      yield put(getDeletePostSuccess(action.payload));
      yield put(setLoaderEnd());
      toast.success("Deleted Successfuly !");
    }
  } catch (error) {
    yield put(setLoaderEnd());
    if (error instanceof Error) {
      yield put(setError(error.message));
      toast.error(error.message);
    }
  }
}

function* watcherPostsSaga() {
  yield takeEvery("posts/getAllPostsFetch", handleGetAllPosts);
  yield takeEvery("posts/getSinglePostFetch", handleGetSinglePost);
  yield takeEvery("posts/getUpdatePostFetch", handleEditPost);
  yield takeEvery("posts/getDeletePostFetch", handleDeletePost);
}

export default watcherPostsSaga;
