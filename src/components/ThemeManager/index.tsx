import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';

const defaultState = {
  isDark: false,
  toggleDark: () => undefined,
};

export const ThemeManagerContext = createContext(defaultState);

const ThemeManager = ({ children, lightTheme, darkTheme }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = (value?: boolean) => {
    const toggledTheme = value ?? !isDark;
    setIsDark(toggledTheme);
    localStorage.setItem("dark", JSON.stringify(toggledTheme));
  };

   useEffect(() => {
     const themeFromLocalStorage = localStorage.getItem("dark");

     if (typeof themeFromLocalStorage === "string") {
       setIsDark(JSON.parse(themeFromLocalStorage));
     } else {
       setIsDark(false);
     }
   }, []);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeManagerContext.Provider
      value={{
        toggleDark,
        isDark,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeManagerContext.Provider>
  );
};

export default ThemeManager;
