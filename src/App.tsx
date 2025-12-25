import { useState } from "react";
import "./App.css";
import FestiveSnowfall from "./components/FestiveSnowfall";

function App() {
  const [daysUntilNewYear, setDaysUntilNewYear] = useState(() => {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = newYear.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  });

  return (
    <>
      <FestiveSnowfall isDark={true} />
      <div>
        <h1 style={{ fontSize: "3rem", margin: "2rem 0 1rem" }}>
          🎄 Happy Holidays!! 🎅
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Wishing you joy, peace, and wonderful memories this season
        </p>
      </div>

      <div className="card">
        <h2>🎁 Days Until New Year</h2>
        <div
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            margin: "1rem 0",
            color: "#61dafb",
          }}
        >
          {daysUntilNewYear}
        </div>
        <p style={{ fontSize: "1.1rem" }}>
          Make the most of these festive days! ✨
        </p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>🌟 Holiday Wishes</h3>
        <p style={{ maxWidth: "600px", margin: "1rem auto" }}>
          May your holidays be filled with warmth, laughter, and the company of
          loved ones. Here's to a wonderful end of the year and an even better
          beginning to the next! 🎊
        </p>
      </div>

      <p className="read-the-docs" style={{ marginTop: "3rem" }}>
        Season's Greetings from our family to yours! ❤️
      </p>
    </>
  );
}

export default App;
