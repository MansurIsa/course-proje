import React from 'react'
import { Link } from 'react-router-dom'
import "./css/loginForm.css"
import { useDispatch, useSelector } from 'react-redux'
import { emailHandle, pswHandle } from '../../redux/slices/loginSlice'
import { postLogin } from '../../actions/loginAction'

const LoginForm = () => {
    const {psw,email}=useSelector(state=>state.login)
    const dispatch=useDispatch()

    const x={
        email: email,
        password: psw
    }

    const logSubmit=(e)=>{
        e.preventDefault()
        dispatch(postLogin(x))

    }
    return (
        <form onSubmit={logSubmit}>
            <div>
                <label htmlFor="logEmail">Email</label>
                <input value={email} onChange={(e)=>dispatch(emailHandle(e.target.value))} placeholder='tagiyev.mirimran@gmail.com' id='logEmail' type="email" />
            </div>
            <div>
                <label htmlFor="logPsw">Password</label>
                <input value={psw} onChange={(e)=>dispatch(pswHandle(e.target.value))} placeholder='1234567890' id='logPsw' type="password" />
            </div>
            <Link to={'/'}>Forgot Passwor?</Link>
            <button>Log in</button>
        </form>
    )
}

export default LoginForm