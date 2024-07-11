import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovie: null,
  popularMovie: null,
  topRatedMovie: null,
  upComingMovie: null,
  // search movie ke leaye
  searchMovieToggle: false,
  // trailer ko play karne ke leaye
  trailerMovie: null,
  movies: null,
  searchMovie: [],
  openMovieDialog: false,
  movieID: "",
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getNowPlayMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.popularMovie = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    getUpComingMovies: (state, action) => {
      state.upComingMovie = action.payload;
    },

    setSearchMovieToggle: (state) => {
      // if true hai to false kar do and false hai to true
      state.searchMovieToggle = !state.searchMovieToggle;
    },

    setTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },

    setNameAndSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
      state.movies = action.payload;
    },

    setOpenMovieDialog: (state, action) => {
      state.openMovieDialog = action.payload;
    },
    getMovieId: (state, action) => {
      state.movieID = action.payload;
    },
  },
});

export const {
  getNowPlayMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
  setSearchMovieToggle,
  setTrailerMovie,
  setNameAndSearchMovie,
  setOpenMovieDialog,
  getMovieId,
} = movieSlice.actions;
export default movieSlice.reducer;
