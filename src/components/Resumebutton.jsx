import React from "react";

const ResumeButton = ({ resumeLink }) => {
  // Styles
  const sectionStyle = {
    minHeight: "100vh",
    padding: "100px 20px",
    background: "linear-gradient(135deg, #121212 0%, #1a1a1a 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyle = {
    padding: "15px 30px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  };

  // Render
  return (
    <section style={sectionStyle}>
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
          e.target.style.transform = buttonHoverStyle.transform;
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
          e.target.style.transform = "none";
        }}
      >
        View Resume
      </a>
    </section>
  );
};

export default ResumeButton;