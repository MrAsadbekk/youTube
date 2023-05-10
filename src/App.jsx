import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import "./App.css";

function App() {
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
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
        </Route>
        <Route
          element={!user ? <Register /> : <Navigate to={"/"} />}
          path="/register"
        />
        <Route
          element={!user ? <Login /> : <Navigate to={"/"} />}
          path="/login"
        />
      </Routes>
    </>
  );
}

export default App;
