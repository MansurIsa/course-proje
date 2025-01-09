import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uniteUpdate } from "../../actions/classesAction";
import {
  closeFunc,
  courseUpdateInpHandle,
  viewClassesUniteModalHandle,
} from "../../redux/slices/classesSlice";

const CourseViewUpdateModal = () => {
  const dispatch = useDispatch();
  const { viewClassObj } = useSelector((state) => state.classes);
  const { uniteUpdateInpValue } = useSelector((state) => state.classes);

  console.log(viewClassObj, "uniteUpdateInpValue");

  const data = {
    id:  uniteUpdateInpValue.id ,
    name: uniteUpdateInpValue.name,
    about: uniteUpdateInpValue.about,
    course: viewClassObj.id,
  };
  console.log( uniteUpdateInpValue.id,"id");

  const saveBtn = () => {
    dispatch(uniteUpdate(viewClassObj?.id, data));
  };
  return (
    <div className="modal_container">
      <div onClick={() => dispatch(closeFunc())} className="overlay"></div>
      <div className="modal_card">
        <button onClick={() => dispatch(closeFunc())} className="close_btn">
          close
        </button>

        <input
          type="text"
          value={uniteUpdateInpValue.name}
          onChange={(e) =>dispatch(viewClassesUniteModalHandle({ key: "name", value: e.target.value }))}
          name="name"
        />

        <input
          type="text"
          value={uniteUpdateInpValue.about}
          onChange={(e) =>   dispatch(viewClassesUniteModalHandle({ key: "about", value: e.target.value }))}
          name="about"
        />
        <button onClick={saveBtn} className="save_btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default CourseViewUpdateModal;
