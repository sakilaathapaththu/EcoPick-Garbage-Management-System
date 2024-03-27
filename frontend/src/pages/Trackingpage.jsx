import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import TrackingCardview from "../components/Tracking/TrackingCardview";
import Footer from "../components/Footer/Footer";
import { API_BASE_URL } from "../utils/constants";




const libraries = ["places"];
const mapContainerStyle = {
  width: "50vw",
  height: "100vh",
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
          `${API_BASE_URL}/api/get/data-location`
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
    <div>
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={marker}
          >
            {marker && <Marker position={marker} />}
          </GoogleMap>
        </Grid>
        <Grid item xs={5}>

        <TrackingCardview />
       
        </Grid>
      </Grid>
    </Box>
    <Footer/>
    </div>
  );
};

export default Trackingpage;
