import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
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
    </div>
  );
}

export default App;
