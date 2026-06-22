import { useState } from "react";
import Navbar from "../../components/Navbar";
import "../CharacterCounter/CharacterCounter.css";

function WordCounter() {
  const [text, setText] = useState("");

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const characters = text.length;

  const sentences =
    text.trim() === ""
      ? 0
      : text.split(/[.!?]+/).filter(Boolean).length;

  const paragraphs =
    text.trim() === ""
      ? 0
      : text.split(/\n+/).filter(Boolean).length;

  const readingTime =
    words === 0
      ? 0
      : (words / 200).toFixed(1);

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
          Word Counter
        </h1>

        <p className="character-subtitle">
          Analyze words, reading time and writing
          statistics instantly.
        </p>

        <textarea
          className="character-textarea"
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          placeholder="Start typing or paste your content..."
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
            label="Words"
            value={words}
          />

          <StatItem
            label="Characters"
            value={characters}
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
            label="Reading Time"
            value={`${readingTime}m`}
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

export default WordCounter;