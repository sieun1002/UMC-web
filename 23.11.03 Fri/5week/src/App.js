import { BrowserRouter, Routes, Route } from "react-router-dom";
import Celebirity from "./pages/Celebirity";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Celebirity" element={<Celebirity />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
