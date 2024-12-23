import axios from "axios";
import { baseUrl } from "../mainApi";
import { getCoursesFunc, getMyCoursesFunc } from "../redux/slices/classesSlice";

export const getCoursesX = () => async dispatch => {
    // dispatch(isLoading());


    return await axios.get(`${baseUrl}courses/`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        }
    })
        .then(resp => {
            console.log(resp);
            dispatch(getCoursesFunc(resp.data))

        }).catch(err => {
            console.log(err);

        });
}


export const getMyCoursesX = () => async dispatch => {
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