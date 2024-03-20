import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

import { PieChart } from "@mui/x-charts/PieChart";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



const libraries = ["places"];
const mapContainerStyle = {
  width: "50vw",
  height: "50vh",
};

const Trackingpage = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBMcEJqkIBFJn4yOOW1ijc0N0I33yUwsLM",
    libraries,
  });

  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/get/data-location"
        );
        if (response.data && response.data.length > 0) {
          const { latitude, longitude } = response.data[0];
          setMarker({ lat: latitude, lng: longitude });
        } else {
          console.error("No location data available");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    const interval = setInterval(fetchData, 5000); // Fetch data every 1 second

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={marker}
          >
            {marker && <Marker position={marker} />}
          </GoogleMap>
        </Grid>
        <Grid item xs={4}>
        
       
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trackingpage;
