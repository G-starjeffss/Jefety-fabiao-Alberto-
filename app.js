:root {
  --bg: #081421;
  --bg-soft: #0d1d2d;
  --panel: rgba(12, 20, 33, 0.9);
  --panel-border: rgba(148, 163, 184, 0.2);
  --text: #edf6ff;
  --muted: #a9bbcf;
  --primary: #71e1b2;
  --primary-strong: #45c98d;
  --warning: #f7c35b;
  --danger: #ff7d7d;
  --shadow: 0 20px 50px rgba(2, 6, 23, 0.35);
  --input-bg: rgba(15, 23, 42, 0.5);
}

body.light {
  --bg: #ebf4ff;
  --bg-soft: #dfeaf9;
  --panel: rgba(255, 255, 255, 0.9);
  --panel-border: rgba(15, 23, 42, 0.08);
  --text: #162534;
  --muted: #53677c;
  --primary: #168f64;
  --primary-strong: #117456;
  --warning: #b67a00;
  --danger: #d84d4d;
  --shadow: 0 16px 45px rgba(15, 23, 42, 0.12);
  --input-bg: rgba(148, 163, 184, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(113, 225, 178, 0.14), transparent 28%), linear-gradient(135deg, var(--bg), var(--bg-soft));
  color: var(--text);
  font-family: Inter, "Segoe UI", sans-serif;
  transition: background 0.25s ease, color 0.25s ease;
}

button,
input,
select {
  font: inherit;
}

.app-shell {
  width: min(960px, calc(100% - 24px));
  margin: 0 auto;
  padding: 28px 0 40px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
}

.panel {
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 22px;
  backdrop-filter: blur(10px);
}

.todo-form {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(150px, 1fr) minmax(165px, 1fr) auto;
  gap: 12px;
  align-items: end;
}

.field {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 700;
}

input,
select,
button {
  border-radius: 12px;
}

input,
select {
  width: 100%;
  border: 1px solid var(--panel-border);
  background: var(--input-bg);
  color: var(--text);
  padding: 12px 14px;
}

.primary-btn,
.secondary-btn,
.theme-toggle,
.filter-btn,
.check-btn,
.delete-btn {
  border: 0;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-btn,
.secondary-btn,
.theme-toggle,
.filter-btn {
  min-height: 48px;
  padding: 0 16px;
  font-weight: 700;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #08131d;
}

.secondary-btn,
.theme-toggle,
.filter-btn {
  background: rgba(148, 163, 184, 0.08);
  color: var(--text);
  border: 1px solid var(--panel-border);
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 20px 0 14px;
  flex-wrap: wrap;
}

.stats {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 0.92rem;
}

.filters {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  min-height: 36px;
  padding: 0 12px;
  border-radius: 10px;
  opacity: 0.8;
}

.filter-btn.active {
  opacity: 1;
  background: rgba(113, 225, 178, 0.12);
  border-color: rgba(113, 225, 178, 0.45);
  color: var(--primary);
}

.list-shell {
  border: 1px solid var(--panel-border);
  border-radius: 18px;
  overflow: hidden;
}

.todo-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.todo-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  gap: 14px;
  align-items: center;
  padding: 16px 18px;
  border-bottom: 1px solid var(--panel-border);
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item.completed .task-text {
  text-decoration: line-through;
  color: var(--muted);
}

.check-btn {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid var(--panel-border);
  background: transparent;
  position: relative;
}

.todo-item.completed .check-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  border-color: transparent;
}

.todo-item.completed .check-btn::after {
  content: "";
  width: 9px;
  height: 9px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #08131d;
}

.task-main {
  min-width: 0;
}

.task-text {
  font-weight: 700;
  word-break: break-word;
}

.task-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.78rem;
}

.priority-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.priority-low {
  background: rgba(113, 225, 178, 0.12);
  color: var(--primary);
}

.priority-medium {
  background: rgba(247, 195, 91, 0.12);
  color: var(--warning);
}

.priority-high {
  background: rgba(255, 125, 125, 0.12);
  color: var(--danger);
}

.delete-btn {
  background: rgba(255, 125, 125, 0.12);
  color: var(--danger);
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid rgba(255, 125, 125, 0.2);
}

.footer-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

.empty-state {
  padding: 24px 18px;
  text-align: center;
  color: var(--muted);
}

@media (max-width: 680px) {
  .todo-form {
    grid-template-columns: 1fr;
  }

  .todo-item {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .delete-btn {
    grid-column: 2;
    justify-self: end;
  }

  .topbar,
  .toolbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
