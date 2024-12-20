import React from "react";
import "./css/hmwResalt.css";
import Sidebar from "../../layouts/sidebar/Sidebar";
import HWResaltMain from "../../components/homeWorkResalt/HWResaltMain";

const HWResalt = () => {
  return (
    <div className="hwResalt">
      <Sidebar />
      <HWResaltMain/>
   
    </div>
  );
};

export default HWResalt;
