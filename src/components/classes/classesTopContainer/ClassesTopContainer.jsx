import { useDispatch, useSelector } from "react-redux";
import { getCourses, getMyCourses } from "../../../actions/classesAction";
import TitleCard from "../../../ui/titleCard/TitleCard";
import { useEffect } from "react";

const ClassesTopContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyCourses);
    dispatch(getCourses);
  }, [dispatch]);

  const { courses, myCourses } = useSelector((state) => state.classes);
  const { userObj } = useSelector((state) => state.sidebar);

  console.log(courses,myCourses);
  

  return (
    <div className="classes_main">
      <div className="classes_cards">
        {userObj?.is_staff
          ? courses.map((data) => {
              return <TitleCard key={data.id} data={data} />;
            })
          : myCourses.map((data) => {
              return <TitleCard key={data.id} data={data} />;
            })}
      </div>
    </div>
  );
};

export default ClassesTopContainer;
