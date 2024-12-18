import { useDispatch, useSelector } from "react-redux";
import LogoLang from "../../layouts/logoLang/LogoLang";
import Sidebar from "../../layouts/sidebar/Sidebar";
import TitleSearch from "../../layouts/titleSearch/TitleSearch";
import TitleCard from "../../ui/titleCard/TitleCard";
import "./css/classes.css";
import { useEffect } from "react";
import { getCourses, getMyCourses } from "../../actions/classesAction";
const Classes = () => {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getMyCourses())
    dispatch(getCourses())
  },[dispatch])


  const {courses,myCourses}=useSelector(state=>state.classes)
  const {userObj}=useSelector(state=>state.sidebar)

  
  
  return (
    <section className="classes_container">
      <Sidebar />
      <div className='main_container container'>
        <LogoLang />
        <TitleSearch title="Course"/>
        <div className="container classes_main">
          <div className="classes_cards">
            {/* {classesData.map((data) => (
              <TitleCard key={data.id} data={data} />
            ))} */}

            {
              userObj?.is_staff? 
              courses.map((data,i)=>{
                return  <TitleCard key={data.id} data={data} />
              }): 
              myCourses.map((data,i)=>{
                return  <TitleCard key={data.id} data={data} />
              })
            }
          </div>
        </div>
      </div>

    </section>
  );
};

export default Classes;
