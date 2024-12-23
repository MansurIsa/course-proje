import LogoLang from "../../../layouts/logoLang/LogoLang";
import TitleSearch from "../../../layouts/titleSearch/TitleSearch";
import ClassesTopContainer from "../classesTopContainer/ClassesTopContainer";
const ClassesMain = () => {
  return (
    <div className="main_container container">
      <LogoLang />
      <TitleSearch title={"Courses"} />
      <ClassesTopContainer />
    </div>
  );
};

export default ClassesMain;
