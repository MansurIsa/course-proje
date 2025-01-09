import axios from "axios";
import { baseUrl } from "../mainApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



export const postLogin = (data) => async dispatch => {
    // dispatch(isLoading());
    console.log(data);
    
    return await axios({
        url: `${baseUrl}token/`,
        method: "POST",
        data
    }).then(resp => {
           console.log(resp);
           localStorage.setItem("ACCESS__TOKEN", resp.data.access)
           window.location.href="/dashboard"
            // dispatch(stopLoading());
  
            
            localStorage.setItem("logEmail",data?.email)
        }).catch(err => {
            console.log(err);
            // dispatch(stopLoading());
            Swal.fire({
                title: "Daxil olunmadi",
                icon: "error",
                confirmButtonText: "OK",
                width: "400px"
              }).then(() => {
                window.location.href="/"
              });
        });
}