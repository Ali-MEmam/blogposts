import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import EditForm from "./Form/EditForm";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSinglePostStart,
  getSinglePostSuccess,
} from "../../../Redux/Actions/PostsActions/GetSinglePostActions";
import { initalState } from "./model";

const EditPost: FC = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      dispatch(getSinglePostStart(parseInt(postId)));
    }
  }, [dispatch, postId]);

  return (
    <Row className="justify-content-center">
      <Col xs="12">
        <div className="postsview">
          <Row className="justify-content-between align-items-center">
            <Col xs="auto">
              <h2 className="postsview-header">Edit Post</h2>
            </Col>
            <Col xs="auto">
              <Button
                variant="outline-primary mb-3"
                onClick={() => {
                  dispatch(getSinglePostSuccess(initalState));
                  navigate("/blogposts");
                }}
              >
                Go Back
              </Button>
            </Col>
          </Row>
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
