import React, { useState } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../assets/animation/Animation - 1712742585337.json";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { API_BASE_URL } from "../utils/constants";

import Paper from "@mui/material/Paper";

const defaultTheme = createTheme();

export default function Loginpage() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data.email === "admin@gmail.com" && data.password === "admin") {
        // Correct login, redirect to Dashboard
        window.location = "/Dashboard";
      } else {
        const url = `${API_BASE_URL}/api/auth`;
        const { data: res } = await axios.post(url, data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        // Correct login, redirect to Home
        window.location = "/Home";
      }
    } catch (error) {
      if (error.response.status === 401) {
        // Incorrect username or password, display popup
        setShowPopup(true);
      } else {
        setError(error.response.data.message);
      }
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Grid container spacing={2} sx={{ height: "100vh" }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
          />
        </Box>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={6}
        sx={{ bgcolor: "#DEFDE0" }}
        component={Paper}
        elevation={6}
        square
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: "30px" }}>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ width: "70%", ml: "17%" }}
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                value={data.email}
              />
              <TextField
                margin="normal"
                required
                sx={{ width: "70%", ml: "17%" }}
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                value={data.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#347C2C", width: "70%", ml: "17%" }}
              >
                Sign In
              </Button>
            </form>
            <Grid sx={{ ml: "17%" }} item>
              <Link href="/Signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Grid>
      {showPopup && (
        <Popup message="Incorrect username or password" onClose={handleClosePopup} />
      )}
    </Grid>
  );
}

// Popup component for displaying messages
function Popup({ message, onClose }) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {message}
      </Typography>
      <Button variant="contained" onClick={onClose}>
        Close
      </Button>
    </Box>
  );
}
