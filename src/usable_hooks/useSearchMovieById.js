import axios from "axios";
import { options } from "../utils/Constant";
// import { MOVIE_ID_API } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTrailerMovie } from "../slice/movieSlice";
import toast from "react-hot-toast";
export const useSearchMovieById = async (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getSearchMovies() {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        // dispatch(getMovieById(response?.data?.results));
        // console.log("Movie Deatils by id is ", response);
        const trailer = response?.data?.results.filter((item) => {
          return item.type === "Trailer";
        });
        // trailer array hai jisme n trailer video aa rhi hai
        // agar trailer aaya hai to uske length hogi usi basis me tariler 
        // set karenge nhi to koi bhi rendom movie set kar denge
        dispatch(setTrailerMovie(trailer.length>0?trailer[0]:response?.data?.results[0]));
      } catch (error) {
        // console.log("MOVIE SEARCH BY ID API ERROR", error);
        toast.error(error.response.data.message);

      }
    }
    getSearchMovies(movieId);
  }, []);
};

export default useSearchMovieById;
