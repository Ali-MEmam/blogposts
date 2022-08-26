import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/index";
import postsSlice from "./slices/Posts/GetAllPostsSlice";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
