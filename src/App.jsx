import { useState } from "react";
import "./App.css";

// Reusable button used for every action in the app
function Button({ label, onClick, variant }) {
  return (
    <button type="button" className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const isDarkMode = theme === "dark";

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () => setCount((prevCount) => prevCount - 1);
  const handleReset = () => setCount(0);
  const handleThemeToggle = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <div className={`app ${theme}`}>
      <main className="card">
        <header className="card-header">
          <h1 className="title">Counter App</h1>
          <Button
            variant="theme"
            onClick={handleThemeToggle}
            label={isDarkMode ? "☀ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
          />
        </header>

        <p className="mode-label">
          Current theme: <strong>{isDarkMode ? "Dark Mode" : "Light Mode"}</strong>
        </p>

        <section className="display" aria-live="polite">
          <span className="display-label">Current value</span>
          <span className="count">{count}</span>
        </section>

        <div className="button-group">
          <Button variant="decrement" onClick={handleDecrement} label=" Decrement" />
          <Button variant="reset" onClick={handleReset} label="Reset" />
          <Button variant="increment" onClick={handleIncrement} label=" Increment" />
        </div>
      </main>
    </div>
  );
}

export default App;