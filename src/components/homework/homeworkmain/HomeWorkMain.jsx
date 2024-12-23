import { useDispatch, useSelector } from "react-redux";
import LogoLang from "../../../layouts/logoLang/LogoLang";
import TitleSearch from "../../../layouts/titleSearch/TitleSearch";
import HomeWorkMainContainer from "../homeWorkMainContainer/HomeWorkMainContainer";
import { homeworkCreateFunc } from "../../../redux/slices/homeworkSlice";
import HomeWorkCreateModal from "../../../modals/homeworks/HomeWorkCreateModal";

const HomeWorkMain = () => {
  const dispatch=useDispatch()

  const {homeworkCreateModal}=useSelector(state=>state.homework)
  return (
    <div className="main_container container">
      <LogoLang />
      <TitleSearch title={"Home  Work"} />
      <HomeWorkMainContainer />
      <div className="hw_create_btn">
          <button onClick={()=>dispatch(homeworkCreateFunc())}>Create</button>
      </div>

    {homeworkCreateModal && <HomeWorkCreateModal/>}

    </div>
  );
};

export default HomeWorkMain;
