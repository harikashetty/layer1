import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      window.location.href = "https://layer2-ten.vercel.app/";
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

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
      <h1 style={{ fontSize: "2.2rem", opacity: 0, animation: "fadeIn 1s forwards" }}>🎈 Surprise Layer 1 🎈</h1>
      <p style={{ maxWidth: 600, marginTop: "15px", opacity: 0, animation: "fadeIn 1s forwards 0.5s" }}>
        {count > 0 ? `Next in ${count}…` : "Opening next layer…"}
      </p>

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;
