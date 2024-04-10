import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Lottie from "react-lottie";
import Registerimage from "../assets/animation/register.json";

const defaultTheme = createTheme();

export default function Signup() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
  return (
   
   
    <Grid
      container
      spacing={2}
      sx={{ height: "100vh",mt:'5%' }}
    >
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
              animationData: Registerimage,
            }}
          />
        </Box>
      </Grid>
   
      < Grid Container item xs={12} md={6} sx={{ bgcolor: "#DEFDE0" }} component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
    <TextField
      sx={{ width: "70%", ml: { xs: "17%", sm: "35%" } }} // Adjusted margin left for xs view
      autoComplete="given-name"
      name="firstName"
      required
      id="firstName"
      label="First Name"
      autoFocus
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      sx={{ width: "70%", ml: { xs: "17%", sm: "3%" } }} // Adjusted margin left for xs view
      required
      id="lastName"
      label="Last Name"
      name="lastName"
      autoComplete="family-name"
    />
  </Grid>
            <Grid item xs={12}>
              <TextField
              sx={{width:"70%",ml:"17%"}}
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              sx={{width:"70%",ml:"17%"}}
                required
                fullWidth
                id="contactno"
                label="Contactno"
                name="contactno"
                autoComplete="contactno"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              sx={{width:"70%",ml:"17%"}}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              sx={{width:"70%",ml:"17%"}}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              sx={{width:"70%",ml:"17%"}}
                required
                fullWidth
                name="re-password"
                label="Rle-Password"
                type="re-password"
                id="re-password"
                autoComplete="re-new-password"
              />
            </Grid>
            <Grid item xs={12}  sx={{width:"70%",ml:"17%"}}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I ."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,width:"70%",ml:"17%" }}
            
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end" >
            <Grid item >
              <Link href="/Login" variant="body2" >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
      </Grid>
    </Grid>
    
 
  )
}
