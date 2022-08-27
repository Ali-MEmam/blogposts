import { ChangeEvent, FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUpdatePostStart } from "../../../../Redux/Actions/PostsActions/UpdatePostActions";
import { Post } from "../../../../Redux/Models/PostsModel";
import { RootState } from "../../../../Redux/Store";
const initalState: Post = {
  id: 0,
  title: "",
  body: "",
  userId: 0,
};
const EditForm: FC = () => {
  const dispatch = useDispatch();
  const viewedPost = useSelector<RootState>((store) => store.posts.viewedPost);
  const [postData, setPostData] = useState<Post>(initalState);

  useEffect(() => {
    if (viewedPost) {
      setPostData(viewedPost as Post);
    }
  }, [viewedPost]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!!postData.title && !!postData.body) {
      dispatch(getUpdatePostStart(postData));
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="text"
          value={postData.title}
          name="title"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Body</Form.Label>
        <Form.Control
          onChange={handleChange}
          as="textarea"
          rows={8}
          value={postData.body}
          name="body"
        />
      </Form.Group>
      <Button
        className="w-100"
        type="submit"
        disabled={!postData.title || !postData.body}
      >
        Submit
      </Button>
    </Form>
  );
};

export default EditForm;
