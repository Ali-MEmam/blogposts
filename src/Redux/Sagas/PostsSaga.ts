import { call, put, takeEvery } from "redux-saga/effects";
import { getAllPostsRequest } from "../Requesets/PostsCRUD";
import { getPostsSuccess } from "../slices/Posts/GetAllPostsSlice";

function* hanleGetAllPosts(action: any): any {
  console.log(action);
  try {
    const posts = yield call(getAllPostsRequest);
    const formattedPosts = yield posts.json();
    yield put(getPostsSuccess(formattedPosts));
  } catch (error) {
    console.log(error);
  }
}
function* watcherPostsSaga() {
  yield takeEvery("posts/getPostsFetch", hanleGetAllPosts);
}

export default watcherPostsSaga;
