// REACT_APP ye lagana must hai jab bhi front end se backend ko call karunga
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const UserEndPoints = {
  LOGIN_API: BASE_URL + "user/login",
  SIGNUP_API: BASE_URL + "user/signup",
  LOGOUT_API: BASE_URL + "user/logout",
  RESET_TOKEN: BASE_URL + "user/reset-password-token",
  RESET_PASSWORD: BASE_URL + "user/reset-password",
};
