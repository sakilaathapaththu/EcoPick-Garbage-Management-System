// import React from "react";
// import {Container, Row, Col} from "react-bootstrap";
// import {contactConfig} from "../pages/content_option";
// import contbanner from "../assets/images/contbanner.png";

// export default function ContactUs() {
//     return (
//         <section className="cont-sec no-top-margin">
//             <div>   
//             <img src={contbanner} className="cont-team-banner" alt="pic"/>
//             </div>
//         <Container>
//             <Row className="mb-5 mt-5">
//                 <Col lg= '8'>
//                     <h1 className="display-4 mb-4">
//                         Contact Us
//                     </h1>
//                 </Col>
//             </Row>

//             <Row className="sec-sp">
//                 <Col lg= '5' className="mb-5">
//                     <h3 className="color_sec py-4">Get in Touch</h3>
//                     <address>
//                         <strong>Email : contact@ecopick.com</strong>
//                         <br />
//                         <br />
//                         <p>
//                             <strong>Contact Number : +94 12 345 6789</strong>
//                         </p>
//                     </address>
//                     <p>{contactConfig.description}</p>
//                 </Col>
//                 <Col lg='7' className="d-flex align-items-center">
//                     <form className="contact__form w-100">
//                         <Row>
//                             <Col lg='6' className="form-group">
//                                 <input
//                                 className="form-control"
//                                 id="name"
//                                 name="name"
//                                 placeholder="Your Name"
//                                 type="text"
//                                 />
//                             </Col>
//                             <Col lg='6' className="form-group">
//                                 <input
//                                 className="form-control rounded-0"
//                                 id="email"
//                                 name="email"
//                                 placeholder="Your Email"
//                                 type="email"
//                                 />
//                             </Col>
//                         </Row>
//                         <textarea 
//                         className="form-control rounded-0" id="message"
//                         name="message" 
//                         placeholder="Need help? We're here!"
//                         rows={5}>
//                         </textarea>
//                         <br />
//                         <Col lg='12' className="form-group">
//                             <button className="btn ac_btn" type="submit">Send Message</button>
//                         </Col>
//                     </form>
//                 </Col>
//             </Row>
//         </Container>
//         </section>
//     );
// };





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
 
<Grid container spacing={0} sx={{ mt: -1, height: "100vh", bgcolor: "#033624"}}>
   
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
 
 
 
     
    </div>
  );
}
 