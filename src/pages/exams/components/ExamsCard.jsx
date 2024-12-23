import React from "react";

const ExamsCard = ({ data }) => {
  const { title, name } = data;
  return (
    <div className="exam_card">
      <h4 className="exam_card_title">{title}</h4>
      <div className="exam_card_content">
        <div className="exam_name">
          Exam Name: <span>{name}</span>
        </div>
        <div className="exam_time">
          Time: <span>00:44:45</span>
        </div>
        <button className="exam_start_btn">Start</button>
      </div>
    </div>
  );
};

export default ExamsCard;
