import { useDispatch } from "react-redux";
import LogoLang from "../../../layouts/logoLang/LogoLang";
import TitleSearch from "../../../layouts/titleSearch/TitleSearch";
import ClassesTopContainer from "../classesTopContainer/ClassesTopContainer";
import { useEffect } from "react";
import { getCoursesX, getMyCoursesX } from "../../../actions/test";

const ClassesMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyCoursesX());
    dispatch(getCoursesX());
  }, [dispatch]);

  return (
    <div className="main_container container">
      <LogoLang />
      <TitleSearch title={"Courses"} />
      <ClassesTopContainer />
    </div>
  );
};

export default ClassesMain;
