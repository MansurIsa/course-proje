import React from "react";
import './css/titleSearch.css'
const TitleSearch = ({title}) => {
  return (
    <div className="title_search_container">
      <h3>{title}</h3>
      <div className="title_search_input_div">
        <input type="text" placeholder="Search" />
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_741_255)">
            <path
              d="M18.7678 17.6494L13.3648 12.2464C14.4114 10.9536 15.0415 9.31088 15.0415 7.52175C15.0415 3.37504 11.6674 0.000976562 7.52074 0.000976562C3.37403 0.000976562 0 3.375 0 7.52171C0 11.6684 3.37406 15.0425 7.52077 15.0425C9.30991 15.0425 10.9526 14.4123 12.2454 13.3658L17.6485 18.7688C17.8028 18.9232 18.0055 19.0008 18.2082 19.0008C18.4109 19.0008 18.6135 18.9232 18.7679 18.7688C19.0774 18.4593 19.0774 17.959 18.7678 17.6494ZM7.52077 13.4592C4.24646 13.4592 1.58333 10.796 1.58333 7.52171C1.58333 4.2474 4.24646 1.58427 7.52077 1.58427C10.7951 1.58427 13.4582 4.2474 13.4582 7.52171C13.4582 10.796 10.795 13.4592 7.52077 13.4592Z"
              fill="#868686"
            />
          </g>
          <defs>
            <clipPath id="clip0_741_255">
              <rect width="19" height="19" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default TitleSearch;
