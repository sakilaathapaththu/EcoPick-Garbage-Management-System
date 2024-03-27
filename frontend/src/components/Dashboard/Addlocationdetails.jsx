import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import Typography from "@mui/material/Typography";

const Addlocationdetails = () => {
  const [formData, setFormData] = useState({
    startPoint: "",
    endPoint: "",
    date: "",
    garbageType: [],
  });

  const names = ["Compost", "Wast", "Recycle"]; // Define the names array

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/Api/Addcollectingdata/add/collectingdetail",
        formData
      );
      console.log(response.data); // Log the response from the server
      // Reset form after successful submission
      setFormData({
        startPoint: "",
        endPoint: "",
        date: "",
        garbageType: [],
      });
      alert("Collecting detail added successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to add collecting detail");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            component="h1"
            // variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Adding Location Details
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="startPoint"
            required
            fullWidth
            id="startPoint"
            label="Start Point"
            autoFocus
            value={formData.startPoint}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="endPoint"
            label="End Point"
            name="endPoint"
            autoComplete="family-name"
            value={formData.endPoint}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="date"
            label="Date"
            name="date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.date}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Garbage Type</InputLabel>
            <Select
              multiple
              value={formData.garbageType}
              onChange={handleChange}
              inputProps={{ "aria-label": "Select Garbage Type" }}
              name="garbageType"
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add
      </Button>
    </Box>
  );
};

export default Addlocationdetails;
