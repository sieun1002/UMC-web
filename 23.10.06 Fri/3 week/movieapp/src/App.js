// // App.js 파일
import React from "react";
import Movie from "./components/Movie/Movie";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="app-container">
      <div className="movie-list">
        {movies.results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
