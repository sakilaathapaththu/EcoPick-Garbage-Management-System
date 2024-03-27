import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";

export default function Addfillingdetail() {
  const [formData, setFormData] = useState({
    totalCapacity: 10000,
    filledCapacity: "",
    emptyCapacity: 10000
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    if (name === 'filledCapacity') {
      setFormData(prevData => ({
        ...prevData,
        emptyCapacity: formData.totalCapacity - value
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/Api/Fillingdetails/add/fillingdetail`,
        formData
      );
      console.log(response.data); // Log the response from the server
      // Reset form after successful submission
      setFormData({
        totalCapacity: 10000,
        filledCapacity: "",
        emptyCapacity: 10000
      });
      alert("Filling detail added successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to add filling detail");
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
              component="h1"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Adding Filling Details
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              fullWidth
              id="totalCapacity"
              label="Total Capacity"
              name="totalCapacity"
              type="number"
              disabled
              value={formData.totalCapacity}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              fullWidth
              id="filledCapacity"
              label="Filled Capacity"
              name="filledCapacity"
              type="number"
              value={formData.filledCapacity}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="emptyCapacity"
              label="Empty Capacity"
              name="emptyCapacity"
              type="number"
              value={formData.emptyCapacity}
              disabled
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Add
        </Button>
    </Box>
  )
}
