import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://localhost:5000/",
});