import React, { useState, useEffect } from "react";
import "./CardItem.scss";

export default function CardItem({ title, description, imageURL }) {
  const randomLikeValue = Math.floor(Math.random() * Math.floor(999));

  const [likes, setLikes] = useState(randomLikeValue);

  useEffect(() => handleClick);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div
      className="col-xl-4 col-md-6 col-sm-12 mt-3"
      style={{ minWidth: "200px" }}
    >
      <div className="card">
        <img className="card-img-top" src={imageURL} alt="images" />
        <div className="card-body">
          <h5>{title}</h5>
          <p>{description}</p>
          <a href={imageURL} target="blank">
            Download Image
          </a>
          <button onClick={handleClick} className="btn btn-primary btn-block">
            Like
            <span role="img" aria-label="heart">
              🤍
            </span>
            {likes}
          </button>
        </div>
      </div>
    </div>
  );
}
