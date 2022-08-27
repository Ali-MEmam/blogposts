import { FC } from "react";
import { Button, Form } from "react-bootstrap";

const EditForm: FC = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          placeholder="Title..."
          // onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          type="text"
          // value={value}
          // className="searchinput"
          name="title"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Body</Form.Label>
        <Form.Control
          placeholder="Title..."
          // onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          as="textarea"
          rows={3} // value={value}
          // className="searchinput"
          name="description"
        />
      </Form.Group>
      <Button className="w-100">Submit</Button>
    </Form>
  );
};

export default EditForm;
