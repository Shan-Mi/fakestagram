import React from "react";
import CardItem from "./CardItem";
import "./CardList.scss";
import WithSpinner from "./WithSpinner";

const CardList = ({ isLoading, data }) => {
  return (
    <div className="flex-container">
      {data.map((item, index) => (
        <CardItem
          key={index}
          id={index}
          title={item.title}
          description={item.description}
          imageURL={item.imageURL}
        />
      ))}
    </div>
  );
};

export default WithSpinner(CardList);
