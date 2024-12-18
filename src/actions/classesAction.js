import axios from "axios";
import { baseUrl } from "../mainApi";
import { getCoursesFunc, getMyCoursesFunc } from "../redux/slices/classesSlice";

export const getCourses = () => async dispatch => {
    // dispatch(isLoading());


    return await axios.get(`${baseUrl}courses/`)
        .then(resp => {
            console.log(resp);
            dispatch(getCoursesFunc(resp.data))

        }).catch(err => {
            console.log(err);

        });
}


export const getMyCourses = () => async dispatch => {
    // dispatch(isLoading());


    return await axios.get(`${baseUrl}mycourses/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        }
    })
        .then(resp => {
            console.log(resp);
            dispatch(getMyCoursesFunc(resp.data))

        }).catch(err => {
            console.log(err);

        });
}