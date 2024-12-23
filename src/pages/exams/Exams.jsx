import LogoLang from "../../layouts/logoLang/LogoLang";
import Sidebar from "../../layouts/sidebar/Sidebar";
import TitleSearch from "../../layouts/titleSearch/TitleSearch";
import ExamsContainer from "./components/ExamsContainer";
import "./css/exams.css";

const Exams = () => {
  return (
    <section className="exams_container">
      <Sidebar />
      <div className="container main_container">
        <LogoLang />
        <TitleSearch title="Exams" />
        <ExamsContainer />
      </div>
    </section>
  );
};

export default Exams;
