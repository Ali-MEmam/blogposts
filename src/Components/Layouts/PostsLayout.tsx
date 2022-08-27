import { FC, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getPostsStart } from "../../Redux/Actions/PostsActions/GetAllAPostsctions";
// import { getAllPostsFetch } from "../../Redux/slices/Posts/GetAllPostsSlice";
import Navbar from "../Shared/Navbar/NavBar";
const PostsLayout: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsStart());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
};

export default PostsLayout;
