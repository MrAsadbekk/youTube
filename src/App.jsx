import { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import useFetch from "./custom/useFetch";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import CardVideo from "./components/CardVideo/CardVideo";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50"
  );

  const [user, setUser] = useState(null);

  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }

    return unsubscribe;
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout userProp={user} />}>
          <Route element={<Home />} index />
          <Route element={<CardVideo />} path="news/:id" />
        </Route>{" "}
        <Route
          element={!user ? <Register /> : <Navigate to={"/"} />}
          path="/register"
        />
        <Route
          element={!user ? <Login /> : <Navigate to={"/"} />}
          path="/login"
        />
      </Routes>
    </div>
  );
}

export default App;
