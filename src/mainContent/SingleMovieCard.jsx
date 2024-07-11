import React from "react";
// import bg from "../assets/bg.jpg";
import { IMAGE_URL_API } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { getMovieId, setOpenMovieDialog } from "../slice/movieSlice";
function SingleMovieCard({ ImageUrl, movieId }) {
  // console.log("SINGLE MOVIE IS ", movieId);
  const dispatch = useDispatch();

  if (ImageUrl === null) {
    return null;
  }

  const handleOpen = () => {
    dispatch(setOpenMovieDialog(true));
    dispatch(getMovieId(movieId))
  };

  // console.log(`${IMAGE_URL_API}/${ImageUrl}`);
  return (
    <div className=" w-[100%]">
      <div className="w-[280px] min-h-max" onClick={handleOpen}>
        <img
          src={`${IMAGE_URL_API}/${ImageUrl}`}
          alt="movie-banner"
          className=" rounded-md object-fill max-h-max"
        />
      </div>
    </div>
  );
}

export default SingleMovieCard;
