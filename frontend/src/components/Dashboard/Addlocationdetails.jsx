// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import axios from "axios";
// import Typography from "@mui/material/Typography";
// import { API_BASE_URL } from "../../utils/constants";

// const Addlocationdetails = () => {
//   const [formData, setFormData] = useState({
//     startPoint: "",
//     endPoint: "",
//     date: "",
//     garbageType: [],
//   });

//   const names = ["Organic waste", "Hazardous waste", "Recyclable waste"]; // Define the names array

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/Api/Addcollectingdata/add/collectingdetail`,
//         formData
//       );
//       console.log(response.data); // Log the response from the server
//       // Reset form after successful submission
//       setFormData({
//         startPoint: "",
//         endPoint: "",
//         date: "",
//         garbageType: [],
//       });
//       alert("Collecting detail added successfully!");
//     } catch (error) {
//       console.error("Error:", error.message);
//       alert("Failed to add collecting detail");
//     }
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} noValidate>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Typography
//             component="h1"
//             // variant="h6"
//             color="inherit"
//             noWrap
//             sx={{ flexGrow: 1 }}
//           >
//             Adding Location Details
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             autoComplete="given-name"
//             name="startPoint"
//             required
//             fullWidth
//             id="startPoint"
//             label="Start Point"
//             autoFocus
//             value={formData.startPoint}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             fullWidth
//             id="endPoint"
//             label="End Point"
//             name="endPoint"
//             autoComplete="family-name"
//             value={formData.endPoint}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             fullWidth
//             id="date"
//             label="Date"
//             name="date"
//             type="date"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             value={formData.date}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl fullWidth>
//             <InputLabel>Garbage Type</InputLabel>
//             <Select
//               multiple
//               value={formData.garbageType}
//               onChange={handleChange}
//               inputProps={{ "aria-label": "Select Garbage Type" }}
//               name="garbageType"
//             >
//               {names.map((name) => (
//                 <MenuItem key={name} value={name}>
//                   {name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//       </Grid>
//       <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
//         Add
//       </Button>
//     </Box>
//   );
// };

// export default Addlocationdetails;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { API_BASE_URL } from "../../utils/constants";

const Addlocationdetails = () => {
  const [formData, setFormData] = useState({
    startPoint: "",
    endPoint: "",
    // date: "",
    date: new Date().toISOString().split("T")[0],
    garbageType: [],
  });

  const locations = [
    { name: "Kaduwela", coordinates: "6.929122107099494, 79.9827447585531" },
    { name: "Koswaththa", coordinates: "6.907763319814276, 79.9292102953063" },
    { name: "Pothuhera", coordinates: "7.419931760112256, 80.3282878007621" },
    { name: "Kurunegala", coordinates: "7.485868240115851, 80.36430279599983" },
    { name: "Rajagiriya", coordinates: "6.909246272982172, 79.89611987096255" },
  ];
  const names = ["Organic waste", "Hazardous waste", "Recyclable waste"]; // Define the names array

  useEffect(() => {
    // Automatically set today's date in the date field
    setFormData((prevData) => ({
      ...prevData,
      date: new Date().toISOString().split("T")[0],
    }));
  }, []);

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
      // Extracting coordinates from the locations array based on selected names
      const startPointObject = locations.find(
        (location) => location.name === formData.startPoint
      );
      const endPointObject = locations.find(
        (location) => location.name === formData.endPoint
      );

      const startPointCoordinates = startPointObject.coordinates;
      const endPointCoordinates = endPointObject.coordinates;

      // Extracting latitude and longitude values
      const [startPointLat, startPointLong] = startPointCoordinates.split(", ");
      const [endPointLat, endPointLong] = endPointCoordinates.split(", ");

      const response = await axios.post(
        `${API_BASE_URL}/Api/Addcollectingdata/add/collectingdetail`,
        {
          ...formData,
          startPoint: startPointObject.name,
          endPoint: endPointObject.name,
          startPointLat,
          startPointLong,
          endPointLat,
          endPointLong,
        }
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
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Adding Location Details
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Start Point</InputLabel>
            <Select
              required
              value={formData.startPoint}
              onChange={handleChange}
              name="startPoint"
            >
              {locations.map((location) => (
                <MenuItem key={location.name} value={location.name}>
                  {location.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>End Point</InputLabel>
            <Select
              required
              value={formData.endPoint}
              onChange={handleChange}
              name="endPoint"
            >
              {locations.map((location) => (
                <MenuItem key={location.name} value={location.name}>
                  {location.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            inputProps={{
              readOnly: true, // Make the field read-only
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
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 11 }}>
        Add
      </Button>
    </Box>
  );
};

export default Addlocationdetails;
