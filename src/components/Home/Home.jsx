import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../../custom/useFetch";

import "../Home/Home.scss";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10"
  );

  console.log(data);

  return (
    <div className="home mt-9">
      <div>
        <h1 className="text-9xl">Hello World</h1>
      </div>
    </div>
  );
};

export default Home;
