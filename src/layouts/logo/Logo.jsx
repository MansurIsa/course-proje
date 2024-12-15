import React from 'react'
import LogoImg from "../../assets/images/logo.png"
import "./css/logo.css"

const Logo = () => {
  return (
    <div className='logo'>
      <img  src={LogoImg} alt="Logo" />
    </div>
  )
}

export default Logo