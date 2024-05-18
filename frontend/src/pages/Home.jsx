import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Corousel from "../components/Carousel/Corousel";
import CardComponent from "../components/HomeCard/card";
import { Slide } from "@mui/material";

import slide01 from "../assets/images/slide01.jpg";
import feedbackpic from "../assets/images/feedback.jpg";
import contactuspic from "../assets/images/contactus.jpg";
import aboutuspic from "../assets/images/aboutus.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const title01 = "View Tracking ";
const title02 = "Add Feedback ";
const title03 = "About Us ";
const title04 = "Contact Us ";



const description01="TrackingView enables users to monitor live garbage collection vehicle locations, available filling space, and scheduled routes for efficient waste management";
const description02="Join the conversation and let your voice shape the future of waste management. Share your thoughts, ideas, and suggestions with us  together, we can create a cleaner, greener world.";
const description03="Committed to sustainable solutions, we strive to innovate and lead in waste management practices for a greener future.";
const description04="Have a question or inquiry? Don't hesitate to reach out to our dedicated team for prompt assistance and personalized service.";



const Item = styled(Box)(({ theme }) => ({
  transition: "transform 0.5s ease", // Define the transition effect for transform
  "&:hover": {
    transform: "scale(1.1)", // Scale the card on hover
  },
}));

export default function Home() {
  return (
    <div>
    <Box sx={{ flexGrow: 1, mt: "6%", ml: 1, mr: 1 }}>
      <Box>
        <Corousel />
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={3} md={3}>
            <Item>
              <CardComponent images={slide01} title={title01} url={'/Tracking'} description={description01} />
            </Item>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Item>
              <CardComponent images={feedbackpic} title={title02} url={'http://127.0.0.1:5000/'} description={description02} />
            </Item>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Item>
              <CardComponent images={aboutuspic} title={title03} url={'/About'} description={description03} />
            </Item>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Item>
              <CardComponent images={contactuspic} title={title04} url={'/Contact'} description={description04} />
            </Item>
          </Grid>
        </Grid>
      </Box>
     
    </Box>
     <Footer/>
     </div>
  );
 
}
