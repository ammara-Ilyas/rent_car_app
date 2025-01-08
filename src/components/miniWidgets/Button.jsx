import React from "react";

const Button = () => {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ position: "relative" }}>
        {/* Button */}
        <button
          style={{
            position: "relative",
            zIndex: 10,
            padding: "10px 20px",
            color: "white",
            backgroundColor: "#1a1a1a",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Hover me
        </button>

        {/* Animated Border */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "8px",
            border: "2px solid transparent",
            background:
              "linear-gradient(90deg, red, orange, yellow, green, blue, purple)",
            backgroundSize: "200% 200%",
            zIndex: 0,
            animation: "border-move 3s linear infinite",
          }}
        ></span>
      </div>

      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes border-move {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Button;
