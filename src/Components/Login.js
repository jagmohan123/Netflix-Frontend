import React, { useState } from "react";
import Header from "./Header";
import bg from "../assets/bg.jpg";
// import { LoginUser } from "../services/oprations/authentiApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  setEmailSend,
  setLoading,
  setToken,
  setUser,
} from "../slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../slice/userSlice";
export default function Login() {
  // for showing login or sign form at a time based on the variable value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  const navigate = useNavigate();
  const getFormData = async (e) => {
    const data = { email, password };
    // we are not able to set the token by this code
    const toastId = toast.loading("loging");

    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}user/login`,
        data,

        // this is a wat set the token(cookie ka name) inside the token
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(setUser(response?.data?.user));
      dispatch(setToken(response?.data?.token));
      localStorage.setItem("token", JSON.stringify(response?.data?.token));
      localStorage.setItem("user", JSON.stringify(response?.data?.user));
      navigate("/browse");
      // console.log("errrpr", response.data.message);
      toast.success("loign successfully");

      // console.log("Response is ", response);
      toast.dismiss(toastId);
      setEmail("");
      setPassword("");
      dispatch(setLoading(false));
    } catch (error) {
      toast.error(error?.response?.data?.message);
      dispatch(setLoading(false));
      toast.dismiss(toastId)
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId)
    }
  };

  const navigateForGotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="w-screen overflow-hidden">
      <div className="w-full">
        <Header />
        <div className="absolute overflow-hidden">
          <img
            src={bg}
            className="w-screen h-[100vh] object-fill"
            alt="Banner"
          />
        </div>

        {loading ? (
          <h1 className="bg-yellow-400">Loading</h1>
        ) : (
          <div className="relative flex items-center justify-center mt-40 ">
            <div className="bg-black bg-opacity-90 rounded p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
              <form className="w-full" onSubmit={getFormData}>
                <h1 className="text-white text-3xl text-center mb-2">
                  Login Form
                </h1>
                <div className="flex flex-col gap-3 mt-10">
                  <input
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="mt-2 w-full border-none py-1 px-3 text-center rounded-sm"
                  />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="mt-2 w-full border-none py-1 px-3 text-center rounded-sm"
                  />

                  <button
                    type="submit"
                    className="mt-6 text-white bg-rose-700 w-full py-2 rounded-md"
                  >
                    {loading ? "loading" : "Log in"}
                  </button>
                  <div
                    className="flex-col items-center justify-center text-center"
                    onClick={navigateForGotPassword}
                  >
                    <button
                      className="text-white text-center mx-auto ml"
                      onClick={() => dispatch(setEmailSend(false))}
                    >
                      Forgot Password
                      <div className="border-white border-b-[2px] opacity-50 mt-2"></div>
                    </button>
                  </div>
                  <div
                    className="flex gap-2 justify-center mt-2"
                    onClick={navigateToSignUp}
                  >
                    <span className="text-white font-semibold cursor-pointer">
                      New to Netflix?
                    </span>
                    <button className="text-blue-700 font-bold">
                      Create account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
