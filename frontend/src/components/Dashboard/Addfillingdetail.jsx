// import React, { useState,useEffect } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import axios from "axios";
// import { API_BASE_URL } from "../../utils/constants";

// export default function Addfillingdetail() {
//   const [formData, setFormData] = useState({
//     totalCapacity: 10000,
//     filledCapacity: "",
//     emptyCapacity: 10000,
//     date: new Date().toISOString().split("T")[0],
//   });
//   useEffect(() => {
//     // Automatically set today's date in the date field
//     setFormData((prevData) => ({
//       ...prevData,
//       date: new Date().toISOString().split("T")[0],
//     }));
//   }, []);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     if (name === "filledCapacity") {
//       setFormData((prevData) => ({
//         ...prevData,
//         emptyCapacity: formData.totalCapacity - value,
//       }));
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/Api/Fillingdetails/add/fillingdetail`,
//         {
//           ...formData, // Include all form data
//           date: formData.date, // Include the date field separately
//         }
//       );
//       console.log(response.data); // Log the response from the server
//       // Reset form after successful submission
//       setFormData({
//         totalCapacity: 10000,
//         filledCapacity: "",
//         emptyCapacity: 10000,
//         date: "", // Reset the date field
//       });
//       alert("Filling detail added successfully!");
//       window.location.reload(); // Auto-refresh the browser
//     } catch (error) {
//       console.error("Error:", error.message);
//       alert("Failed to add filling detail");
//     }
//   };
  
//   return (
//     <Box component="form" onSubmit={handleSubmit} noValidate>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Typography
//             component="h1"
//             color="inherit"
//             noWrap
//             sx={{ flexGrow: 1 }}
//           >
//             Adding Filling Details
//           </Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             fullWidth
//             id="totalCapacity"
//             label="Total Capacity"
//             name="totalCapacity"
//             type="number"
//             disabled
//             value={formData.totalCapacity}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             fullWidth
//             id="filledCapacity"
//             label="Filled Capacity"
//             name="filledCapacity"
//             type="number"
//             value={formData.filledCapacity}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             fullWidth
//             id="emptyCapacity"
//             label="Empty Capacity"
//             name="emptyCapacity"
//             type="number"
//             value={formData.emptyCapacity}
//             disabled
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
//             inputProps={{
//               readOnly: true, // Make the field read-only
//             }}
//             value={formData.date}
//             onChange={handleChange}
//           />
//         </Grid>
//       </Grid>
//       <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
//         Add
//       </Button>
//     </Box>
//   );
// }
// React Component

// React Component
// React Component
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";

export default function Addfillingdetail() {
  const [formData, setFormData] = useState({
    totalCapacity: 10000,
    filledCapacity: "",
    emptyCapacity: 10000,
    date: new Date().toISOString().split("T")[0],
  });
  const [isCapacityFilled, setIsCapacityFilled] = useState(false);

  useEffect(() => {
    const fetchLastFillingDetail = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/Api/Fillingdetails/last/fillingdetail`, {
          params: {
            date: formData.date
          }
        });
        if (response.data) {
          const lastEmptyCapacity = response.data.emptyCapacity || 0;
          setFormData((prevData) => ({
            ...prevData,
            emptyCapacity: lastEmptyCapacity,
          }));
          if (lastEmptyCapacity <= 0) {
            setIsCapacityFilled(true);
          } else {
            setIsCapacityFilled(false);
          }
        }
      } catch (error) {
        console.error("Error fetching last filling detail:", error.message);
      }
    };

    fetchLastFillingDetail();
  }, [formData.date]);

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
      // Check if the capacity for the selected date has already been filled
      if (isCapacityFilled) {
        alert("Capacity already filled for this date. Cannot add filled capacity.");
        return;
      }

      const response = await axios.post(
        `${API_BASE_URL}/Api/Fillingdetails/add/fillingdetail`,
        formData
      );
      console.log(response.data);

      // Reset filled capacity to empty and reload page
      setFormData((prevData) => ({
        ...prevData,
        filledCapacity: "",
      }));

      alert("Filling detail added successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to add filling detail");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Adding Filling Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="filledCapacity"
            label="Filled Capacity"
            name="filledCapacity"
            type="number"
            value={formData.filledCapacity}
            onChange={handleChange}
            disabled={isCapacityFilled}
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
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="date"
            label="Date"
            name="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            inputProps={{ readOnly: true }}
            value={formData.date}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}  style={{ backgroundColor: '#3EA055', color: '#FFFFFF' }} disabled={isCapacityFilled}>
        Add
      </Button>
    </Box>
  );
}




