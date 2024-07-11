import toast from "react-hot-toast";
import { Connector } from "../Connector";
import { UserEndPoints } from "../Api_EndPoints";
import {
  setUser,
  setToken,
  setEmailSend,
} from "../../slice/userSlice";
export const SignupUser = async (data, navigate) => {
  const toastId = toast.loading("loading");
  let value = null;

  try {
    const response = await Connector("POST", UserEndPoints.SIGNUP_API, data);
    toast.success("Registerd");
    // console.log("SIGN UP API RESPONSE ", response);
    // console.log("##########", response.data);
    value = response.data;
    navigate("/login");
  } catch (error) {
    // console.log(" SIGN UP API Error, Occured During Signing Up ", error);
    toast.error(error?.response?.data?.message);
    toast.dismiss(toastId);
  }
  toast.dismiss(toastId);
  return value;
};

// Logout the user account
export function LogoutUser(navigate) {
  return (dispatch) => {
    dispatch(setUser(null));
    dispatch(setToken(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    // console.log("LOGOUT  API");
    navigate("/login");
  };
}

export const ResetTokenForPassword = (email) => {
  return async (dispatch) => {
    // console.log("Inside API EMAIL IS", email);
    const toastId = toast.loading("Sending email...");
    try {
      const response = await Connector("Post", UserEndPoints.RESET_TOKEN, {
        email,
      });
      // console.log("Reset Password token API RESPONSE", response);

      // if response is not valid so throw an erro
      if (!response) {
        throw new Error("FORGOT PASSWORD GENERATE TOKEN API ERROR");
      }

      // If every thing fine so give the success message in toast
      toast.success("Email sent successfully");
      dispatch(setEmailSend(true));
    } catch (error) {
      // console.log(
      //   "Error occured while sending reset Token email to the user",
      //   error
      // );
      toast.error(error.response.data.message);
      toast.dismiss(toastId);
    }
    toast.dismiss(toastId);
  };
};
