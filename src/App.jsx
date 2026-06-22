import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

import CharacterCounter from "./tools/CharacterCounter/CharacterCounter";
import WordCounter from "./tools/WordCounter/WordCounter";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/tools"
        element={<Tools />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />

      <Route
        path="/terms-of-service"
        element={<TermsOfService />}
      />

      <Route
        path="/character-counter"
        element={<CharacterCounter />}
      />

      <Route
        path="/word-counter"
        element={<WordCounter />}
      />
    </Routes>
  );
}

export default App;