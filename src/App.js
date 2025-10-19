import React from "react";

function App() {
  return (
    <div style={{
      backgroundColor: "#0b1220",
      color: "white",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{fontSize: "2.2rem"}}>🎈 Surprise Layer 1 🎈</h1>
      <p style={{maxWidth: 600}}>
        A tiny hint: keep clicking — the real surprise is hidden in layers. Ready?
      </p>
      <a
        href="https://layer2-ten.vercel.app/"
        style={{
          backgroundColor: "#ff6b95",
          color: "white",
          padding: "12px 22px",
          borderRadius: "12px",
          textDecoration: "none",
          fontSize: "18px",
          marginTop: "18px"
        }}
      >
        Open Next Layer 🎉
      </a>
    </div>
  );
}

export default App;
