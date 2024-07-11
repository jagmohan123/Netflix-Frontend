import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { ResetTokenForPassword } from "../services/oprations/authentiApi";
import { FaArrowLeftLong } from "react-icons/fa6";
import bg from "../assets/bg.jpg";
function ForgotPassword() {
  const { isemailSend } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const naviagate = useNavigate();
  function goToLogin(event) {
    event.preventDefault();

    naviagate("/login");
  }

  function sumbitHandler(event) {
    event.preventDefault();
    if (email === "") {
      toast.error("Please enter email id");
      return;
    }

    dispatch(ResetTokenForPassword(email));
    setLoading(false);
  }

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen w-full overflow-x-hidden bg-gradient-to-t from-blue-950">
      <Header />
      <div className="absolute inset-0 overflow-hidden z-0">
        <img src={bg} className="w-full h-full object-cover" alt="Banner" />
      </div>
      <div className="bg-black bg-opacity-90 rounded p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
        {loading ? (
          <div className="flex items-center justify-center mt-36 text-white">
            Loading...
          </div>
        ) : (
          <div className="w-full max-w-md bg-black opacity-80 shadow-lg rounded-lg p-4 hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col items-center justify-center">
            <div className="text-center w-full">
              <h1 className=" text-white text-2xl md:text-4xl  font-semibold">
                {!isemailSend ? "Reset Your Password" : "Check Your Email"}
              </h1>
              <p className="mt-4 text-white text-sm md:text-lg leading-6">
                {!isemailSend
                  ? "Have no fear. We’ll email you instructions to reset your password. If you don't have access to your email we can try account recovery."
                  : `We have sent the reset email to ${email}`}
              </p>
            </div>

            <div className="flex flex-col w-full mt-1 items-center justify-center">
              <form onSubmit={sumbitHandler} className="w-full">
                {!isemailSend && (
                  <div className="w-full mt-8">
                    <label className="w-full">
                      <p className="text-sm md:text-base text-white font-medium mb-1 leading-tight">
                        Email address <sup className="text-pink-500">*</sup>
                      </p>
                      <input
                        required
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter email"
                        className="mt-2 w-full border-none  text-center rounded-md p-2 bg-white"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>
                )}

                <div className="mt-1">
                  <button
                    type="submit"
                    className="mt-6 text-white bg-rose-600 w-full py-2 rounded-md  font-medium"
                  >
                    {!isemailSend ? "Send Reset Password Link" : "Resend email"}
                  </button>
                </div>

                <div className="mt-4 text-white flex items-center justify-center gap-3">
                  <FaArrowLeftLong size={20} />
                  <button
                    type="button"
                    onClick={goToLogin}
                    className="underline hover:text-blue-500 transition duration-300 text-blue-600 font-bold cursor-pointer mt-1"
                  >
                    Back to login
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
