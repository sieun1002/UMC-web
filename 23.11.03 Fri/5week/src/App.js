import { BrowserRouter, Routes, Route } from "react-router-dom";
import Celebirity from "./pages/Celebirity";
import Movie from "./components/Movie/Movie";
import TV from "./pages/TV";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Celebirity" element={<Celebirity />} />
          <Route path="/Movies" element={<Movie />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/" element={<Home />} />
          <Route path="/Movies/:title" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
