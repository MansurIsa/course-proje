import axios from "axios";
import { baseUrl } from "../mainApi";
import { getHomeworksFunc, getMyGroupsFunc, getMyHomeworksFunc } from "../redux/slices/homeworkSlice";

export const getMyHomeWorks = () => async dispatch => {
    // dispatch(isLoading());


    return await axios.get(`${baseUrl}myhomeworks/`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        }
    })
        .then(resp => {
            console.log(resp.data);
           dispatch(getMyHomeworksFunc(resp.data))

        }).catch(err => {
            console.log(err);

        });
}


export const getHomeWorks = () => async dispatch => {
    // dispatch(isLoading());


    return await axios.get(`${baseUrl}homeworks/`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        }
    })
        .then(resp => {
            console.log(resp.data);
           dispatch(getHomeworksFunc(resp.data))

        }).catch(err => {
            console.log(err);

        });
}



export const getGroups = () => async dispatch => {
    // dispatch(isLoading());


    return await axios.get(`${baseUrl}groups/`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        }
    })
        .then(resp => {
            console.log(resp.data);
          

        }).catch(err => {
            console.log(err);

        });
}


export const getMyGroups = () => async dispatch => {
    // dispatch(isLoading());


    return await axios.get(`${baseUrl}mygroups/`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        }
    })
        .then(resp => {
            console.log(resp.data);
          dispatch(getMyGroupsFunc(resp.data))

        }).catch(err => {
            console.log(err);

        });
}


export const homeWorkCreateSave = (data) => async dispatch => {
    // dispatch(isLoading());


    return await axios(`${baseUrl}homework-create/`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        },
        method: "POST",
        data
    })
        .then(resp => {
            console.log(resp.data);
        

        }).catch(err => {
            console.log(err);

        });
}