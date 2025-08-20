export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      background: "#0f172a",
      color: "#ffffff",
      minHeight: "100vh",
      margin: 0,
      padding: 0
    }}>
      
      {/* Top Navigatie */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "#1e293b",
        position: "sticky",
        top: 0
      }}>
        <h2 style={{ color: "#38bdf8" }}>WeAreJobPilot</h2>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#" style={{ color: "#ffffff", textDecoration: "none" }}>Home</a>
          <a href="#jobs" style={{ color: "#ffffff", textDecoration: "none" }}>Vacatures</a>
          <a href="#about" style={{ color: "#ffffff", textDecoration: "none" }}>Over ons</a>
          <a href="#contact" style={{ color: "#ffffff", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        textAlign: "center",
        padding: "2rem"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#38bdf8" }}>
          Ontdek jouw nieuwe baan
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "2rem" }}>
          Bouw je profiel, ontdek vacatures en connect direct met bedrijven. 
          De slimme manier om werk en talent te verbinden.
        </p>
        <a href="#jobs" style={{
          padding: "12px 24px",
          background: "#38bdf8",
          color: "#0f172a",
          borderRadius: "8px",
          fontWeight: "bold",
          textDecoration: "none"
        }}>
          Bekijk Vacatures
        </a>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#38bdf8" }}>Over ons</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto" }}>
          WeAreJobPilot is het platform waar kandidaten en werkgevers elkaar vinden. 
          Met onze AI-tool (powered by Grok) helpen wij jou sneller aan een match.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "4rem 2rem", textAlign: "center", background: "#1e293b" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#38bdf8" }}>Neem contact op</h2>
        <p>Heb je vragen? Mail ons via:</p>
        <a href="mailto:info@wearejobpilot.com" style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "12px 24px",
          background: "#38bdf8",
          color: "#0f172a",
          borderRadius: "8px",
          fontWeight: "bold",
          textDecoration: "none"
        }}>
          info@wearejobpilot.com
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "1rem",
        background: "#0f172a",
        textAlign: "center",
        fontSize: "0.9rem",
        borderTop: "1px solid #334155"
      }}>
        © {new Date().getFullYear()} WeAreJobPilot – Alle rechten voorbehouden.
      </footer>
    </main>
  );
}
