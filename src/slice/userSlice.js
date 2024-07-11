import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  loading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("Token"))
    : null,
  isemailSend: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setEmailSend: (state, action) => {
      state.isemailSend =  action.payload;
    },
  },
});

export const { setUser, setToken, setLoading, setEmailSend } =
  userSlice.actions;
// reducer or not reducers
export default userSlice.reducer;
