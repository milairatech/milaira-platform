import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return (
    <>
      <nav
        style={{
          minHeight: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          borderBottom: "1px solid #1f2937",
          background: "#020617",
          position: "sticky",
          top: 0,
          zIndex: 1000,
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

        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "25px",
              alignItems: "center",
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
        )}

        {isMobile && (
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div
          style={{
            background: "#0f172a",
            borderBottom:
              "1px solid #1f2937",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Link
            to="/"
            style={mobileLink}
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Home
          </Link>

          <Link
            to="/tools"
            style={mobileLink}
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Tools
          </Link>

          <Link
            to="/about"
            style={mobileLink}
            onClick={() =>
              setMenuOpen(false)
            }
          >
            About
          </Link>
        </div>
      )}
    </>
  );
}

const navLinkStyle = {
  textDecoration: "none",
  color: "#cbd5e1",
  fontSize: "16px",
  fontWeight: "600",
};

const mobileLink = {
  textDecoration: "none",
  color: "white",
  fontSize: "16px",
};

export default Navbar;