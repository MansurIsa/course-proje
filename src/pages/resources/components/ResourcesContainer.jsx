import React from "react";
import ResourcesCard from "./ResourcesCard";

const ResourcesContainer = () => {
  const arr = [
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
    {
      title: "B1+ Book Mp3",
      status: "Active",
    },
  ];

  return (
    <div className="resources_card_container">
      {arr?.map((data, i) => {
        return <ResourcesCard key={i} data={data} />;
      })}
    </div>
  );
};

export default ResourcesContainer;
