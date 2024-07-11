export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjJmMDg3NmYzNTViODUyNTVmZjEzYWM4YWFlNDZmYyIsInN1YiI6IjY2MDkzYWY3MmZhZjRkMDE0YWM3MjZlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LwZJJ4Fhx55kyszQqPWdbdyRqtLKix7tkwiZ7rAxDFc",
  },
};

export const NOW_PLAYING_MOVIE_API =
  "https://api.themoviedb.org/3/movie/now_playing";
export const POPULAR_MOVIE_API = "https://api.themoviedb.org/3/movie/popular";
export const TOP_RATED_MOVIE_API =
  "https://api.themoviedb.org/3/movie/top_rated";
export const UPCOMING_MOVIE_API = "https://api.themoviedb.org/3/movie/upcoming";
export const IMAGE_URL_API = "https://image.tmdb.org/t/p/w500";
export const MOVIE_ID_API = "https://api.themoviedb.org/3/movie";
export const SEARCH_MOVIE_API =
  "https://api.themoviedb.org/3/search/movie?query=";
