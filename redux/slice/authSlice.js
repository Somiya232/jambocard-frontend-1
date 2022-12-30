import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { apiClient } from "../../api/instance";


const initialState = {
  message: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

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

});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
