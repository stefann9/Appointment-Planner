import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ dataList }) => {
  return (
    <div>
      {dataList.map((data) => {
        const { name, ...description } = data;
        return <Tile key={name} name={name} description={description} />;
      })}
    </div>
  );
};
