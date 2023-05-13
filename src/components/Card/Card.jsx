import React from "react";
import useFetch from "../../custom/useFetch";
import "../Card/Card.scss";
import CardVideo from "../CardVideo/CardVideo";
import { Link } from "react-router-dom";

const Card = () => {
  const { data, loading, error } = useFetch(
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50"
  );

  //   console.log(data.items);

  //   data?.items?.map((element) => {
  //     console.log(element);
  //   });

  return (
    <div className="card">
      {data?.items?.map((element) => (
        <Link
          className="card__link"
          to={`news/${element.id.videoId}`}
          key={element.id.videoId}
        >
          <div className="card__box block">
            <img
              className="card__img"
              src={element.snippet.thumbnails.medium.url}
              alt=""
            />
            <p className="card__title">{element.snippet.title}</p>
            <div className="card__title-box">
              <p className="card__channel-title">
                {element.snippet.channelTitle}
              </p>
              <p className="card__video-time">{element.snippet.publishTime}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
