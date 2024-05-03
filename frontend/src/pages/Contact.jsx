import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import contbanner from "../assets/images/contbanner.png";
import Footer from "../components/Footer/Footer";
 
export default function ContactUs() {
  return (
   
    <div>
     
   
   <Grid sx={{mt:8}}>
   <img
        width='100%'
        height={250}
        src={contbanner}
        alt='test'
        loading="lazy"
      />
   </Grid>
 
<Grid container spacing={0} sx={{ mt: -1, bgcolor: "#033624"}}>
   
        <Grid item xs={12} md={4}>
            <Box
            sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "left",
                ml:3,
                mt:5
            }}
            >
             <Typography variant="h4"  color="white">Contact Us</Typography>
           
            </Box>
            <Box sx={{mt:10,ml:3}}>
                <Typography variant="h6" color="white">Get in Touch</Typography>
                <Typography variant="body1" color="white">
                    <strong>Email : contact@ecopick.com</strong>
                    <br />
                    <br />
                    <strong>Contact Number : +94 12 345 6789</strong>
                </Typography>
                <Typography variant="body1" color="white">Have inquiries or want to learn more about EcoPick Private Limited? We're here to help! Whether it's about our products, services, or sustainability initiatives, feel free to reach out. Your questions are important to us, and our team is ready to provide the answers you need. Get in touch today!</Typography>
            </Box>
        </Grid>
        <Grid Container item xs={12} md={8} >
       
        <Container >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
            //   onSubmit={handleSubmit}
              sx={{ mt: 3,mr:10 }}
             
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    id="name"
                    name="name"
                    label="Your Name"
                    required
                    fullWidth
                    sx={{
                        color: "white", // Change text color to white
                        "& input::placeholder": { color: "white" }, // Change placeholder color to white
                        "& fieldset": { borderColor: "white" }, // Change outline color to white
                        "&:hover fieldset": { borderColor: "white" } // Change hover outline color to white
                      }}
                   
                    autoFocus
                    // onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Your Email"
                    autoComplete="family-name"
                    sx={{
                        color: "white", // Change text color to white
                        "& input::placeholder": { color: "white" }, // Change placeholder color to white
                        "& fieldset": { borderColor: "white" }, // Change outline color to white
                        "&:hover fieldset": { borderColor: "white" } // Change hover outline color to white
                      }}
                    // onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="message"
                    name="message"
                    label="Need help? We're here!"
                    placeholder="Need help? We're here!"
                    multiline
                    rows={5}
                    variant="outlined"
                    sx={{
                        color: "white", // Change text color to white
                        "& input::placeholder": { color: "white" }, // Change placeholder color to white
                        "& fieldset": { borderColor: "white" }, // Change outline color to white
                        "& hover::fieldset": { borderColor: "white" } // Change hover outline color to white
                      }}                 
                    // onChange={handleChange}
                  />
                </Grid>
               
              </Grid>
 
              <Button
                type="submit"
               
                variant="contained"
                sx={{ mt: 3 }}
              >
                Send Message
              </Button>
             
            </Box>
          </Box>
        </Container>
      </Grid>
</Grid>
 
 
 
<Footer />
    </div>
  );
}
 