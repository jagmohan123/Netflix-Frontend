import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import TitleVideo from "./TitleVideo";
import { useSelector } from "react-redux";

function Main_Container() {
  const movie = useSelector((state) => state.movie.nowPlayingMovie);
  // if no data in movie so ham return kar jaynge
  // this is known as early return in react
  if (movie === null) {
    return;
  }
  // console.log("Main container me ham hai", movie);
  const { overview, id, title } = movie[2];
  // .nowPlayingMovie[0];
  return (
    <div className="-mt-18">
      <TitleVideo overview={overview} title={title} />
      <BackgroundVideo movieId={id} />
    </div>
  );
}

export default Main_Container;
