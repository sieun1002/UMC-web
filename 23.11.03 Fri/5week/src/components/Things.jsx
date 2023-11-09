import React, { useState } from "react";
import {
  ThingsWrapper,
  ThingsCard,
  Overlay,
  ThingsImage,
  Description,
} from "../styles/Things.style.jsx";
import { useNavigate } from "react-router-dom";

var title = "";

function Things({ things, media }) {
  {
    things && things.title ? (title = things.title) : (title = things.name);
  }

  // props를 통해 things를 받아옴
  const navigate = useNavigate();
  const clicked = () => {
    navigate(`/${media}/${title}`, {
      state: {
        imgPath: `https://image.tmdb.org/t/p/w500/${things.poster_path}`,
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
      <ThingsWrapper>
        <ThingsCard
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={clicked}
        >
          <Overlay>
            <ThingsImage
              src={`https://image.tmdb.org/t/p/w500/${things.poster_path}`}
              alt={title}
            />
            {showDescription && (
              <Description>
                <h2>{title}</h2>
                <p>{things.overview}</p>
              </Description>
            )}
          </Overlay>
          <div>
            <h2>{title}</h2>
            <p>{things.vote_average}</p>
          </div>
        </ThingsCard>
      </ThingsWrapper>
    </div>
  );
}

export default Things;
