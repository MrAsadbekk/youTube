import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Navbar />
    </>
  );
};

export default Layout;
