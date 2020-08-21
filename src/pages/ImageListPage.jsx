import React from "react";

import useFetch from "../components/useFetch";
import CardList from "../components/CardList";

export default function ImageListPage() {
  const [data, isLoading] = useFetch(
    "https://image-mock-data.firebaseio.com/images.json",
    []
  );

  return (
    <div>
      <CardList data={data} isLoading={isLoading} />
    </div>
  );
}
