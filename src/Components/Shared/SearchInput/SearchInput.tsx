import { ChangeEvent, FC } from "react";
import { ISearchInputProps } from "./Model";
import "./SearchInput.scss";
import { Form } from "react-bootstrap";
const SearchInput: FC<ISearchInputProps> = ({ value, handleChange }) => (
  <Form.Group className="mb-3">
    <Form.Label>Search</Form.Label>
    <Form.Control
      placeholder="Title or Description..."
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      type="text"
      value={value}
    />
  </Form.Group>
);

export default SearchInput;
