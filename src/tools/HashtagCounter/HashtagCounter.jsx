import { useState } from "react";
import Navbar from "../../components/Navbar";
import "../CharacterCounter/CharacterCounter.css";

function HashtagCounter() {
  const [keyword, setKeyword] = useState("");

  const hashtags = keyword
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => "#" + word.replace(/[^a-zA-Z0-9]/g, ""));

  const copyHashtags = () => {
    navigator.clipboard.writeText(
      hashtags.join(" ")
    );
  };

  return (
    <>
      <Navbar />

      <div className="character-container">
        <h1 className="character-title">
          Hashtag Generator
        </h1>

        <p className="character-subtitle">
          Generate hashtags instantly from your
          keywords.
        </p>

        <textarea
          className="character-textarea"
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          placeholder="Example: travel photography india"
        />

        <div className="button-group">
          <button
            className="tool-btn"
            onClick={copyHashtags}
          >
            Copy Hashtags
          </button>
        </div>

        <div
          style={{
            marginTop: "25px",
            background: "#111827",
            padding: "20px",
            borderRadius: "14px",
            color: "white",
            minHeight: "100px",
          }}
        >
          {hashtags.join(" ")}
        </div>
      </div>
    </>
  );
}

export default HashtagCounter;