import React from 'react'

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        inset: 0,
        backgroundColor: "#0f172a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <div className="wave-loader">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <p style={{ marginTop: "20px", fontSize: "1.2rem", opacity: 0.8 }}>
        Loading  ...
      </p>
      <style>
        {`
        .wave-loader {
          display: flex;
          gap: 4px;
        }
        .bar {
          width: 6px;
          height: 30px;
          background: #38bdf8;
          animation: wave 1s infinite ease-in-out;
        }
        .bar:nth-child(1) { animation-delay: 0s; }
        .bar:nth-child(2) { animation-delay: 0.1s; }
        .bar:nth-child(3) { animation-delay: 0.2s; }
        .bar:nth-child(4) { animation-delay: 0.3s; }
        .bar:nth-child(5) { animation-delay: 0.4s; }

        @keyframes wave {
          0%, 100% { height: 30px; }
          50% { height: 60px; }
        }
      `}
      </style>
    </div>
  );
}

export default Loader
