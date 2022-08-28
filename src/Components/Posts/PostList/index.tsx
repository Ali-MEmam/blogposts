import { ChangeEvent, FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";
import PostsTable from "./PostTable/PostTable";
import "./PostList.scss";
import SearchInput from "../../Shared/SearchInput/SearchInput";
import { Col, Row } from "react-bootstrap";
import { Post } from "../../../Redux/Models/PostsModel";
import Pagination from "../../Shared/Pagination/Pagination";
import { SlicePagination } from "../../../utilities/Helpers";
import PageMax from "../../Shared/PageMax/PageMax";
const PostsList: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(5);
  const [pageMax, setPageMax] = useState<number>(10);
  const [filterdPost, setFilterdPost] = useState<Post[]>([]);
  const posts: Post[] = useSelector<RootState>(
    (store) => store.posts.posts
  ) as Post[];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  useEffect(() => {
    setFilterdPost(() =>
      posts.filter(
        (post: Post) =>
          post.title.includes(searchValue) || post.body.includes(searchValue)
      )
    );
    setCurrentPage(1);
  }, [searchValue, posts]);

  return (
    <Row className="justify-content-center">
      <Col xs="12">
        <div className="postsview">
          <h2 className="postsview-header">Posts</h2>
          <div className="postsview-body">
            <div>
              <SearchInput handleChange={handleSearch} value={searchValue} />
            </div>
            <PostsTable
              posts={
                !!searchValue
                  ? SlicePagination(filterdPost, pageMax, currentPage)
                  : SlicePagination(posts, pageMax, currentPage)
              }
            />
            <Row className="justify-content-center">
              <Col xs="auto">
                <PageMax handleChange={setPageMax} value={pageMax} />
              </Col>
              <Col xs="auto">
                <Pagination
                  totalNumber={
                    !!searchValue ? filterdPost.length : posts.length
                  }
                  handleChange={setCurrentPage}
                  currentPage={currentPage}
                  pageMax={pageMax}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PostsList;
