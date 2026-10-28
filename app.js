:root {
  --bg: #071522;
  --panel: rgba(13, 24, 38, 0.9);
  --panel-border: rgba(148, 163, 184, 0.2);
  --text: #edf6ff;
  --muted: #a4b8cc;
  --accent: #69d9b1;
  --accent-strong: #30b88b;
  --shadow: 0 18px 40px rgba(3, 7, 18, 0.35);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Inter, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top, rgba(105, 217, 177, 0.18), transparent 30%),
    linear-gradient(135deg, #071522, #0d1b2d 45%, #071522);
  color: var(--text);
}

.app-shell {
  width: min(1100px, calc(100% - 24px));
  padding: 28px 0 40px;
}

.header {
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--muted);
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.clock-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.clock-card {
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 22px;
  padding: 22px 18px;
  box-shadow: var(--shadow);
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.primary-card {
  background: linear-gradient(180deg, rgba(105, 217, 177, 0.12), rgba(13,24,38,0.9));
  border-color: rgba(105, 217, 177, 0.35);
}

.card-label {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.time-value {
  margin-top: 18px;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.date-value {
  margin-top: 10px;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 560px) {
  .clock-grid {
    grid-template-columns: 1fr;
  }

  .clock-card {
    min-height: 140px;
  }
}
