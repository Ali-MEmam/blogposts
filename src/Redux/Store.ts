import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { errorReducer, LoaderReducer, postsReducer } from "./Reducers";
import rootSaga from "./Sagas/index";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    isLoader: LoaderReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware
    ),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
