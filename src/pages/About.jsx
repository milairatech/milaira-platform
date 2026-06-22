import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              marginBottom: "30px",
              fontWeight: "800",
              background:
                "linear-gradient(90deg,#ffffff,#60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Milaira
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              color: "#94a3b8",
              marginBottom: "30px",
            }}
          >
            Built for creators, developers and
            businesses.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#94a3b8",
              marginBottom: "25px",
            }}
          >
            Milaira provides fast, simple and
            privacy-friendly tools that help you
            work smarter and save time.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#94a3b8",
            }}
          >
            Our mission is to create beautifully
            designed utilities that solve everyday
            problems instantly.
          </p>

          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                background: "#111827",
                padding: "20px 30px",
                borderRadius: "16px",
                border: "1px solid #1f2937",
              }}
            >
              Fast Tools
            </div>

            <div
              style={{
                background: "#111827",
                padding: "20px 30px",
                borderRadius: "16px",
                border: "1px solid #1f2937",
              }}
            >
              Privacy First
            </div>

            <div
              style={{
                background: "#111827",
                padding: "20px 30px",
                borderRadius: "16px",
                border: "1px solid #1f2937",
              }}
            >
              Free Forever
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;