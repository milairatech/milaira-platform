import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  FiType,
  FiFileText,
  FiHash,
  FiImage,
  FiFile,
} from "react-icons/fi";

function Navbar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const tools = [
    {
      name: "Character Counter",
      path: "/character-counter",
      icon: <FiType />,
    },
    {
      name: "Word Counter",
      path: "#",
      icon: <FiFileText />,
    },
    {
      name: "Hashtag Generator",
      path: "#",
      icon: <FiHash />,
    },
    {
      name: "Image Compressor",
      path: "#",
      icon: <FiImage />,
    },
    {
      name: "PDF Compressor",
      path: "#",
      icon: <FiFile />,
    },
  ];

  const filteredTools = tools.filter((tool) =>
    tool.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleToolClick = (tool) => {
    setSearch("");

    if (tool.path === "#") {
      alert("Coming Soon 🚀");
      return;
    }

    navigate(tool.path);
  };

  return (
    <nav
      style={{
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        borderBottom: "1px solid #1f2937",
        background: "#020617",
        position: "relative",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "28px",
          fontWeight: "800",
          background:
            "linear-gradient(90deg,#ffffff,#60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        MILAIRA
      </Link>

      <div
        style={{
          position: "relative",
        }}
      >
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            width: "280px",
            padding: "10px 14px",
            borderRadius: "10px",
            border: "1px solid #334155",
            background: "#111827",
            color: "white",
            outline: "none",
            fontSize: "14px",
          }}
        />

        {search &&
          filteredTools.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "46px",
                left: 0,
                width: "100%",
                background: "#111827",
                border: "1px solid #1f2937",
                borderRadius: "10px",
                overflow: "hidden",
                zIndex: 9999,
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              {filteredTools.map((tool) => (
                <div
                  key={tool.name}
                  onClick={() =>
                    handleToolClick(tool)
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px",
                    cursor: "pointer",
                    color: "white",
                    borderBottom:
                      "1px solid #1f2937",
                  }}
                >
                  {tool.icon}

                  <span>
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Link
          to="/tools"
          style={navLinkStyle}
        >
          Tools
        </Link>

        <Link
          to="/about"
          style={navLinkStyle}
        >
          About
        </Link>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  textDecoration: "none",
  color: "#cbd5e1",
  fontSize: "16px",
  fontWeight: "600",
};

export default Navbar;