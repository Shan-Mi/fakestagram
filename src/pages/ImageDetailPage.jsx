import React from "react";

import useFetch from "../components/useFetch";
import CardItem from "../components/CardItem";

export default function ImageDetailPage(props) {
  const imageId = props.match.params.id;
  const url = `https://image-mock-data.firebaseio.com/images/${imageId}.json`;
  const [data, isLoading] = useFetch(url, []);

  return (
    <>
      <h1 className='text-center'>Image Detail Page</h1>
      <CardItem id={imageId} isLoading={isLoading} data={data} detailedPage={"true"}/>
    </>
  );
}
