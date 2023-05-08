import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../../custom/useFetch";

import "../Home/Home.scss";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10"
  );

  console.log(data.items);

  data?.items?.map((element) => {
    console.log(element);
  });

  return (
    <div className="home mt-9">
      <div></div>
    </div>
  );
};

export default Home;
