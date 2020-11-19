import { createContext, useContext, useState } from "react";
import { dark, light } from "../utils/theme";

export const ThemeContext = createContext(light);

export const useThemeValue = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);
  const [isDark, toggleIsDark] = useState(false);

  const toggleTheme = () => {
    if (isDark) {
      setTheme(light);
      toggleIsDark(false);
    } else {
      setTheme(dark);
      toggleIsDark(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
