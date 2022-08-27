import { LOADER_END, LOADER_START } from "../../Types/LoaderTypes";

export function setError(error: String) {
  return {
    type: LOADER_START,
    payload: error,
  };
}

export function removeError() {
  return {
    type: LOADER_END,
  };
}
