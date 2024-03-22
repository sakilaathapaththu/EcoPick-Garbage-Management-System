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
export default function Addfillingdetail() {
  return (
    <Box component="form"  noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <TextField
            autoComplete="given-name"
            name="startPoint"
            required
            fullWidth
            id="startPoint"
            label="Start Point"
            autoFocus
            // value={formData.startPoint}
            // onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            fullWidth
            id="endPoint"
            label="End Point"
            name="endPoint"
            autoComplete="family-name"
            // value={formData.endPoint}
            // onChange={handleChange}
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
            // value={formData.date}
            // onChange={handleChange}
          />
        </Grid>
        
      </Grid>
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add
      </Button>
    </Box>
  )
}
