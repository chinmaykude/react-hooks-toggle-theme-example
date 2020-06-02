import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={theme === "light" ? `dark-theme` : `light-theme`}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
};

export default Button;
