// Header.js

import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useTheme, useThemeUpdate } from "./ThemeProvider";

function Header() {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme === "light" ? "#2196f3" : "#1a1a1a",
          color: theme === "light" ? "#fff" : "#ddd",
        }}
      >
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                color="black"
                sx={{ "&:hover": { color: "#ff4081" } }}
              >
                Home
              </Typography>
            </Link>

            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                color="white"
                sx={{ "&:hover": { color: "#ff4081" } }}
              >
                About
              </Typography>
            </Link>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                color="white"
                sx={{ "&:hover": { color: "#ff4081" } }}
              >
                Contact
              </Typography>
             
            </Link>
            
            <Box
  sx={{
    display: "flex",
    gap: 2,
    transition: "margin 0.3s ease-in-out",
    marginLeft: theme === "dark" ? "auto" : 0,
    marginRight: theme === "dark" ? 0 : "auto",
  }}
>
  <IconButton color="inherit" onClick={handleChange}>
    {theme === "dark" ? <WbSunnyIcon /> : <Brightness4Icon />}
  </IconButton>
</Box>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
