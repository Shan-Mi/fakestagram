import React from "react";
import CardItem from "./CardItem";
import "./CardList.scss";

export default function CardList({ data }) {
  return (
    <div className="flex-container">
      {data.map((item, index) => (
        <CardItem
          key={index}
          title={item.title}
          description={item.description}
          imageURL={item.imageURL}
        />
      ))}
    </div>
  );
}
