import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";

export default function ImageListPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log("cardlist");
  async function fetchData() {
    const res = await fetch(
      "https://image-mock-data.firebaseio.com/images.json"
    );
    res.json().then((res) => setData(res));
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
    return () => {
      // console.log("useEffect");
    };
  }, []);

  return (
    <div>
      <CardList data={data} isLoading={isLoading} />
    </div>
  );
}
