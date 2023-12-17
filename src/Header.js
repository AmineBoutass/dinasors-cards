// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#2196f3", color: "#fff" }}>
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" color="black">
                Home
              </Typography>
            </Link>

            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography variant="h6" color="black">
                About
              </Typography>
            </Link>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography variant="h6" color="black">
                Contact
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
