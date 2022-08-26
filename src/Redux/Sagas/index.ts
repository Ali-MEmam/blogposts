import { all } from "redux-saga/effects";
import watcherPostsSaga from "./PostsSaga";

export default function* rootSaga(): any {
  yield all([watcherPostsSaga()]);
}
