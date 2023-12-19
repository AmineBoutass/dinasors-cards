// ThemeProvider.js

import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#2196f3", // customize the primary color for light mode
      },
      // Add other customizations for light mode
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976D2", // customize the primary color for dark mode
      },
      // Add other customizations for dark mode
    },
  });

  const muiTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context.theme;
};

const useThemeUpdate = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeUpdate must be used within a ThemeProvider");
  }
  return context.toggleTheme;
};

export { ThemeProvider, useTheme, useThemeUpdate };
