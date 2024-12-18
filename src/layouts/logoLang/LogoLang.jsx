import React from "react";
import Logo from "../logo/Logo";
import "./css/logoLang.css";
import unitedstates from "../../assets/images/unitedstates.png";
const LogoLang = () => {
  return (
    <div className="logo_lang">
      <div className="logo_lang_img">
        <Logo />
      </div>
      <div className="logo_flag">
        <img src={unitedstates} alt="" />
      </div>
    </div>
  );
};

export default LogoLang;
