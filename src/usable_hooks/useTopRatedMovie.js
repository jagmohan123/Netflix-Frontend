import axios from "axios";
import { options } from "../utils/Constant";
import { TOP_RATED_MOVIE_API } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { getTopRatedMovies } from "../slice/movieSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
// import { useEffect } from "react";
export const useTopRatedMovie = async () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getTopRatedMovie() {
      try {
        const response = await axios.get(TOP_RATED_MOVIE_API, options);
        // set popular movie in slice
        // console.log("Top rated movie api response", response);
        dispatch(getTopRatedMovies(response?.data?.results));
      } catch (error) {
        // console.log("error occured of calling top rated movie api", error);
        toast.error(error.response.data.message);

      }
    }
    getTopRatedMovie();
  }, []);
};

export default useTopRatedMovie;
