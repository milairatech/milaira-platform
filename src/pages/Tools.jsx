import Navbar from "../components/Navbar";
import ToolCard from "../components/ToolCard";
import { useNavigate } from "react-router-dom";

import { FiType, FiFileText, FiHash, FiImage, FiFile } from "react-icons/fi";

function Tools() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "40px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "48px",
          }}
        >
          All Tools
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <ToolCard
            icon={<FiType />}
            title="Character Counter"
            description="Count characters, words, sentences and more."
            onClick={() => navigate("/character-counter")}
          />

          <ToolCard
            icon={<FiFileText />}
            title="Word Counter"
            description="Analyze words and reading time instantly."
            onClick={() => navigate("/word-counter")}
          />
          <ToolCard
            icon={<FiHash />}
            title="Hashtag Generator"
            description="Create hashtags from your keywords."
            onClick={() => alert("Coming Soon")}
          />

          <ToolCard
            icon={<FiImage />}
            title="Image Compressor"
            description="Coming Soon"
            onClick={() => alert("Coming Soon")}
          />

          <ToolCard
            icon={<FiFile />}
            title="PDF Compressor"
            description="Coming Soon"
            onClick={() => alert("Coming Soon")}
          />
        </div>
      </div>
    </div>
  );
}

export default Tools;
