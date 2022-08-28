import { Dispatch, SetStateAction } from "react";

export interface IProps {
  totalNumber: Number;
  maxPage?: Number;
  currentPage: Number;
  handleChange: Dispatch<SetStateAction<number>>;
}
