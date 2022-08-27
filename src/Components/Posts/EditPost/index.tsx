import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
// import "./PostList.scss";
import { Button, Col, Row } from "react-bootstrap";
import EditForm from "./Form/EditForm";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSinglePost,
  setSinglePostState,
} from "../../../Redux/slices/Posts/GetAllPostsSlice";
const EditPost: FC = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      dispatch(getSinglePost(parseInt(postId)));
    }
  }, [dispatch, postId]);

  return (
    <Row className="justify-content-center">
      <Col xs="12">
        <div className="postsview">
          <Button
            className="mb-3"
            onClick={() => {
              dispatch(
                setSinglePostState({ id: 0, title: "", body: "", userId: 0 })
              );
              navigate("/");
            }}
          >
            Go Back
          </Button>
          <h2 className="postsview-header">Edit Post</h2>
          <div className="postsview-body">
            <div>
              <EditForm />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default EditPost;
