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
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from '@mui/material/TextField';

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

    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Box sx={{ flexGrow: 1, mt: 15 }}>
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                alt="Profile Image"
                maxWidth="100"
                image={testpic}
                sx={{
                  mt: 5,
                  width: 150, // Adjust the width as needed
                  height: 150, // Adjust the height as needed
                  display: "block", // Ensure the image is treated as a block element
                  ml: "auto",
                  mr: "auto", // Center the image horizontally
                  borderRadius: "50%", // Shape the image as a circle
                  overflow: "hidden", // Hide overflow to maintain shape
                }}
              />

              <CardContent>
                {user && (
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }} // Align text center horizontally
                  >
                    {user.firstName} {user.lastName}
                  </Typography>
                )}
                {user && (
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {user.email}
                  </Typography>
                )}
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button variant="contained" color="success">
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  color="error"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
          {user && (
            <Item>
              
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{}} // Align text center horizontally
                >
                  Welcome, {user.firstName} {user.lastName}
                </Typography>
              

              <TextField
                fullWidth
                id="firstName"
                label="First Name"
                variant="outlined"
                margin="normal"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />

              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                variant="outlined"
                margin="normal"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />

              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                margin="normal"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />

              <TextField
                fullWidth
                id="contactNo"
                label="Contact No"
                variant="outlined"
                margin="normal"
                value={user.contactNo}
                onChange={(e) =>
                  setUser({ ...user, contactNo: e.target.value })
                }
              />

              <TextField
                fullWidth
                id="address"
                label="Address"
                variant="outlined"
                margin="normal"
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
             
            </Item>
            )}
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
