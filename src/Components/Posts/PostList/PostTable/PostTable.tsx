import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Post } from "../../../../Redux/Models/PostsModel";
import { RootState } from "../../../../Redux/Store";
import DeletePost from "../../Modals/DeleteModal/DeleteModal";
import ViewPost from "../../Modals/ViewPostModal/ViewPostModal";

const PostsTable: FC<any> = ({ posts }) => {
  const navigate = useNavigate();
  const loader = useSelector<RootState>((store) => store.isLoader);

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
          {!loader &&
            posts?.map((post: Post) => (
              <tr key={post.id} className="poststable__body-row">
                <td className="poststable__body-cell">{post.title}</td>
                <td className="poststable__body-cell">{post.body}</td>
                <td className="poststable__body-cell">
                  <div className="poststable__body-actions">
                    <ViewPost post={post} />
                    <button
                      className="poststable__body-actions--btn"
                      type="button"
                      onClick={() => {
                        navigate(`/${post.id}`);
                      }}
                    >
                      <FontAwesomeIcon icon={faPenSquare} />
                    </button>
                    <DeletePost post={post} />
                  </div>
                </td>
              </tr>
            ))}
          {(loader || !posts.length) && (
            <tr>
              <td colSpan={3} className="text-center">
                {loader ? "loading..." : "No Result Found"}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default PostsTable;
