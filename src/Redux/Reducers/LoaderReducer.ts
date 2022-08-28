import { AnyAction, Reducer } from "redux";
import { LOADER_END, LOADER_START } from "../Types/LoaderTypes";

const initalState: boolean = false;

export const LoaderReducer: Reducer<boolean, AnyAction> = (
  state: boolean = initalState,
  action: AnyAction
): boolean => {
  switch (action.type) {
    case LOADER_START:
      return true;
    case LOADER_END:
      return false;
    default:
      return state;
  }
};
