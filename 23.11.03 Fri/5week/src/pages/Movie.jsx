import React from "react";
import { movies } from "../movieDummy.js";
import Things from "../components/Things.jsx";
import { Div } from "../styles/Things.style.jsx";

export default function TV() {
  return (
    <Div>
      {movies.results.map((movie, index) => (
        <Things key={index} things={movie} media="Movie" />
      ))}
    </Div>
  );
}
