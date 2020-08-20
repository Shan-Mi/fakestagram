import React, { useState, useEffect } from "react";

export default function CardItemDetail({ imageURL, title, description }) {
  const randomLikeValue = Math.floor(Math.random() * Math.floor(999));

  const [likes, setLikes] = useState(randomLikeValue);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => handleClick, [likes]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleClick() {
    setLikes(likes + 1);
  }

  function toggleShowDescription() {
    // console.log("clicked toggle");
    setShowDescription(!showDescription);
  }

  function renderDescription() {
    if (showDescription) {
      return (
        <p
          className="clickable-text"
          onClick={toggleShowDescription}
          onKeyDown={toggleShowDescription}
        >
          {description}
        </p>
      );
    } else {
      return (
        <p>
          <button
            className="clickable-text btn btn-info"
            onClick={toggleShowDescription}
          >
            Read More
          </button>
        </p>
      );
    }
  }

  return (
    <div>
      <div className="col-xl-12 mt-3" style={{ minWidth: "200px" }}>
        <div className="card">
          <img className="card-img-top" src={imageURL} alt="images" />
          <div className="card-body">
            <h5>{title}</h5>
            {renderDescription()}
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
    </div>
  );
}
