import LogoLang from "../../../layouts/logoLang/LogoLang";
import TitleSearch from "../../../layouts/titleSearch/TitleSearch";
import HomeWorkMainContainer from "../homeWorkMainContainer/HomeWorkMainContainer";

const HomeWorkMain = () => {
  return (
    <div className="main_container container">
      <LogoLang />
      <TitleSearch title={"Home  Work"} />
      <HomeWorkMainContainer />
    </div>
  );
};

export default HomeWorkMain;
