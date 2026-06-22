import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",
        padding: "30px 20px",
        borderTop: "1px solid #1f2937",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <Link
          to="/privacy-policy"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
          }}
        >
          Privacy Policy
        </Link>

        <span style={{ color: "#475569" }}>•</span>

        <Link
          to="/terms-of-service"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
          }}
        >
          Terms of Service
        </Link>

        <span style={{ color: "#475569" }}>•</span>

        <Link
          to="/contact"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
          }}
        >
          Contact
        </Link>
      </div>

      <p
        style={{
          color: "#64748b",
          fontSize: "14px",
          marginBottom: "8px",
        }}
      >
        © 2026 Milaira. All rights reserved.
      </p>

      <p
        style={{
          color: "#475569",
          fontSize: "13px",
        }}
      >
        Built with ❤️ by Milaira
      </p>
    </footer>
  );
}

export default Footer;