import { useState, useEffect } from "react";

export default function useFetch(url, dependencies) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  function fetchImage() {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }

  useEffect(() => {
    fetchImage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return data;
}
