import React, { useState, useEffect } from "react";

import CardList from "./components/CardList";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://image-mock-data.firebaseio.com/images.json"
      );
      res.json().then((res) => setData(res));
    }
    
    fetchData();
  });

  return (
    <div className="App container flex-lg-column">
      <h1
        className="text-center"
        style={{ padding: "2rem 0 0", fontSize: "bold" }}
      >
        Fakestagram
      </h1>
      <CardList data={data} />
    </div>
  );
}

export default App;

/* 
https://image-mock-data.firebaseio.com/images.json
 */
