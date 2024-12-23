import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../ui/titleCard/TitleCard";
import { useEffect } from "react";
import { getCoursesX, getMyCoursesX } from "../../../actions/test";

const ClassesTopContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesX);
    dispatch(getMyCoursesX);
  }, [dispatch]);

  const { courses, myCourses } = useSelector((state) => state.classes);
  const { userObj } = useSelector((state) => state.sidebar);

  console.log(courses, myCourses);
  console.log(userObj);

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
