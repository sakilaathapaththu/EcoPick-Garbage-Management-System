import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import banner from "../assets/images/AboutusBanner.png";
import businessmanImage from "../assets/images/pic1.jpg";
import archerImage from "../assets/images/businessman.png";
import arabBusinessmanImage from "../assets/images/2333.jpg";

export default function About() {
  let message =
    "We are the creators of the EcoPick Online Garbage Management System, a cutting-edge solution revolutionizing waste management. Our platform harnesses online technology to provide efficient tools for garbage collection, sorting, and disposal. Committed to environmental sustainability, we integrate smart technology to optimize waste management operations.";

  return (
    <section>
      <div style={{marginTop:60}}>
        <img src={banner} style={{ width: "100%" }} alt="pic" />
      </div>
      <Container>
        <Typography variant="h2" align="center" style={{ marginBottom: "16px" }}>
          Who We Are
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          {message}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}
           sx={{mt:10}}>
            <Card style={{height:550}}>
              <CardMedia
                component="img"
                image={businessmanImage}
                style={{ width: "100%" }}
                alt="pic"
                height={300}
               
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  OUR VISION
                </Typography>
                <Typography variant="body1">
                  "Ec Online Garbage Management system aims to revolutionize waste management practices with advanced technology and sustainable solutions, promoting environmental stewardship, efficiency, and community well-being."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{mt:10}}>
            <Card style={{height:550}}>
              <CardMedia
                component="img"
                image={archerImage}
                style={{ width: "100%" }}
                alt="pic"
                height={300}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  OUR MISSION
                </Typography>
                <Typography variant="body1">
                  "Revolutionize waste management with cutting-edge online solutions, prioritizing environmental sustainability. We optimize garbage collection, sorting, and disposal, promoting a cleaner, healthier planet through innovative technology."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}  sx={{mt:10}}>
            <Card style={{height:550}}>
              <CardMedia
                component="img"
                image={arabBusinessmanImage}
                style={{ width: "100%" }}
                alt="pic"
                height={300}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  OUR FUTURE
                </Typography>
                <Typography variant="body1">
                  "Our future outlook entails expanding our system's reach, fostering community engagement, and integrating advanced technologies to enhance waste management efficiency. We aim to lead the industry in sustainable solutions for a cleaner environment."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
