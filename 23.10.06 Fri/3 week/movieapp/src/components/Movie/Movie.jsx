import React, { useState } from "react";
import { MovieCard, Overlay, MovieImage, Description } from "./Movie.style.jsx";

function Movie({ movie }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <MovieCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Overlay>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        {showDescription && (
          <Description>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </Description>
        )}
      </Overlay>

      <div>
        <h2>{movie.title}</h2>
        <p>{movie.vote_average}</p>
      </div>
    </MovieCard>
  );
}

export default Movie;
