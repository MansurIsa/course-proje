import CeltCard from "../../../ui/celtCard/celtCardMain/CeltCardMain";
import "./css/HomeWorkMainContainer.css";
const HomeWorkMainContainer = () => {
  const arr = [
    {
      id: 1,
      title: "Placement Test B1",
      list: "Class:",
      desc: "English Placement Test",
      btnTitle: "Start",
    },
    {
      id: 2,
      title: "HW U3 L2",
      list: "Class:",
      desc: "CELT English B2",
      btnTitle: "Start",
    },
    {
      id: 3,
      title: "HW U3 L2",
      list: "Class:",
      desc: "CELT English B2",
      btnTitle: "Start",
    },
    {
      id: 4,
      title: "Home U10 Video 3",
      list: "Class:",
      desc: "CELT English B2",
      btnTitle: "Start",
    },
    {
      id: 5,
      title: "Placement Test B1",
      list: "Class:",
      desc: "English Placement Test",
      btnTitle: "Start",
    },
    {
      id: 6,
      title: "Placement Test B1",
      list: "Class:",
      desc: "English Placement Test",
      btnTitle: "Start",
    },
  ];
  return (
    <div className="home_work_main">
      {arr?.map((card) => (
        <CeltCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default HomeWorkMainContainer;
