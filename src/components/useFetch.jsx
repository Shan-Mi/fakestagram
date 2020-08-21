import { useState, useEffect } from "react";

export default function useFetch(url, dependencies) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function fetchImage() {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchImage();
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

  return [data, isLoading];
}
