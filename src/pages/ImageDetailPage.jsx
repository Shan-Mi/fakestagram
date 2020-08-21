import React, { useState, useEffect } from "react";
// import CardItemDetail from "../components/CardItemDetail";
import CardItem from "../components/CardItem";

export default function ImageDetailPage(props) {
  const [imageData, setImageData] = useState({});
  const imageId = props.match.params.id;

  function fetchImage() {
    fetch(`https://image-mock-data.firebaseio.com/images/${imageId}.json`)
      .then((res) => res.json())
      .then((result) => {
        setImageData(result);
      });
  }

  useEffect(() => {
    fetchImage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Image Detail Page</h1>
      <CardItem
        id={imageId}
        title={imageData.title}
        description={imageData.description}
        imageURL={imageData.imageURL}
      />
    </div>
  );
}
