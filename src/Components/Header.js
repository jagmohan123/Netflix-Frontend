import React, { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import logo from "../assets/gh.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LogoutUser } from "../services/oprations/authentiApi";
import { setSearchMovieToggle } from "../slice/movieSlice";
function Header() {
  // get the user details
  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useSelector((state) => state.user);
  const { searchMovieToggle } = useSelector((state) => state.movie);
  // console.log("User inside header", user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchMovieHandler = () => {
    dispatch(setSearchMovieToggle(searchMovieToggle));
  };
  return (
    <div className="relative flex items-center justify-between px-4 py-2 bg-gradient-to-t from-blue-950 overflow-x-hidden w-screen">
      {user && (
        <Link to="/browse">
          <img
            className="w-32 aspect-auto mix-blend-color-burn rounded-sm"
            src={logo}
            alt="logo"
          />
        </Link>
      )}

      {user && (
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <MdOutlineArrowDropDownCircle size={28} className="text-white" />
          </button>
        </div>
      )}

      {user && (
        <div
          className={`flex-col lg:flex-row flex items-center lg:items-center text-white lg:justify-between gap-6 lg:pr-10 ${
            menuOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          <div className="flex items-center lg:mt-0 mt-4">
            <MdOutlineArrowDropDownCircle
              size={28}
              className="hidden lg:block"
            />
            <h1 className="text-lg font-medium"> {user?.fullName}</h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-6 mt-4 lg:mt-0">
            <button
              className="bg-red-800 text-white px-3 py-2 rounded-md w-full lg:w-auto"
              onClick={() => dispatch(LogoutUser(navigate))}
            >
              Logout
            </button>
            <button
              onClick={searchMovieHandler}
              className="bg-red-800 text-white px-3 py-2 rounded-md w-full lg:w-auto"
            >
              {searchMovieToggle ? "Home" : "Search Movies"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
