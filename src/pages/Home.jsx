import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <section
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(48px, 8vw, 72px)",
              fontWeight: "800",
              marginBottom: "12px",
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
              fontSize: "clamp(16px,3vw,20px)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Fast, simple and privacy-first productivity tools.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
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
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;