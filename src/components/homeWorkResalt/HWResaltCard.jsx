import React from "react";

const HWResaltCard = ({ data }) => {
  return (
    <div className="hwresalt_card_container">
      {data.map((item) => {
        return (
          <div className="hwresalt_card">
            <div className="hwresalt_card_header">{item.title}</div>
            <div className="hwresalt_card_body">
              <div className="hwresalt_card_body_item">
                Name: <span>{item.name}</span>
              </div>
              <div className="hwresalt_card_body_item">
                Point: <span>{item.point}</span>
              </div>
              <div className="hwresalt_card_body_item">
                <span>Date: {item.date}</span>{" "}
                <button className={"hwresalt_card_body_item_pass_btn " + (item.result === "Pass" ? "" : "fail")}>
                  VIEW
                </button>
              </div>
            </div>
            <div className={"hwresalt_card_bottom "+ (item.result === "Pass" ? "" : "fail")}>{item.result}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HWResaltCard;
