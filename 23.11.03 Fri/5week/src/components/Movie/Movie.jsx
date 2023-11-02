import React, { useState } from "react";
import { MovieCard, Overlay, MovieImage, Description } from "./Movie.style.jsx";
import { useNavigate } from "react-router-dom";

function Movie({ movie }) {
  const navigate = useNavigate();
  const clicked = () => {
    navigate(`/Movies/${movie.title}`, {
      state: {
        imgPath: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      },
    });
  };

  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <MovieCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={clicked}
    >
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
