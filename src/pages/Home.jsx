import Navbar from "../components/Navbar";
import ToolCard from "../components/ToolCard";
import { useNavigate } from "react-router-dom";

import {
  FiType,
  FiFileText,
  FiHash,
  FiImage,
  FiFile,
  FiGrid,
} from "react-icons/fi";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <section
        style={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(42px, 10vw, 64px)",
            fontWeight: "800",
            marginBottom: "10px",
            background:
              "linear-gradient(90deg,#ffffff,#60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MILAIRA
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "clamp(14px,4vw,18px)",
            marginBottom: "40px",
            maxWidth: "700px",
            lineHeight: "1.6",
          }}
        >
          Fast, simple and privacy-first productivity tools.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "1100px",
            width: "100%",
          }}
        >
          <ToolCard
            icon={<FiType />}
            title="Character Counter"
            description="Professional text analysis with instant character and word insights."
            onClick={() =>
              navigate("/character-counter")
            }
          />

          <ToolCard
            icon={<FiFileText />}
            title="Word Counter"
            description="Advanced writing statistics for content creators and professionals."
            onClick={() =>
              navigate("/word-counter")
            }
          />

          <ToolCard
            icon={<FiHash />}
            title="Hashtag Generator"
            description="Generate trending hashtags for social media growth."
            onClick={() =>
              alert("Coming Soon")
            }
          />

          <ToolCard
            icon={<FiImage />}
            title="Image Compressor"
            description="Smart image optimization for faster websites and applications."
            onClick={() =>
              alert("Coming Soon")
            }
          />

          <ToolCard
            icon={<FiFile />}
            title="PDF Compressor"
            description="Compress documents securely while preserving visual quality."
            onClick={() =>
              alert("Coming Soon")
            }
          />

          <ToolCard
            icon={<FiGrid />}
            title="More Tools"
            description="New productivity tools are continuously being added to Milaira."
            onClick={() =>
              navigate("/tools")
            }
          />
        </div>
      </section>
    </div>
  );
}

export default Home;