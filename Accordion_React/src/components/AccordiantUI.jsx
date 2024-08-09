import React, { useState } from "react";
import "./AccordiantUI.css";

const AccordiantUI = ({ title, info }) => {
  const [expand, setExpand] = useState(false);
  const handleonExpand = () => {
    setExpand(!expand);
  };
  return (
    <div className="accContainer">
      <div>
        <h2>{title}</h2>
        <button onClick={handleonExpand}>{expand === false ? "+" : "-"}</button>
      </div>

      <p>{expand && info}</p>
    </div>
  );
};

export default AccordiantUI;
