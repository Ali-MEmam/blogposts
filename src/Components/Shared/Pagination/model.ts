import { Dispatch, SetStateAction } from "react";

export interface IProps {
  totalNumber: Number;
  pageMax: Number;
  currentPage: Number;
  handleChange: Dispatch<SetStateAction<number>>;
}
