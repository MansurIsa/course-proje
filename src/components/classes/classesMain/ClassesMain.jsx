import { useDispatch, useSelector } from "react-redux";
import LogoLang from "../../../layouts/logoLang/LogoLang";
import TitleSearch from "../../../layouts/titleSearch/TitleSearch";
import ClassesTopContainer from "../classesTopContainer/ClassesTopContainer";
import { useEffect } from "react";
import { getCoursesX, getMyCoursesX } from "../../../actions/test";
const ClassesMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyCoursesX);
    dispatch(getCoursesX);
  }, [dispatch]);


  const {courses,myCourses}=useSelector(state=>state.classes)

  console.log(courses,myCourses);
  




  return (
    <div className="main_container container">
      <LogoLang />
      <TitleSearch title={"Courses"} />
      ijebiwgfigwef
      {/* <ClassesTopContainer /> */}
    </div>
  );
};

export default ClassesMain;
