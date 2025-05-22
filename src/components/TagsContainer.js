import React from "react";
import "../styles/tags-container.css";

const TagsContainer = ({ tags }) => {
  const defaultTags = [
    "Верхній одяг",
    "Розмір: XL",
    "Колір: бежевий",
    "Матеріал: вовна",
  ];

  const displayTags = tags || defaultTags;

  return (
    <div className="tags-container">
      {displayTags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagsContainer;
