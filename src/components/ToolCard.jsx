function ToolCard({
  title,
  icon,
  description,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background:
          "linear-gradient(145deg,#0f172a,#111827)",
        border: "1px solid #1e293b",
        borderRadius: "18px",
        padding: "22px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";
      }}
    >
      <div
        style={{
          fontSize: "28px",
          color: "#60a5fa",
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "white",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "14px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default ToolCard;