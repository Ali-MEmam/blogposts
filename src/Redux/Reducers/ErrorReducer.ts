import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import { REMOVE_ERROR, SET_ERROR } from "../Types/ErrorTypes";

const initalState: String = "";

export const errorReducer: Reducer<any, any> = (
  state: String = initalState,
  action: PayloadAction<String>
) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case REMOVE_ERROR:
      return "";
    default:
      return state;
  }
};
