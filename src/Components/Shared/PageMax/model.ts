import { Dispatch, SetStateAction } from "react";

export interface IProps {
  handleChange: Dispatch<SetStateAction<number>>;
  value: number;
}
