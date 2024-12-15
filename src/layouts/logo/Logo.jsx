import React from 'react'
import LogoImg from "../../assets/images/logo.png"
import "./css/logo.css"

const Logo = () => {
  return (
    <img className='logo' src={LogoImg} alt="Logo" />
  )
}

export default Logo