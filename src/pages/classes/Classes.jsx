import ClassesMain from "../../components/classes/classesMain/ClassesMain";
import Sidebar from "../../layouts/sidebar/Sidebar";
import "./css/classes.css";
const Classes = () => {
  return (
    <section className="classes_container">
      <Sidebar />
      <ClassesMain />
    </section>
  );
};

export default Classes;
