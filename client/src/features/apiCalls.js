import { loginFailure, loginStart, loginSuccess } from "./user";
// import axios from "axios";
import  axiosInstance from './../config'

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    // const res = await axios.post("http://localhost:8800/api/auth/login", user);
    const res = await axiosInstance.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }

// axios
// .post("http://localhost:5000/api/auth/login", {
//   body: user,
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

};