import React, { useState } from "react";
import {
  MovieWrapper,
  MovieCard,
  Overlay,
  MovieImage,
  Description,
} from "../../styles/Movie.style.jsx";
import { useNavigate } from "react-router-dom";
import { movies } from "../../movieDummy";

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
    <div className="base">
      {movies.results.map((movie, index) => {
        return (
          <MovieWrapper key={index}>
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
          </MovieWrapper>
        );
      })}
    </div>
  );
}

export default Movie;
