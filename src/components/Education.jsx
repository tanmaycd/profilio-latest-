import React from "react";

const Education = ({ education }) => {
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

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: "#ffffff",
    position: "relative",
    textAlign: "center",
  };

  const headingUnderlineStyle = {
    content: "''",
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "4px",
    background: "linear-gradient(to right, #00ff88, #007bff)",
    borderRadius: "2px",
  };

  const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
    padding: "0",
    margin: "0",
    listStyleType: "none",
  };

  const itemStyle = {
    padding: "20px",
    border: "1px solid #007bff50",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #1e1e1e 0%, #292929 100%)",
    color: "#ffffff",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const itemHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  };

  // Render
  return (
    <section  id="education" style={sectionStyle}>
      <h2 style={headingStyle}>
        Education
        <span style={headingUnderlineStyle}></span>
      </h2>
      <ul style={listStyle}>
        {education.map((item, index) => (
          <li
            key={index}
            style={itemStyle}
            onMouseOver={(e) => {
              e.target.style.transform = itemHoverStyle.transform;
              e.target.style.boxShadow = itemHoverStyle.boxShadow;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "none";
              e.target.style.boxShadow = "none";
            }}
          >
            <h3>{item.degree}</h3>
            <p><strong>Institution:</strong> {item.institution}</p>
            <p><strong>Year:</strong> {item.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;