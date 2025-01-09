import axios from "axios";
import { baseUrl } from "../mainApi";
import { accountsUpdateFunc, getAccountsFunc, getCoursesFunc, getMyCoursesFunc } from "../redux/slices/classesSlice";
import Swal from "sweetalert2";

export const getCoursesX = () => async dispatch => {
    // dispatch(isLoading());


    return await axios.get(`${baseUrl}courses/`, {
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


export const getAccounts = () => async dispatch => {


    return await axios.get(`${baseUrl}accounts/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        }
    })
        .then(resp => {
            console.log(resp.data);

            dispatch(getAccountsFunc(resp.data))
            dispatch(accountsUpdateFunc(resp.data))
        }).catch(err => {
            console.log(err);

        });
}




export const courseCreate = (data) => async dispatch => {


    return await axios({
        method: "POST",
        url: `${baseUrl}course-create/`,
        data,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        }

    })
        .then(resp => {
            console.log(resp);
            if (resp.status === 201) {
                Swal.fire({
                    title: "Kurs yaradildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(() => {
                    window.location.href = "/classes"
                });
            }

        }).catch(err => {
            console.log(err);
            Swal.fire({
                title: "Kurs yadilmadi",
                icon: "error",
                confirmButtonText: "OK",
                width: "400px"
            }).then(() => {
                window.location.href = "/classes"
            });

        });
}


export const courseDelete = (x) => async dispatch => {


    return await axios({
        method: "DELETE",
        url: `${baseUrl}course-delete/${x}/`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        }

    })
        .then(resp => {
            console.log(resp);
            if (resp.status === 204) {
                Swal.fire({
                    title: "Kurs silindi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(() => {
                    window.location.href = "/classes"
                });
            }

        }).catch(err => {
            console.log(err);
            Swal.fire({
                title: "Kurs silinmedi",
                icon: "error",
                confirmButtonText: "OK",
                width: "400px"
            }).then(() => {
                window.location.href = "/classes"
            });

        });
}

export const courseUpdate = (x,data) => async dispatch => {


    return await axios({
        method: "PUT",
        url: `${baseUrl}course-update/${x}/`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        },
        data

    })
        .then(resp => {
            console.log(resp);
            if (resp.status === 200) {
                Swal.fire({
                    title: "Kurs məlumatlari deyisdirildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(() => {
                    window.location.href = "/classes"
                });
            }

        }).catch(err => {
            console.log(err);
            Swal.fire({
                title: "Kurs məlumatlari deyisdirilmedi",
                icon: "error",
                confirmButtonText: "OK",
                width: "400px"
            }).then(() => {
                window.location.href = "/classes"
            });

        });
}
export const uniteUpdate = (x,data) => async dispatch => {


    return await axios({
        method: "PUT",
        url: `${baseUrl}unit-update/${x}/`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS__TOKEN')}`
        },
        data

    })
        .then(resp => {
            console.log(resp);
          
            
            if (resp.status === 200) {
                Swal.fire({
                    title: "Unite Melumatlari deyisdirildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(() => {
                    window.location.href = "/classes"
                });
            }

        }).catch(err => {
            console.log(err);
            Swal.fire({
                title: "Unite Melumatlari deyisdirilmedi",
                icon: "error",
                confirmButtonText: "OK",
                width: "400px"
            }).then(() => {
                window.location.href = "/classes"
            });

        });
}