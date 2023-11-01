import { BrowserRouter, Routes, Route } from "react-router-dom";
import Celebirity from "./pages/Celebirity";
import Movie from "./components/Movie/Movie";
import TV from "./pages/TV";
import Header from "./components/Header";
import Home from "./pages/Home";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Celebirity" element={<Celebirity />} />
          <Route
            path="/Movies"
            element={movies.results.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          />
          <Route path="/TV" element={<TV />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
