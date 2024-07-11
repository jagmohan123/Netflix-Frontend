import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setNameAndSearchMovie } from "../slice/movieSlice";
import { SEARCH_MOVIE_API, options } from "../utils/Constant";
import { setLoading } from "../slice/userSlice";
import CategoryMovie from "../mainContent/CategoryMovie";
import toast from "react-hot-toast";
function SearchMovie() {
  // searchMovie
  const [findMovie, setFindMovie] = useState("");
  const { loading } = useSelector((state) => state?.user);
  const { searchMovie } = useSelector((state) => state?.movie);
  // console.log("search movie array is ", searchMovie.movies);
  // console.log(findMovie);
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("searching");

    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        `${SEARCH_MOVIE_API}${findMovie}`,
        options
      );
      // console.log(response?.data.results);
      const movies = response?.data.results;
      dispatch(setLoading(false));
      dispatch(setNameAndSearchMovie({ findMovie, movies }));
      toast.dismiss(toastId);
    } catch (error) {
      // console.log("SEARCH MOVIE BY NAME API ERROR ", error);
      toast.error(error?.response?.data?.message);
      toast.dismiss(toastId);
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
    setFindMovie("");
  };
  return (
    <>
      <div className="w-full flex pt-8 mx-auto items-center justify-center">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-2xl flex items-center justify-center px-4"
        >
          <div className="flex justify-between shadow-md border-2 gap-2 border-gray-300 rounded-lg w-full p-2 flex-wrap">
            <input
              value={findMovie}
              onChange={(e) => setFindMovie(e.target.value)}
              type="text"
              placeholder="Search Movie"
              className="w-full lg:w-4/5 outline-none text-center py-2 bg-slate-100 rounded-md text-lg"
            />
            <button className="w-full lg:w-auto bg-red-800 px-8 py-2 text-white font-semibold rounded-md text-center">
              {loading ? "loading" : "Search"}
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl text-center mt-2">
          {searchMovie.findMovie && (
            <p className="text-md">
              Search Movie is{" "}
              <span className="text-emerald-950 font-bold capitalize">
                {searchMovie.findMovie}
              </span>
            </p>
          )}
        </h1>

        {searchMovie?.movies?.length > 0 && (
          <CategoryMovie
            title={findMovie}
            findMovie={true}
            movie={searchMovie.movies}
          />
        )}

        {searchMovie?.movies?.length <= 0 && (
          <h1 className="text-white bg-black mt-4 p-2 rounded-md">
            There is no movie found
          </h1>
        )}
      </div>
    </>
  );
}

export default SearchMovie;
