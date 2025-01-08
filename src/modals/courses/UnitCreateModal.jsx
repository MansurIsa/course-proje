import { useState } from "react";
import { closeFunc } from "../../redux/slices/classesSlice";
import { useDispatch } from "react-redux";
import { unitCreate } from "../../actions/classesAction";

function UnitCreateModal({ courseId }) {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const dispatch = useDispatch();

  const data = {
    name,
    about,
    course: courseId,
  };

  const saveBtn = () => {
    unitCreate(data);
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
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <button onClick={saveBtn} className="save_btn">
          Save
        </button>
      </div>
    </div>
  );
}

export default UnitCreateModal;
