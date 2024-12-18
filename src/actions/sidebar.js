import axios from "axios";
import { baseUrl } from "../mainApi";
import { getUserFunc } from "../redux/slices/sidebarSlice";

export const getUserObj = (x) => async dispatch => {
    // dispatch(isLoading());


    return await axios.get(`${baseUrl}account/${x}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        }
    })
        .then(resp => {
            console.log(resp.data);
            dispatch(getUserFunc(resp.data))
        }).catch(err => {
            console.log(err);

        });
}