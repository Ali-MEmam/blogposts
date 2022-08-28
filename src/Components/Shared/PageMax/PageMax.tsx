import { FC } from "react";
import { Form } from "react-bootstrap";
import { IProps } from "./model";

const PageMax: FC<IProps> = ({ handleChange, value }) => {
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        handleChange(+e.target.value)
      }
      value={value}
    >
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </Form.Select>
  );
};

export default PageMax;
