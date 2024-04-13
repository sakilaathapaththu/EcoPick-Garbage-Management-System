
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import { API_BASE_URL } from "../utils/constants";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      try {
        const { data } = await axios.get(
          `${API_BASE_URL}/api/auth/profile/${userId}`,
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      const response = await axios.put(
        `${API_BASE_URL}/api/auth/update/profile/${userId}`,
        user,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data);
      alert("User details updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user details");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/Login");
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      await axios.delete(`${API_BASE_URL}/api/auth/delete/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/Signup");
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Failed to delete account");
    }
  };

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
              {user && user.profileImage && ( // Check if user and profileImage exist
                <CardMedia
                  component="img"
                  alt="Profile Image"
                  maxWidth="100"
                  // Construct the URL to the image
                  image={`${API_BASE_URL}/${user.profileImage}`} // Use the correct path to the image
                  sx={{
                    mt: 5,
                    width: 150,
                    height: 150,
                    display: "block",
                    ml: "auto",
                    mr: "auto",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                />
              )}
              <CardContent>
                {user && (
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
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
                <input
                  accept="image/*"
                  id="profile-image-input"
                  type="file"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  color="error"
                  onClick={handleDeleteAccount} // Call handleDeleteAccount function
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
                  sx={{ textAlign: "center" }}
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
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
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
                  onChange={(e) =>
                    setUser({ ...user, address: e.target.value })
                  }
                />
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleUpdate}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogout}
                  sx={{ ml: 2 }}
                >
                  Logout
                </Button>
              </Item>
            )}
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}

