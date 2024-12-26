import React from "react";

const ResourcesCard = ({ data }) => {
  const { title, status } = data;
  return (
    <div className="resources_card">
      <p className="resources_card_title">{title}</p>
      <div className="resources_card_body">
        <p className="resources_card_body_content">
          Status: <span>{status}</span>
        </p>
      </div>
      <button className="resources_card_btn">Download</button>
    </div>
  );
};

export default ResourcesCard;
