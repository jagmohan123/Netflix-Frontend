import axios from "axios";
import { options } from "../utils/Constant";
import { POPULAR_MOVIE_API } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../slice/movieSlice";
import { useEffect } from "react";
import toast from "react-hot-toast"
// import { useEffect } from "react";
export const usePlayingPopularMovie = async () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getPopularMovie() {
      try {
        const response = await axios.get(POPULAR_MOVIE_API, options);
        // set popular movie in slice
        // console.log("Popular movie api response", response);
        dispatch(getPopularMovies(response?.data?.results));
      } catch (error) {
        // console.log("error occured of calling popular movie api", error);
        toast.error(error.response.data.message);

      }
    }
    getPopularMovie();
  }, []);
};

export default usePlayingPopularMovie;
