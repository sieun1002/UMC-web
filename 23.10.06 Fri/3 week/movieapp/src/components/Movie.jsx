import React, { useState } from "react";

function Movie({ movie }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div
      className="movie-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overlay">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        {showDescription && (
          <div className="description">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        )}
      </div>
      <div className="content">
        <h2>{movie.title}</h2>
        <p>{movie.vote_average}</p>
      </div>
    </div>
  );
}

export default Movie;
