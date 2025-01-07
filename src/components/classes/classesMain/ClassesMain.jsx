import { useDispatch, useSelector } from "react-redux";
import LogoLang from "../../../layouts/logoLang/LogoLang";
import TitleSearch from "../../../layouts/titleSearch/TitleSearch";
import ClassesTopContainer from "../classesTopContainer/ClassesTopContainer";
import { courseCreateModalBtn } from "../../../redux/slices/classesSlice";
import CourseCreateModal from "../../../modals/courses/CourseCreateModal";
import CourseUpdateModal from "../../../modals/courses/CourseUpdateModal";
import CourseViewModal from "../../../modals/courses/CourseViewModal";



const ClassesMain = () => {
  const dispatch=useDispatch()
  const {courseCreateModal,updateClassesModal,viewClassesModal}=useSelector(state=>state.classes)


  return (
    <div className="main_container container">
      <LogoLang />
      <TitleSearch title={"Courses"} />
      <ClassesTopContainer />
      <div className="course_create_btn">
        <button onClick={()=>dispatch(courseCreateModalBtn())}>Create</button>
      </div>
      {courseCreateModal && <CourseCreateModal/>}
      {updateClassesModal && <CourseUpdateModal />}
      {viewClassesModal && <CourseViewModal/>}
    </div>
  );
};

export default ClassesMain;
