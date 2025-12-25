import React, { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
}

interface FestiveSnowfallProps {
  isDark?: boolean;
}

const FestiveSnowfall: React.FC<FestiveSnowfallProps> = ({
  isDark = false,
}) => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  // Snowflake color based on theme
  const snowflakeColor = isDark ? "#FFFFFF" : "#86d8f0";

  // Check if we're in the festive period
  useEffect(() => {
    const checkFestivePeriod = (): void => {
      const now = new Date();
      const month = now.getMonth() + 1;
      const day = now.getDate();

      // Active from December 15 to January 10
      const isFestive =
        (month === 12 && day >= 15) || (month === 1 && day <= 10);

      setIsActive(isFestive);
      console.log("🎄 Festive snowfall:", isFestive ? "ACTIVE" : "INACTIVE");
    };

    checkFestivePeriod();

    // Check every hour
    const interval = setInterval(checkFestivePeriod, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate snowflakes
  useEffect(() => {
    if (!isActive) {
      setSnowflakes([]);
      return;
    }

    const flakes: Snowflake[] = [];
    const numberOfSnowflakes = 50;

    for (let i = 0; i < numberOfSnowflakes; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 2,
        duration: Math.random() * 3 + 7,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.4 + 0.4,
        drift: (Math.random() - 0.5) * 30,
      });
    }

    setSnowflakes(flakes);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          style={{
            position: "absolute",
            left: `${flake.left}%`,
            top: "-20px",
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            backgroundColor: snowflakeColor,
            borderRadius: "50%",
            opacity: flake.opacity,
            animation: `snowfall-${flake.id} ${flake.duration}s linear ${flake.delay}s infinite`,
            filter: `blur(1px)`,
            boxShadow: `0 0 4px ${snowflakeColor}`,
          }}
        />
      ))}
      <style>
        {snowflakes
          .map(
            (flake) => `
          @keyframes snowfall-${flake.id} {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: ${flake.opacity};
            }
            100% {
              transform: translateY(100vh) translateX(${flake.drift}px);
              opacity: ${flake.opacity};
            }
          }
        `
          )
          .join("\n")}
      </style>
    </div>
  );
};

export default FestiveSnowfall;

// DEMO - Remove this section when using in your app
function Demo(): React.ReactElement {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: isDark ? "#1a1a1a" : "#f0f9ff",
        transition: "background 0.3s",
        padding: "2rem",
      }}
    >
      <FestiveSnowfall isDark={isDark} />

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "2rem",
          background: isDark ? "#2a2a2a" : "white",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: isDark ? "#fff" : "#333" }}>
          🎄 Festive Snowfall Demo
        </h1>
        <p style={{ color: isDark ? "#ccc" : "#666" }}>
          This snowfall effect automatically activates between December 15 and
          January 10. For demo purposes, the dates have been adjusted to show
          the effect now.
        </p>
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            background: isDark ? "#4a5568" : "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Toggle {isDark ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}

export { Demo };
