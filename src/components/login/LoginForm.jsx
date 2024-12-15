import React from 'react'
import { Link } from 'react-router-dom'
import "./css/loginForm.css"

const LoginForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="logEmail">Email</label>
                <input placeholder='tagiyev.mirimran@gmail.com' id='logEmail' type="email" />
            </div>
            <div>
                <label htmlFor="logPsw">Password</label>
                <input placeholder='1234567890' id='logPsw' type="password" />
            </div>
            <Link to={'/'}>Forgot Passwor?</Link>
            <button>Log in</button>
        </form>
    )
}

export default LoginForm