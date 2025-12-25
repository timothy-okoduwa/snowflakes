# Festive Snowfall Component Documentation

## Overview

A lightweight React component that displays an animated snowfall effect during festive periods (December 15 - January 10). The component automatically activates and deactivates based on the current date.

## Features

- ❄️ Automatically activates during festive season (Dec 15 - Jan 10)
- 🎨 Theme-aware (light/dark mode support)
- 🚀 Zero dependencies - pure React
- 💨 50 animated snowflakes with natural drift
- 🎯 Non-interactive (pointer-events: none)
- ♻️ Auto-loops with staggered timing

## Installation

Simply copy the `FestiveSnowfall.jsx` component into your project.

## Basic Usage

### In App.js or Index.js

```jsx
import React from "react";
import FestiveSnowfall from "./components/FestiveSnowfall";

function App() {
  return (
    <div className="App">
      {/* Add snowfall - it handles its own visibility */}
      <FestiveSnowfall />

      {/* Your regular app content */}
      <YourAppContent />
    </div>
  );
}

export default App;
```

### With Theme Support

```jsx
import React, { useState } from "react";
import FestiveSnowfall from "./components/FestiveSnowfall";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      {/* Pass theme prop for color matching */}
      <FestiveSnowfall isDark={isDarkMode} />

      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>

      <YourAppContent />
    </div>
  );
}
```

## Props

| Prop     | Type    | Default | Description                                                |
| -------- | ------- | ------- | ---------------------------------------------------------- |
| `isDark` | boolean | `false` | Controls snowflake color.`true`= white,`false`= light blue |

## How It Works

### Automatic Activation

The component checks the current date and only renders snowflakes between:

- **December 15** through **December 31**
- **January 1** through **January 10**

Outside this period, the component returns `null` and has zero performance impact.

### Snowflake Properties

Each snowflake has randomized:

- **Position** : Random horizontal starting point (0-100%)
- **Size** : 2-5 pixels diameter
- **Duration** : 7-10 seconds fall time
- **Delay** : 0-5 second stagger
- **Opacity** : 0.4-0.8 for natural variance
- **Drift** : ±30px horizontal movement

### Performance

- Uses CSS animations (GPU-accelerated)
- `pointer-events: none` prevents interaction interference
- Minimal React re-renders
- Auto-cleanup when inactive

## Customization

### Change Number of Snowflakes

In the component, find:

```javascript
const numberOfSnowflakes = 50; // Change this value
```

### Adjust Fall Speed

Modify the duration range:

```javascript
duration: Math.random() * 3 + 7, // Currently 7-10 seconds
// For faster: Math.random() * 2 + 4 (4-6 seconds)
// For slower: Math.random() * 5 + 10 (10-15 seconds)
```

### Change Snowflake Colors

```javascript
const snowflakeColor = isDark ? "#FFFFFF" : "#86d8f0";
// Light mode: '#86d8f0' (light blue)
// Dark mode: '#FFFFFF' (white)
```

### Modify Active Period

```javascript
const isFestive =
  (month === 12 && day >= 15) || // December 15-31
  (month === 1 && day <= 10); // January 1-10

// Example: Year-round snowfall
const isFestive = true;

// Example: Only December
const isFestive = month === 12;
```

## Styling Notes

- Component uses inline styles (no CSS file needed)
- `z-index: 9999` ensures snowflakes appear on top
- `position: fixed` keeps snowfall above scrolling content
- `overflow: hidden` on container prevents scrollbars

## Browser Compatibility

Works in all modern browsers that support:

- CSS animations
- CSS transforms
- ES6+ JavaScript

## Troubleshooting

### Snowflakes not appearing?

1. Check the current date is within Dec 15 - Jan 10
2. Check browser console for the activation log: `🎄 Festive snowfall: ACTIVE`
3. Ensure component is imported and rendered in your app

### Snowflakes behind content?

Increase the `zIndex` in the container style:

```javascript
zIndex: 99999, // Even higher
```

### Performance issues?

Reduce the number of snowflakes:

```javascript
const numberOfSnowflakes = 30; // Reduce from 50
```

## Example: Testing Outside Festive Period

To test the effect outside the festive period, temporarily change:

```javascript
// Original
const isFestive = (month === 12 && day >= 15) || (month === 1 && day <= 10);

// For testing (always active)
const isFestive = true;
```

Remember to revert this before deploying!

## License

Free to use and modify for your projects.

---

**Built with ❤️ by Timothy
Happy Holidays! ❄️🎄**
