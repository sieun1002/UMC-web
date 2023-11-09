import { BrowserRouter, Routes, Route } from "react-router-dom";
import Celebirity from "./pages/Celebirity";
import Movie from "./pages/Movie";
import TV from "./pages/TV";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ThingsDetail from "./pages/ThingsDetail";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Celebirity" element={<Celebirity />} />
          <Route path="/Movies" element={<Movie />} />
          <Route path="/Tv" element={<TV />} />
          <Route path="/" element={<Home />} />
          <Route path="/Movie/:title" element={<ThingsDetail />} />
          <Route path="/Tv/:title" element={<ThingsDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
