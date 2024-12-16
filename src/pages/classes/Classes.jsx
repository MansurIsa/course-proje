import Sidebar from "../../layouts/sidebar/Sidebar";
import TitleCard from "../../ui/titleCard/TitleCard";
import "./css/classes.css";
const Classes = () => {
  const classesData = [
    {
      id: 1,
      title: "English Placement Test",
    },
    {
      id: 2,
      title: "I.T Placement Test",
    },
    {
      id: 3,
      title: "SAT I Reading",
    },
    {
      id: 4,
      title: "SAT I Writing",
    },
    {
      id: 5,
      title: "SAT I Writing",
    },
    {
      id: 6,
      title: "SAT I Writing",
    },
    {
      id: 7,
      title: "SAT I Writing",
    },
    {
      id: 8,
      title: "SAT I Writing",
    },
    {
      id: 9,
      title: "SAT I Writing",
    },
    {
      id: 10,
      title: "SAT I Writing",
    },
    {
      id: 11,
      title: "SAT I Writing",
    },
    {
      id: 12,
      title: "SAT I Writing",
    },
    {
      id: 13,
      title: "SAT I Writing",
    },
    {
      id: 14,
      title: "SAT I Writing",
    },
    {
      id: 15,
      title: "SAT I Writing",
    },
    {
      id: 16,
      title: "SAT I Writing",
    },
  ];
  return (
    <section className="classes_container">
      <Sidebar />
      <div className="container classes_main">
        <div className="classes_cards">
          {classesData.map((data) => (
            <TitleCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
