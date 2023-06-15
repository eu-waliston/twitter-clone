import React from "react";
import "./RightBar.css";

const RightBar = () => {
  return (
    <div className="rightbar--section">
      <div className="search--section">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search Twitter" />
      </div>

    </div>
  );
};

export default RightBar;
