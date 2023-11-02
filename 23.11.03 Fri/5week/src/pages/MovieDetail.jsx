import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { MovieDetailImage } from "../styles/Movie.style.jsx";

export default function MovieDetail() {
  const { title } = useParams();
  const location = useLocation();
  const imgPath = location.state.imgPath;

  console.log(location);
  console.log(location.state.imgPath);

  return (
    <>
      <MovieDetailImage src={`${imgPath}`} alt={`${title}`} />
      <div>{title}</div>
    </>
  );
}
