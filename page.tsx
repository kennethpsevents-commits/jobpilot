export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#0f172a",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#38bdf8" }}>
        🚀 Welcome to JobPilot
      </h1>
      <p style={{ fontSize: "1.5rem", maxWidth: "600px", textAlign: "center" }}>
        The smartest way to find jobs, connect with employers, and build your future.
      </p>
      <button style={{
        marginTop: "2rem",
        padding: "1rem 2rem",
        fontSize: "1.2rem",
        backgroundColor: "#38bdf8",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}>
        Get Started
      </button>
    </main>
  );
}
