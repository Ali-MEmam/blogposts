import { Routes, Route } from "react-router-dom";
import "./App.scss";
import PostsLayout from "./Layouts/PostsLayout";
import PostsList from "./Components/Posts/PostList";
import EditPost from "./Components/Posts/EditPost";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/blogposts" element={<PostsLayout />}>
          <Route path=":postId" element={<EditPost />} />
          <Route index element={<PostsList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
