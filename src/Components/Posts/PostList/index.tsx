import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";
import PostsTable from "./PostTable/PostTable";
import "./PostList.scss";
import SearchInput from "../../Shared/SearchInput/SearchInput";
import { Col, Row } from "react-bootstrap";
import { getAllPosts } from "../../../Redux/slices/Posts/GetAllPostsSlice";
import { Post } from "../../../Redux/Models/PostsModel";
const PostsList: FC = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const posts: Post[] | unknown = useSelector<RootState>(
    (store) => store.posts.posts
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <Row className="justify-content-center">
      <Col xs="12">
        <div className="postsview">
          <h2 className="postsview-header">Posts</h2>
          <div className="postsview-body">
            <div>
              <SearchInput handleChange={handleSearch} value={searchValue} />
            </div>
            <PostsTable posts={posts} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PostsList;
