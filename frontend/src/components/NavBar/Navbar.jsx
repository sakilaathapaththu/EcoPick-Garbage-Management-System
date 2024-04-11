import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"  sx={{ backgroundColor: "#347C2C" }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/Home" style={{color:'white', textDecoration: "none"}}>
          EcoPick
          </Link>
          </Typography>
          
          {user ? (
            <Link to="/Profile" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">{user.firstName}</Button>
            </Link>
          ) : (
            <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
