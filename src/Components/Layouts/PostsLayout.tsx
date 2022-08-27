import { FC, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getAllPosts } from "../../Redux/slices/Posts/GetAllPostsSlice";
import Navbar from "../Shared/Navbar/NavBar";
const PostsLayout: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
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
