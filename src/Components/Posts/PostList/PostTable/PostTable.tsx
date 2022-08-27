import { faEye, faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Post } from "../../../../Redux/Models/PostsModel";
import { deletePost } from "../../../../Redux/slices/Posts/GetAllPostsSlice";
import { RootState } from "../../../../Redux/Store";

const PostsTable: FC<any> = ({ posts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loader = useSelector<RootState>((store) => store.posts.isLoading);

  return (
    <div>
      <Table className="poststable" responsive>
        <thead className="poststable__header">
          <tr className="poststable__header-row">
            <th className="poststable__header-cell">Post Title</th>
            <th className="poststable__header-cell">Post Description</th>
            <th className="poststable__header-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="poststable__body">
          {!loader ? (
            posts?.map((post: Post) => (
              <tr key={post.id} className="poststable__body-row">
                <td className="poststable__body-cell">{post.title}</td>
                <td className="poststable__body-cell">{post.body}</td>
                <td className="poststable__body-cell">
                  <div className="poststable__body-actions">
                    <button
                      className="poststable__body-actions--btn"
                      type="button"
                      onClick={() => {
                        console.log(navigate);
                        navigate(`/${post.id}`);
                      }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button
                      className="poststable__body-actions--btn"
                      type="button"
                      onClick={() => {
                        console.log(navigate);
                        navigate(`/${post.id}`);
                      }}
                    >
                      <FontAwesomeIcon icon={faPenSquare} />
                    </button>
                    <button
                      className="poststable__body-actions--btn"
                      onClick={() => {
                        console.log(navigate);
                        dispatch(deletePost(post.id));
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default PostsTable;
