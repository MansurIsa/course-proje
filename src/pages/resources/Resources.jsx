import React from "react";
import Sidebar from "../../layouts/sidebar/Sidebar";
import LogoLang from "../../layouts/logoLang/LogoLang";
import TitleSearch from "../../layouts/titleSearch/TitleSearch";
import ResourcesContainer from "./components/ResourcesContainer";
import "./css/resources.css";

const Resources = () => {
  return (
    <div>
      <section className="exams_container">
        <Sidebar />
        <div className="container main_container">
          <LogoLang />
          <TitleSearch title="Resources" />
          <ResourcesContainer />
        </div>
      </section>
    </div>
  );
};

export default Resources;
