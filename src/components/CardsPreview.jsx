import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardsPreviewWrapper } from "./CardsPreview.styles";

const CardsPreview = ({ data, id, detailedPage }) => {
  const { description, imageURL, title } = data;
  console.log(detailedPage);
  const randomLikeValue = Math.floor(Math.random() * Math.floor(999));

  const [likes, setLikes] = useState(randomLikeValue);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => handleClick, [likes]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleClick() {
    setLikes(likes + 1);
  }

  function toggleShowDescription() {
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
    <CardsPreviewWrapper detailedPage={detailedPage}>
    {console.log(detailedPage)}
      <div className="card">
        <img className="card-img-top" src={imageURL} alt="images" />
        <div className="card-body">
          <h5>{title}</h5>

          {renderDescription()}

          <a href={imageURL} target="_blank" rel="noopener noreferrer">
            Download Image
          </a>
          <button onClick={handleClick} className="btn btn-primary btn-block">
            Like
            <span role="img" aria-label="heart">
              🤍
            </span>
            {likes}
          </button>
          <Link to={`/images/${id}`}>Go to detailed page.</Link>
        </div>
      </div>
    </CardsPreviewWrapper>
  );
};

export default CardsPreview;
