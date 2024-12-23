import axios from "axios";
import { getCoursesFunc, getMyCoursesFunc } from "../redux/slices/classesSlice";
import { baseUrl } from "../mainApi";

export  const getCoursesX = () => async (dispatch) => {
  return await axios
    .get(`${baseUrl}courses/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS__TOKEN")}`,
      },
    })
    .then((resp) => {
      console.log(resp);
      dispatch(getCoursesFunc(resp.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMyCoursesX = () => async (dispatch) => {
  return await axios
    .get(`${baseUrl}mycourses/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS__TOKEN")}`,
      },
    })
    .then((resp) => {
      console.log(resp);
      dispatch(getMyCoursesFunc(resp.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
