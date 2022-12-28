import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { apiClient } from "../../api/instance";


const initialState = {
  message: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

export const signUpUser = createAsyncThunk("signupuser", async (metaData) => {
  console.log("metadata in slice -> ", metaData);
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const result = await apiClient.post(
      "/api/auth/local/register",
      metaData,
      headers
    );
    console.log("Result -> ", result);
    toast.success('Signup Successful!')
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.error.message)
  }
});

export const login = createAsyncThunk("loginuser", async (metaData) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const result = await apiClient.post("/api/auth/local", metaData, headers);
    console.log("Result -> ", result);
    localStorage.setItem("token", result?.data.jwt)
    localStorage.setItem("user", result?.data.user.username)
    toast.success('Login Successful!')
  } catch (error) {
    console.log(error)
    toast.error("Invalid Username or Password")
  }
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
      // state.token = action.payload.jwt
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
    [signUpUser.fulfilled]: (state, action) => {
      state.loading = false;
      // console.log("action signup -> ",action, state)
      // if (error) {
      //   state.error = error;
      // } else {
      //   state.message = message;
      // }
    },

    // ---------------- LOGIN -----------------------------
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state,  payload) => {
      state.loading = false;
      // console.log("action payload -> ",payload);
      // state.message = action.payload.message;
      // state.token = action.payload.data.jwt;
      // state.user = action.payload.data.user.username;
      // localStorage.setItem("message", state.message);
      // localStorage.setItem("user", JSON.stringify(action.payload.data.user.username));
      // localStorage.setItem("token", action.payload.data.jwt);
    },
  },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
