// import React, { useState, useEffect } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import axios from "axios";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";

// import TrackingCardview from "../components/Tracking/TrackingCardview";
// import Footer from "../components/Footer/Footer";
// import { API_BASE_URL } from "../utils/constants";




// const libraries = ["places"];
// const mapContainerStyle = {
//   width: "50vw",
//   height: "100vh",
// };

// const Trackingpage = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBMcEJqkIBFJn4yOOW1ijc0N0I33yUwsLM",
//     libraries,
//   });

//   const [marker, setMarker] = useState(null);
  

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${API_BASE_URL}/api/get/data-location`
//         );
//         if (response.data && response.data.length > 0) {
//           const { latitude, longitude } = response.data[0];
//           setMarker({ lat: latitude, lng: longitude });
//         } else {
//           console.error("No location data available");
//         }
//       } catch (error) {
//         console.error("Error fetching location data:", error);
//       }
//     };

//     const interval = setInterval(fetchData, 5000); // Fetch data every 1 second

//     return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
//   }, []);

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div>Loading maps</div>;
//   }

//   return (
//     <div>
//     <Box sx={{ flexGrow: 1, marginTop: 10 }}>
//       <Grid container spacing={3}>
//         <Grid item xs={7}>
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             zoom={10}
//             center={marker}
//           >
//             {marker && <Marker position={marker} />}
//           </GoogleMap>
//         </Grid>
//         <Grid item xs={5}>

        
//               <TrackingCardview
              
//               />
          
//         </Grid>
//       </Grid>
//     </Box>
//     <Footer/>
//     </div>
//   );
// };

// export default Trackingpage;



import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Footer from "../components/Footer/Footer";
import { API_BASE_URL } from "../utils/constants";
import TrackingCardview from "../components/Tracking/TrackingCardview";

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
  const [details, setDetails] = useState(null);
  const [map, setMap] = useState(null); // State to store map instance
  const [directionsDisplay, setDirectionsDisplay] = useState(null); // State to store directions renderer

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/Api/Addcollectingdata/last/collectingdetail`);
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/get/data-location`);
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

    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []);

  useEffect(() => {
    if (details && marker && map) {
      // Only draw path if details, marker, and map are available
      drawPath(details.startPointLat, details.startPointLong, details.endPointLat, details.endPointLong);
    }
  }, [details, marker, map]); // Redraw path when details, marker, or map change

  const onMapLoad = (map) => {
    setMap(map);
  };

  const drawPath = (start_lat, start_lng, end_lat, end_lng) => {
    const start = new window.google.maps.LatLng(start_lat, start_lng);
    const end = new window.google.maps.LatLng(end_lat, end_lng);

    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();

    directionsRenderer.setMap(map);
    setDirectionsDisplay(directionsRenderer);

    const request = {
      origin: start,
      destination: end,
      travelMode: "DRIVING",
    };

    directionsService.route(request, (result, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(result);
      } else {
        console.error("Directions request failed:", status);
      }
    });
  };

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
              onLoad={onMapLoad}
            >
              {marker && <Marker position={marker} />}
            </GoogleMap>
          </Grid>
          <Grid item xs={5}>
          <TrackingCardview />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Trackingpage;

