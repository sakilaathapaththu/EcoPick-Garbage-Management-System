import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../src/App.css"
import banner from "../assets/images/AboutusBanner.png"


export default function About () {
    let message = `We are the creators of the EcoPick Online Garbage Management System, 
    a cutting-edge solution revolutionizing waste management. Our platform harnesses online technology to provide efficient tools for garbage collection, sorting, and disposal. Committed to environmental sustainability, we integrate smart technology to optimize waste management operations."`;
    return (
        <section className="section-whit">
                    <div>   
                    <img src={banner} className="team-banner" alt="pic"/>
                    </div>
            <div className="container">    
                <div className="row">  
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">
                            Who We Are
                        </h2>
                        <p className="section-subtitle">{message}</p>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                        
                            <img src="https://img.freepik.com/premium-vector/businessman-with-telescope-standing-growth-arrow_80802-24.jpg?w=1380" className="team-img" alt="pic"/>
                            <h4> OUR VISION</h4>
                            <div className="team-info">
                                <p>"Ec Online Garbage Management system aims to revolutionize waste management
                                     practices with advanced technology and sustainable solutions, promoting environmental 
                                     stewardship, efficiency, and community well-being."</p>
                                <p></p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">

                            <img src="https://img.freepik.com/premium-vector/archer-aiming-target_80802-22.jpg?w=1380" className="team-img" alt="pic"/>
                            <h4> OUR MISSION</h4>
                            <div className="team-info">
                                <p>"Revolutionize waste management with cutting-edge online solutions, prioritizing environmental sustainability. We optimize garbage collection, sorting, and disposal, promoting a cleaner, healthier planet through innovative technology."</p>
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">

                            <img src="https://img.freepik.com/premium-vector/arab-business-man-arrow-hit-target-successful_951778-8639.jpg?w=1380" className="team-img" alt="pic"/>
                            <h4> OUR FUTURE</h4>
                            <div className="team-info">
                                <p>"Our future outlook entails expanding our system's reach, fostering community engagement, and integrating advanced technologies to enhance waste management efficiency. We aim to lead the industry in sustainable solutions for a cleaner environment."</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>


                
            </div>
        </section>
    )
}
