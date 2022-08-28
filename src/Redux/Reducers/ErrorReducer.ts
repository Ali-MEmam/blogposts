import { AnyAction, Reducer } from "redux";
import { REMOVE_ERROR, SET_ERROR } from "../Types/ErrorTypes";

const initalState: String = "";

export const errorReducer: Reducer<String, AnyAction> = (
  state: String = initalState,
  action: AnyAction
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
