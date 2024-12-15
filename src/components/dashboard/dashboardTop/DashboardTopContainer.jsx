import React from "react";
import "./css/dasboardTop.css";
import { Link } from "react-router-dom";
const DashboardTopContainer = () => {
  return (
    <div className="dashboard_top_cards">
      <div className="dashboard_top_card">
        <div className="dashboard_card_top">HomeWork TODO</div>
        <div>
        <div className="dashboard_card_todo">
          <p>Placement Test B1</p>
          <span>English Placement Test</span>
        </div>
        <div className="dashboard_card_todo">
          <p>Placement Test A2</p>
          <span>English Placement Test</span>
        </div>
        <div className="dashboard_card_todo">
          <p>Placement Test A1</p>
          <span>English Placement Test</span>
        </div>

        </div>

        <div className="dashboard_link">
          <Link>View All</Link>
        </div>
      </div>
      <div className="dashboard_top_card">
        <div className="dashboard_card_top">Essay Reviews</div>
        <div>
          <div className="dashboard_card_reviews">
            <p>B1 UNIT 3A</p>
          </div>
          <div className="dashboard_card_reviews">
            <p>B1+UNIT 1A</p>
          </div>
          <div className="dashboard_card_reviews">
            <p>B1 End of Course A</p>
          </div>
          <div className="dashboard_card_reviews">
            <p>B1 Mid-Tem A</p>
          </div>
        </div>

        <div className="dashboard_link">
          <Link>View All</Link>
        </div>
      </div>
      <div className="dashboard_top_card">
        <div className="dashboard_card_top">Speaking Reviews</div>
        <div>
          <div className="dashboard_card_reviews">
            <p>B2 Unit 4A</p>
          </div>
          <div className="dashboard_card_reviews">
            <p>B2 Unit 9B</p>
          </div>
          <div className="dashboard_card_reviews">
            <p>B2 Unit 10B</p>
          </div>
          <div className="dashboard_card_reviews">
            <p>B2 End of Course</p>
          </div>
        </div>
        <div className="dashboard_link">
          <Link>View All</Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopContainer;
