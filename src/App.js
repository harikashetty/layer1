import React, { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  const [attempts, setAttempts] = useState(0); // Track number of tries
  const maxAttempts = 5;

  const handleNextLayer = (e) => {
    e.preventDefault();

    if (attempts >= maxAttempts) {
      Swal.fire({
        title: "😢 No more chances!",
        text: "You’ve used all 5 attempts. Try again later!",
        icon: "error",
        background: "#1e1e2f",
        color: "#fff",
        confirmButtonColor: "#ff6b95",
      });
      return;
    }

    Swal.fire({
      title: "💭 Where did we meet?",
      input: "text",
      inputPlaceholder: "Type your answer here...",
      confirmButtonText: "Submit 💌",
      showCancelButton: true,
      cancelButtonText: "Cancel ❌",
      background: "#1e1e2f",
      color: "#fff",
      confirmButtonColor: "#ff6b95",
      cancelButtonColor: "#555",
      backdrop: `
        rgba(0,0,0,0.6)
        url("https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif")
        center top
        no-repeat
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        const answer = result.value ? result.value.trim().toLowerCase() : "";

        if (answer === "inter") {
          Swal.fire({
            title: "🎉 Yay! That’s correct!",
            text: "Let’s unlock the next surprise layer 💝",
            icon: "success",
            background: "#1e1e2f",
            color: "#fff",
            confirmButtonColor: "#ff6b95",
            confirmButtonText: "Next Layer 🚀",
          }).then(() => {
            window.location.href = "https://layer2-ten.vercel.app/";
          });
        } else {
          const newAttempts = attempts + 1;
          setAttempts(newAttempts);

          if (newAttempts < maxAttempts) {
            Swal.fire({
              title: "❌ Oops!",
              text: `Wrong answer! You have ${maxAttempts - newAttempts} attempts left.`,
              icon: "error",
              background: "#1e1e2f",
              color: "#fff",
              confirmButtonColor: "#ff6b95",
            });
          } else {
            Swal.fire({
              title: "🚫 Out of chances!",
              text: "You’ve used all 5 attempts. Better luck next time 💔",
              icon: "warning",
              background: "#1e1e2f",
              color: "#fff",
              confirmButtonColor: "#ff6b95",
            });
          }
        }
      }
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#0b1220",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.2rem" }}>🎈 Surprise Layer 1 🎈</h1>
      <p style={{ maxWidth: 600 }}>
        A tiny hint: keep clicking — the real surprise is hidden in layers. Ready?
      </p>

      <a
        href="https://layer2-ten.vercel.app/"
        onClick={handleNextLayer}
        style={{
          backgroundColor: "#ff6b95",
          color: "white",
          padding: "12px 22px",
          borderRadius: "12px",
          textDecoration: "none",
          fontSize: "18px",
          marginTop: "18px",
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: "0 0 15px rgba(255,107,149,0.6)",
          opacity: attempts >= maxAttempts ? 0.6 : 1,
          pointerEvents: attempts >= maxAttempts ? "none" : "auto",
        }}
      >
        Open Next Layer 🎉
      </a>
    </div>
  );
}

export default App;
