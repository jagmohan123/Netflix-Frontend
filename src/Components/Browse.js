import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MainContainer from "../mainContent/MainContainer";
import MovieContainer from "../mainContent/MovieContainer";
import useNowPlayingMovie from "../usable_hooks/useNowPlayingMovie";
import usePlayingPopularMovie from "../usable_hooks/usePlayingPopularMovie";
import useTopRatedMovie from "../usable_hooks/useTopRatedMovie";
import useUpComingMovie from "../usable_hooks/useUpComingMovie";
import SearchMovie from "../mainContent/SearchMovie";

function Browse() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  // this is define inside custom hooks custom

  useNowPlayingMovie();
  usePlayingPopularMovie();
  useTopRatedMovie();
  useUpComingMovie();

  const { searchMovieToggle } = useSelector((state) => state.movie);

  useEffect(() => {
    if (user === null || user === undefined) navigate("/login");
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 w-full ">
        {searchMovieToggle ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  );
}

export default Browse;
