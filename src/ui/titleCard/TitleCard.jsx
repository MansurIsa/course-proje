import { useDispatch, useSelector } from "react-redux";
import ViewButton from "../button/viewButton/ViewButton";
import "./css/titlecard.css";
import { courseDelete } from "../../actions/classesAction";
import { updateClassesModalFunc, viewClassesModalFunc } from "../../redux/slices/classesSlice";
import CourseUpdateModal from "../../modals/courses/CourseUpdateModal";
const TitleCard = ({ data }) => {
  const dispatch = useDispatch()
  const delBtn = (id) => {
    console.log(id);
    dispatch(courseDelete(id))
  }
 
  return (
    <div className="title_card">
      <h4>{data?.name}</h4>
      <div>
        {/* <ViewButton title='Update' />
        <ViewButton title='Delete' />
        <ViewButton title='View' /> */}
        <button onClick={() => dispatch(updateClassesModalFunc(data))}>Update</button>
        <button onClick={() => delBtn(data?.id)}>Delete</button>
        <button onClick={() => dispatch(viewClassesModalFunc(data))}>View</button>
      </div>

     


    </div>
  );
};

export default TitleCard;
