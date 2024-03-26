import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import testpic from "../assets/images/profile.jpeg";


export default function Profilepage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      try {
        const { data } = await axios.get(
          `http://localhost:8800/api/auth/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      {user && (
        <div>
          <h2>Welcome, {user.firstName}</h2>
          <p>Email: {user.email}</p>
          {/* Add form fields to update user details */}
        </div>
      )}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Profile Image"
                
                
                maxWidth="100"
                image={testpic}
                sx={{
                 
                
                  
                
                  borderRadius: "100%", // Shape the image as a circle
                  overflow: "hidden", // Hide overflow to maintain shape
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={1}></Grid>

          {/* <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid> */}
        </Grid>
      </Box>

      <Footer />
    </div>
  );
}
