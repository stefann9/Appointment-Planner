import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title" >{name}</p>
      {Object.values(description).map((content,i) => <p className="tile" key={i} >{content}</p>)}
    </div>
  );
};
