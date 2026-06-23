import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";

import CharacterCounter from "./tools/CharacterCounter/CharacterCounter";
import WordCounter from "./tools/WordCounter/WordCounter";
import ImageCompressor from "./tools/ImageCompressor/ImageCompressor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/tools" element={<Tools />} />

      <Route path="/about" element={<About />} />

      <Route
        path="/character-counter"
        element={<CharacterCounter />}
      />

      <Route
        path="/word-counter"
        element={<WordCounter />}
      />

      <Route
        path="/image-compressor"
        element={<ImageCompressor />}
      />
    </Routes>
  );
}

export default App;