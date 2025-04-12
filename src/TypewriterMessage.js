import React, { useEffect, useState } from "react";

const TypewriterMessage = ({ text, speed = 100 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p style={{
      marginTop: "2rem",
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#FFD54F",
      textAlign: "center",
      whiteSpace: "pre-wrap"
    }}>
      {displayed}
      <span style={{ opacity: 0.7 }}>|</span>
    </p>
  );
};

export default TypewriterMessage;