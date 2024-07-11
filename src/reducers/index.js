import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";
import movieSlice from "../slice/movieSlice";
const rootReducer = combineReducers({
  user: userSlice,
  movie: movieSlice,
});

export default rootReducer;
