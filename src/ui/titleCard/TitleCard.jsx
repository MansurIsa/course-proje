import ViewButton from "../button/viewButton/ViewButton";
import "./css/titlecard.css";
const TitleCard = ({ data }) => {
  return (
    <div className="title_card">
      <h4>{data.title}</h4>
      <ViewButton title='View' />
    </div>
  );
};

export default TitleCard;
