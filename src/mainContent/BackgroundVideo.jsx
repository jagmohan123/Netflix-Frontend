import React from "react";
import { useSelector } from "react-redux";
import useSearchMovieById from "../usable_hooks/useSearchMovieById";
function BackgroundVideo({ movieId, poPubVide }) {
  const { trailerMovie } = useSelector((state) => state.movie);
  // console.log("Trailer", trailerMovie);
  useSearchMovieById(movieId);
  return (
    <div className="w-full overflow-hidden">
      <iframe
        className={`w-full aspect-video ${
          poPubVide ? "max-w-full" : "max-w-screen"
        }`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=sZ-Sh2nAROWC6wV2&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export default BackgroundVideo;
