import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://stackovercloned-mern.herokuapp.com/api/",
});
