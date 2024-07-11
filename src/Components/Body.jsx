import React from "react";
import { Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Error from "./Error";
import ChangePassword from "./ChangePassword";
function Body() {
  return (
    <div>
      <Routes>
        <Route path="/browse" element={<Browse />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password/:token" element={<ChangePassword/>}/>
        <Route path="*" element=<Error /> />
      </Routes>
    </div>
  );
}

export default Body;
