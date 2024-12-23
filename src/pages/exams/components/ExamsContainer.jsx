import React from "react";
import ExamsCard from "./ExamsCard";

const ExamsContainer = () => {
  const arr = [
    {
      title: "CELT English A1",
      name: "A1 Unit 2A",
    },
    {
      title: "CELT English A1",
      name: "A1 Unit 2A",
    },
    {
      title: "CELT English A1",
      name: "A1 Unit 2A",
    },
  ];

  return (
    <div className="exams_card_container">
      {arr?.map((data, i) => {
        return <ExamsCard data={data} key={i} />;
      })}
    </div>
  );
};

export default ExamsContainer;
