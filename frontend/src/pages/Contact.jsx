import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {contactConfig} from "../pages/content_option";
import contbanner from "../assets/images/contbanner.png"

export default function ContactUs() {
    return (
        <section className="cont-sec no-top-margin">
            <div>   
            <img src={contbanner} className="cont-team-banner" alt="pic"/>
            </div>
        <Container>
            <Row className="mb-5 mt-5">
                <Col lg= '8'>
                    <h1 className="display-4 mb-4">
                        Contact Us
                    </h1>
                </Col>
            </Row>

            <Row className="sec-sp">
                <Col lg= '5' className="mb-5">
                    <h3 className="color_sec py-4">Get in Touch</h3>
                    <address>
                        <strong>Email : contact@ecopick.com</strong>
                        <br />
                        <br />
                        <p>
                            <strong>Contact Number : +94 12 345 6789</strong>
                        </p>
                    </address>
                    <p>{contactConfig.description}</p>
                </Col>
                <Col lg='7' className="d-flex align-items-center">
                    <form className="contact__form w-100">
                        <Row>
                            <Col lg='6' className="form-group">
                                <input
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                type="text"
                                />
                            </Col>
                            <Col lg='6' className="form-group">
                                <input
                                className="form-control rounded-0"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                type="email"
                                />
                            </Col>
                        </Row>
                        <textarea 
                        className="form-control rounded-0" id="message"
                        name="message" 
                        placeholder="Need help? We're here!"
                        rows={5}>
                        </textarea>
                        <br />
                        <Col lg='12' className="form-group">
                            <button className="btn ac_btn" type="submit">Send Message</button>
                        </Col>
                    </form>
                </Col>
            </Row>
        </Container>
        </section>
    );
};








// import {useRef} from 'react'

// const Contact = () => {
//     const form = useRef();

//     const sendEmail = () => {};
//   return (
//     <section>
//         <div className='contact-container'>
//         <h2 className='contact-center'>Contact Us</h2>
//             <form ref = {form} onSubmit={sendEmail}
//              className='form-control-card'>
//                 {/* <div className="team-contact">
                
//                     <img src="https://img.freepik.com/premium-vector/megaphone-contact-with-yellow-background-megaphone-banner-web-design_686498-846.jpg?w=1800" className="img-contact" alt="image is not visible"/>
//                 </div> */}
//                 <input type='text' placeholder='Full Name'name='user_name' required></input>
//                 <input type='email' placeholder='Email'name='user_email' required></input>
//                 <input type='text' placeholder='Subject'name='subject' required></input>
//                 <textarea name="message" cols="30" rows="10"></textarea>
//                 <button type='submit' className='--btn-primary'>Send Message</button>
//             </form>
//         </div>
//     </section>
//   )
// }

// export default Contact