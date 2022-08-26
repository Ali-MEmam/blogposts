import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Shared/Navbar/NavBar";
import { getPostsFetch } from "./Redux/slices/Posts/GetAllPostsSlice";
import { RootState } from "./Redux/Store";

function App() {
  const cats = useSelector<RootState>((state: any) => state.posts);
  const dispatch = useDispatch();
  console.log(cats);
  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Container fluid>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path=":postId" element={<div>team</div>} />
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
