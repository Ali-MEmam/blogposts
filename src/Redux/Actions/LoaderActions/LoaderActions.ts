import { LOADER_END, LOADER_START } from "../../Types/LoaderTypes";

export function setLoaderStart() {
  return {
    type: LOADER_START,
  };
}

export function setLoaderEnd() {
  return {
    type: LOADER_END,
  };
}
