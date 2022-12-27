import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../api/instance";

const initialState = {
  message: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

export const signUpUser = ({metaData}) => createAsyncThunk("signupuser", async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  const result = await apiClient("/signup", metaData, headers);
  console.log("Result -> ", result);
});

export const login = ({metaData}) => createAsyncThunk("loginuser", async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  const result = await apiClient("/login", metaData, headers);
  console.log("Result -> ", result);
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    // ---------- SIGN UP ------------------------------
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error, message } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.message = message;
      }
    },
    // ---------------- LOGIN -----------------------------

    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (
      state,
      { payload: { error, message, token, user } }
    ) => {
      state.loading = false;

      if (error) {
        state.error = error;
      } else {
        state.message = message;
        state.token = token;
        state.user = user;

        localStorage.setItem("message", message);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      }
    },
  },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
