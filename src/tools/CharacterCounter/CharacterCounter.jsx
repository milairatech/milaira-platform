import { useState } from "react";
import Navbar from "../../components/Navbar";
import "./CharacterCounter.css";

function CharacterCounter() {
  const [text, setText] = useState("");

  const characters = text.length;

  const withoutSpaces = text.replace(/\s/g, "").length;

  const spaces =
    text.length - text.replace(/ /g, "").length;

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const sentences =
    text.trim() === ""
      ? 0
      : text.split(/[.!?]+/).filter(Boolean).length;

  const paragraphs =
    text.trim() === ""
      ? 0
      : text.split(/\n+/).filter(Boolean).length;

  const lines =
    text.trim() === ""
      ? 0
      : text.split("\n").length;

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const pasteText = async () => {
    try {
      const clipboardText =
        await navigator.clipboard.readText();

      setText(clipboardText);
    } catch {
      alert("Paste permission denied");
    }
  };

  const clearText = () => {
    setText("");
  };

  return (
    <>
      <Navbar />

      <div className="character-container">
        <h1 className="character-title">
          Character Counter
        </h1>

        <p className="character-subtitle">
          Real-time text analytics with character,
          word and sentence insights.
        </p>

        <textarea
          className="character-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your content to analyze instantly..."
        />

        <div className="button-group">
          <button
            className="tool-btn"
            onClick={copyText}
          >
            Copy Text
          </button>

          <button
            className="tool-btn"
            onClick={pasteText}
          >
            Paste Text
          </button>

          <button
            className="tool-btn"
            onClick={clearText}
          >
            Reset
          </button>
        </div>

        <div className="stats-bar">
          <StatItem
            label="Characters"
            value={characters}
          />

          <StatItem
            label="Words"
            value={words}
          />

          <StatItem
            label="Sentences"
            value={sentences}
          />

          <StatItem
            label="Paragraphs"
            value={paragraphs}
          />

          <StatItem
            label="Spaces"
            value={spaces}
          />

          <StatItem
            label="Lines"
            value={lines}
          />

          <StatItem
            label="Letters Only"
            value={withoutSpaces}
          />
        </div>
      </div>
    </>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="stat-item">
      <span className="stat-label">
        {label}
      </span>

      <span className="stat-value">
        {value}
      </span>
    </div>
  );
}

export default CharacterCounter;