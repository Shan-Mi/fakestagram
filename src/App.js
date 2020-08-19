import React from "react";

import CardList from "./components/CardList";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App container flex-lg-column">
      <h1
        className="text-center"
        style={{ padding: "2rem 0 0", fontSize: "bold" }}
      >
        Fakestagram
      </h1>
      <CardList />
    </div>
  );
}

/* 
https://image-mock-data.firebaseio.com/images.json
 */
