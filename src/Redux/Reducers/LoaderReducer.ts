import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import { LOADER_END, LOADER_START } from "../Types/LoaderTypes";

const initalState: Boolean = false;

export const LoaderReducer: Reducer<any, any> = (
  state: Boolean = initalState,
  action: PayloadAction
) => {
  switch (action.type) {
    case LOADER_START:
      return true;
    case LOADER_END:
      return false;
    default:
      return state;
  }
};
