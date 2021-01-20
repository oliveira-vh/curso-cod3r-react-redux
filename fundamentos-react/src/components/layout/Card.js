import React from "react";
import "./card.css";

const Card = ({ titulo, color, children }) => {
  const style = {
    backgroundColor: color || "#f00",
    borderColor: color || "#f00"
  };

  return (
    <div className="Card" style={style}>
      <div className="Title">{titulo}</div>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Card;
