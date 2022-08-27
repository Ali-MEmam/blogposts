import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import PostsLayout from "./Components/Layouts/PostsLayout";
import Navbar from "./Components/Shared/Navbar/NavBar";
import PostsList from "./Components/Posts/PostList";
import EditPost from "./Components/Posts/EditPost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsLayout />}>
          <Route path=":postId" element={<EditPost />} />
          <Route index element={<PostsList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
