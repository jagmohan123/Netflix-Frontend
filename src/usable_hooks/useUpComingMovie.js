import axios from "axios";
import { options } from "../utils/Constant";
import { UPCOMING_MOVIE_API } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { getUpComingMovies } from "../slice/movieSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
// import { useEffect } from "react";
export const useUpComingMovie = async () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getUpComingMoviesVideo() {
      try {
        const response = await axios.get(UPCOMING_MOVIE_API, options);
        // set popular movie in slice
        // console.log("Upcoing movie api response", response);
        dispatch(getUpComingMovies(response?.data?.results));
      } catch (error) {
        // console.log("error occured of calling upcoming movie api", error);
        toast.error(error.response.data.message);

      }
    }
    getUpComingMoviesVideo();
  }, []);
};

export default useUpComingMovie;
