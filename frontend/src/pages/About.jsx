// import React from "react";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../src/App.css"
// import banner from "../assets/images/AboutusBanner.png"


// export default function About () {
//     let message = `We are the creators of the EcoPick Online Garbage Management System, 
//     a cutting-edge solution revolutionizing waste management. Our platform harnesses online technology to provide efficient tools for garbage collection, sorting, and disposal. Committed to environmental sustainability, we integrate smart technology to optimize waste management operations."`;
//     return (
//         <section className="section-whit">
//                     <div>   
//                     <img src={banner} className="team-banner" alt="pic"/>
//                     </div>
//             <div className="container">    
//                 <div className="row">  
//                     <div className="col-md-12 text-center">
//                         <h2 className="section-title">
//                             Who We Are
//                         </h2>
//                         <p className="section-subtitle">{message}</p>
//                     </div>

//                     <div className="col-sm-6 col-md-4">
//                         <div className="team-item">
                        
//                             <img src="https://img.freepik.com/premium-vector/businessman-with-telescope-standing-growth-arrow_80802-24.jpg?w=1380" className="team-img" alt="pic"/>
//                             <h4> OUR VISION</h4>
//                             <div className="team-info">
//                                 <p>"Ec Online Garbage Management system aims to revolutionize waste management
//                                      practices with advanced technology and sustainable solutions, promoting environmental 
//                                      stewardship, efficiency, and community well-being."</p>
//                                 <p></p>

//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-6 col-md-4">
//                         <div className="team-item">

//                             <img src="https://img.freepik.com/premium-vector/archer-aiming-target_80802-22.jpg?w=1380" className="team-img" alt="pic"/>
//                             <h4> OUR MISSION</h4>
//                             <div className="team-info">
//                                 <p>"Revolutionize waste management with cutting-edge online solutions, prioritizing environmental sustainability. We optimize garbage collection, sorting, and disposal, promoting a cleaner, healthier planet through innovative technology."</p>
//                                 <p></p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-6 col-md-4">
//                         <div className="team-item">

//                             <img src="https://img.freepik.com/premium-vector/arab-business-man-arrow-hit-target-successful_951778-8639.jpg?w=1380" className="team-img" alt="pic"/>
//                             <h4> OUR FUTURE</h4>
//                             <div className="team-info">
//                                 <p>"Our future outlook entails expanding our system's reach, fostering community engagement, and integrating advanced technologies to enhance waste management efficiency. We aim to lead the industry in sustainable solutions for a cleaner environment."</p>
//                                 <p></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


                
//             </div>
//         </section>
//     )
// }







// import React from "react";
// import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
// import "../../src/App.css";
// import banner from "../assets/images/AboutusBanner.png";
// import teamImg1 from "https://img.freepik.com/premium-vector/businessman-with-telescope-standing-growth-arrow_80802-24.jpg?w=1380";
// import teamImg2 from "https://img.freepik.com/premium-vector/archer-aiming-target_80802-22.jpg?w=1380";
// import teamImg3 from "https://img.freepik.com/premium-vector/arab-business-man-arrow-hit-target-successful_951778-8639.jpg?w=1380";

// export default function About() {
//     let message = `We are the creators of the EcoPick Online Garbage Management System, 
//     a cutting-edge solution revolutionizing waste management. Our platform harnesses online technology to provide efficient tools for garbage collection, sorting, and disposal. Committed to environmental sustainability, we integrate smart technology to optimize waste management operations.`;
//     return (
//         <section className="section-whit">
//             <div>
//                 <img src={banner} className="team-banner" alt="pic" />
//             </div>
//             <Container>
//                 <Grid container spacing={4} justifyContent="center">
//                     <Grid item xs={12} textAlign="center">
//                         <Typography variant="h2" className="section-title">
//                             Who We Are
//                         </Typography>
//                         <Typography variant="body1" className="section-subtitle">
//                             {message}
//                         </Typography>
//                     </Grid>

//                     <Grid item xs={12} md={4}>
//                         <Card className="team-item">
//                             <img src={teamImg1} className="team-img" alt="pic" />
//                             <CardContent>
//                                 <Typography variant="h4">OUR VISION</Typography>
//                                 <Typography variant="body1">
//                                     "Ec Online Garbage Management system aims to revolutionize waste management
//                                     practices with advanced technology and sustainable solutions, promoting environmental
//                                     stewardship, efficiency, and community well-being."
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>

//                     <Grid item xs={12} md={4}>
//                         <Card className="team-item">
//                             <img src={teamImg2} className="team-img" alt="pic" />
//                             <CardContent>
//                                 <Typography variant="h4">OUR MISSION</Typography>
//                                 <Typography variant="body1">
//                                     "Revolutionize waste management with cutting-edge online solutions, prioritizing environmental sustainability. We optimize garbage collection, sorting, and disposal, promoting a cleaner, healthier planet through innovative technology."
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>

//                     <Grid item xs={12} md={4}>
//                         <Card className="team-item">
//                             <img src={teamImg3} className="team-img" alt="pic" />
//                             <CardContent>
//                                 <Typography variant="h4">OUR FUTURE</Typography>
//                                 <Typography variant="body1">
//                                     "Our future outlook entails expanding our system's reach, fostering community engagement, and integrating advanced technologies to enhance waste management efficiency. We aim to lead the industry in sustainable solutions for a cleaner environment."
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </section>
//     );
// }

import React from "react";
import { makeStyles } from "@material-ui";
import Typography from "@material-ui";
import Grid from "@material-ui";
import Container from "@material-ui";
import Card from "@material-ui";
import CardContent from "@material-ui";
import CardMedia from "@material-ui";
import "../../src/App.css";

import banner from "../assets/images/AboutusBanner.png";
import businessmanImage from "https://img.freepik.com/premium-vector/businessman-with-telescope-standing-growth-arrow_80802-24.jpg?w=1380";
import archerImage from "https://img.freepik.com/premium-vector/archer-aiming-target_80802-22.jpg?w=1380";
import arabBusinessmanImage from "https://img.freepik.com/premium-vector/arab-business-man-arrow-hit-target-successful_951778-8639.jpg?w=1380";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#fff",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  teamBanner: {
    width: "100%",
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
  },
  teamItem: {
    marginBottom: theme.spacing(4),
  },
  teamImg: {
    width: "100%",
  },
}));

export default function About() {
  const classes = useStyles();

  let message =
    "We are the creators of the EcoPick Online Garbage Management System, a cutting-edge solution revolutionizing waste management. Our platform harnesses online technology to provide efficient tools for garbage collection, sorting, and disposal. Committed to environmental sustainability, we integrate smart technology to optimize waste management operations.";

  return (
    <section className={classes.section}>
      <div>
        <img src={banner} className={classes.teamBanner} alt="pic" />
      </div>
      <Container>
        <Typography variant="h2" align="center" className={classes.sectionTitle}>
          Who We Are
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          {message}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} className={classes.teamItem}>
            <Card>
              <CardMedia
                component="img"
                image={businessmanImage}
                className={classes.teamImg}
                alt="pic"
              />
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  OUR VISION
                </Typography>
                <Typography variant="body1">
                  "Ec Online Garbage Management system aims to revolutionize waste management practices with advanced
                  technology and sustainable solutions, promoting environmental stewardship, efficiency, and community
                  well-being."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.teamItem}>
            <Card>
              <CardMedia
                component="img"
                image={archerImage}
                className={classes.teamImg}
                alt="pic"
              />
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  OUR MISSION
                </Typography>
                <Typography variant="body1">
                  "Revolutionize waste management with cutting-edge online solutions, prioritizing environmental
                  sustainability. We optimize garbage collection, sorting, and disposal, promoting a cleaner, healthier
                  planet through innovative technology."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.teamItem}>
            <Card>
              <CardMedia
                component="img"
                image={arabBusinessmanImage}
                className={classes.teamImg}
                alt="pic"
              />
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  OUR FUTURE
                </Typography>
                <Typography variant="body1">
                  "Our future outlook entails expanding our system's reach, fostering community engagement, and
                  integrating advanced technologies to enhance waste management efficiency. We aim to lead the industry
                  in sustainable solutions for a cleaner environment."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

