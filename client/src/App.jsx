import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Kundli from "./pages/Kundli";
import Horoscope from "./pages/Horoscope";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#12082d] to-black text-white">

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/kundli"
          element={<Kundli />}
        />

        <Route
          path="/horoscope"
          element={<Horoscope />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </div>
  );
}

export default App;