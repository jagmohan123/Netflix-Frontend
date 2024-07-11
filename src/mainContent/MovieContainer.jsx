import React from "react";
import CategoryMovie from "./CategoryMovie";
import { useSelector } from "react-redux";

function MovieContainer() {
  const movie = useSelector((state) => state.movie);
  // console.log("Movie me data ", movie);
  return (
    <div className="bg-black w-screen">
      <div className="-mt-52 relative z-10 max-sm:-mt-2 max-md:-mt-40">
        <CategoryMovie
          movie={movie?.nowPlayingMovie}
          title="Trending Movies "
        />
        <CategoryMovie movie={movie?.popularMovie} title="Popular Movies" />
        <CategoryMovie movie={movie?.topRatedMovie} title="Top Rated Movies" />
        <CategoryMovie movie={movie?.upComingMovie} title="Upcoming Movies" />
      </div>

      {!movie && (
        <div className="bg-black w-screen h-screen text-white text-center text-5xl">
          <h1 className="p-64">There is no movie Found</h1>
        </div>
      )}
    </div>
  );
}

export default MovieContainer;
