import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "./CardList.scss";

const CardList = () => {
  const [data, setData] = useState([]);
  // console.log("cardlist");
  async function fetchData() {
    const res = await fetch(
      "https://image-mock-data.firebaseio.com/images.json"
    );
    res.json().then((res) => setData(res));
  }

  useEffect(() => {
    fetchData();
    return () => {
      // console.log("useEffect");
    };
  }, []);

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
};

export default React.memo(CardList);
