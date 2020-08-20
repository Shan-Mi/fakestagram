import React, { useState, useEffect } from "react";
import CardItemDetail from "../components/CardItemDetail";

export default function ImageDetailPage(props) {
  const [imageData, setImageData] = useState({});
  console.log(props);

  function fetchImage() {

    const imageId = props.match.params.id

    fetch(`https://image-mock-data.firebaseio.com/images/${imageId}.json`)
      .then((res) => res.json())
      .then((result) => {
        setImageData(result);
      });
  }

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <h1>Image Detail Page</h1>
      <CardItemDetail
        title={imageData.title}
        description={imageData.description}
        imageURL={imageData.imageURL}
      />
    </div>
  );
}
