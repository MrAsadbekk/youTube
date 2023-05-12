import React from "react";
import { useState, useEffect, useContext } from "react";
// import useFetch from "../../custom/useFetch";
import { MyContext } from "../Context/Context";

import Card from "../Card/Card";
import "../Home/Home.scss";

const Home = () => {
  const { color } = useContext(MyContext);

  return (
    <>
      <div
        className={
          !color
            ? "home fixed right-0 top-16 pr-12 flex flex-col"
            : "home w-11/12 fixed right-0 top-16 pr-12 flex flex-col"
        }
      >
        <div className="home__box mb-12">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
