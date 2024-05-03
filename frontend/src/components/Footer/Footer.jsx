import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbbleSquare, faFacebookSquare, faGithubSquare, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"; // Import Font Awesome icons
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

// Define styled components for styling
const RootContainer = styled("div")({
  backgroundColor: "#3EA055",
  maxWidth: "100%",
  margin: "auto",
  padding: "40px",
  color: "#ffffff",
});

const IconContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "75%",
  margin: "auto",
});

const SectionContainer = styled("div")({
  marginBottom: "24px",
});

const SignUpButton = styled(Button)({
  backgroundColor: "white",
  color: "#0178ba",
  "&:hover": {
    backgroundColor: "#0178ba",
    color: "white",
  },
});

const Footer = () => {
  return (
    <>
      <br />
      <RootContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={4}>
            {/* <Typography variant="h6" gutterBottom>
              <b>Sign up to receive email updates</b>
            </Typography> */}

            <Typography gutterBottom>
              <Link href="/newsletter">
                {/* <SignUpButton variant="contained" endIcon={<SendIcon />}>
                  Sign Up
                </SignUpButton> */}
              </Link>
            </Typography>

            <Typography variant="body1" gutterBottom>
              Location : Malabe kaduwela <br></br>
              Contact No : +94 XXX XXX XXX
            </Typography>
            <IconContainer>
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              <FontAwesomeIcon icon={faGithubSquare} size="2x" />
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              <FontAwesomeIcon icon={faDribbbleSquare} size="2x" />
            </IconContainer>
          </Grid>

          {/* Right Grid */}
          <Grid item xs={12} lg={8} container spacing={4}>
            {/* Section 1 */}
            <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
              {/* <Typography variant="h6" gutterBottom>
                <b> Participate</b>
              </Typography> */}
              {/* <ul>
                <li>
                  {" "}
                  <a
                    href="/consultations/events"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Events
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="/consultations/public-consultations"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Public Consultation
                  </a>
                </li>
              </ul> */}
            </Grid>

            {/* Section 2 */}
            <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
              {/* <Typography variant="h6" gutterBottom>
                <b> About Us</b>
              </Typography>
              <ul> */}
                {/* <li>
                  <a
                    href="/aboutus"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    About ConnectSL
                  </a>
                </li>
                <li>
                  <a
                    href="/genaral-feedback"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    General Feedback
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="/contact-us"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                   Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="####"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    SiteMap
                  </a>
                </li>
              </ul> */}
            </Grid>

            {/* Section 3 */}
            <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
              {/* <Typography variant="h6" gutterBottom>
                <b> User Policies</b>
              </Typography>
              <ul>
                <li>
                  {" "}
                  <a
                    href="/termofuse"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="/termofparticipation"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Terms of Participation
                  </a>
                </li>
              </ul> */}
            </Grid>

            {/* Section 4 */}
            <Grid item xs={12} md={6} lg={3} component={SectionContainer}>
              {/* <Typography variant="h6" gutterBottom>
                <b> For Media</b>
              </Typography>
              <ul>
                <li>
                  {" "}
                  <a
                    href="/news-and-press-releases/latest-news"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    News & Press Releases
                  </a>
                </li>
              </ul> */}
            </Grid>
          </Grid>
        </Grid>
      </RootContainer>
    </>
  );
};

export default Footer;
