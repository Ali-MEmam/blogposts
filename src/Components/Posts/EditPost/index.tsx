import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../../../Redux/Store";
// import "./PostList.scss";
import { Col, Row } from "react-bootstrap";
import EditForm from "./Form/EditForm";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../../../Redux/slices/Posts/GetAllPostsSlice";
const EditPost: FC = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (postId) {
      dispatch(getSinglePost(parseInt(postId)));
    }
  }, [dispatch, postId]);
  return (
    <Row className="justify-content-center">
      <Col xs="12">
        <div className="postsview">
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
