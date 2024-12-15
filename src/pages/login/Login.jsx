import React from 'react'
import Logo from '../../layouts/logo/Logo'
import LoginForm from '../../components/login/LoginForm'
import "./css/login.css"

const Login = () => {
  return (
    <div className='login_container'>
        <div className='logo_login_form'>
            <Logo/>
            <LoginForm/>
        </div>
    </div>
  )
}

export default Login