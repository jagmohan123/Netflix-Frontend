import React from "react";
import Header from "./Header";
import { SignupUser } from "../services/oprations/authentiApi";
import { useState } from "react";
import bg from "../assets/bg.jpg";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  const getFormData = async (e) => {
    e.preventDefault();
    const data = { fullName, email, password };

    await SignupUser(data, navigate);
    // console.log("Response is ", response);
    setEmail("");
    setFullName("");
    setPassword("");
  };

  return (
    <div>
      <div className="w-full">
        <Header />
        <div className="absolute">
          <img
            src={bg}
            className="w-[100vw] h-[100vh] object-fill"
            alt="Banner"
          />
        </div>
        <div className="relative md:w-1/2 lg:w-1/3 h-[90%]  bg-black opacity-90 flex items-center justify-center mx-auto border rounded p-6 mt-40">
          <div>
            <form className="w-full" onSubmit={getFormData}>
              <h1 className="text-white text-3xl text-center mb-2">
                Signup Form
              </h1>
              <div className="flex flex-col gap-3 max-w-max mt-10">
                <input
                  type="text"
                  required
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter Your Full Name"
                  className=" mt-2 w-full border-none py-1 px-3 text-center rounded-sm"
                />

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
                  className=" mt-2 w-full border-none py-1 px-3 text-center rounded-sm"
                />

                <button
                  type="submit"
                  className=" mt-6 text-white  bg-rose-700 w-full py-2 rounded-md"
                >
                  Sign up
                </button>
                <div className="flex gap-2" onClick={navigateToLogin}>
                  <span className="text-white font-semibold cursor-pointer">
                    Already have an account
                  </span>
                  <button className=" text-blue-700 font-bold">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
