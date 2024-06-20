import React from "react";

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Loginpage";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Trackingpage from "./pages/Trackingpage";
import Addcollectingdata from './pages/Addcollectingdata';
import Viewfillingrecode from "./pages/Viewfillingrecode";
import Profilepage from "./pages/Profilepage";
import AllDriversList from "./pages/AllDriversList";
import RegisterDriver from "./pages/Driver/Register";
import ViewDriverprofile from "./pages/Driver/FetchDriver";
import UpdateDriver from "./pages/Driver/UpdateDriver";
import About from "./pages/About";
import AllFeedback from "./pages/AllFeedback";

// import About from "./pages/About";
import Contact from "./pages/Contact";
 

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

function AppRouter() {
  // Custom hook to get the current location
  const location = useLocation();
  
  // Array of paths where Navbar should be hidden
  const hiddenPaths = ["/Login", "/Dashboard","/","/Addcollectingdata","/Viewfillingrecode","/ViewAllDriversList","/RegisterDriver","/Signup","/AllFeedback"];

 
  // Function to check if the current path is in hiddenPaths
  const isHiddenPath = path => hiddenPaths.includes(path);

  // Conditionally render Navbar based on the current route
  const renderNavbar = () => {
    if (isHiddenPath(location.pathname)) {
      return null; // Hide Navbar
    } else {
      return <Navbar /> ;
    }
  }
  return (
    <>
      {renderNavbar()}
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Tracking" element={<Trackingpage />} />
        <Route path="/Addcollectingdata" element={<Addcollectingdata/>} />
        <Route path="/Viewfillingrecode" element={<Viewfillingrecode/>} />
        <Route path="/ViewAllDriversList" element={<AllDriversList/>} />
        <Route path="/RegisterDriver" element={<RegisterDriver/>} />
        <Route path="/ViewDriverProfile/:id" element={<ViewDriverprofile/>} />
        <Route path="/update-driver/:id" element={<UpdateDriver />} />
        <Route path="/About" element={<About />} />
        <Route path="/AllFeedback" element={<AllFeedback />} />


        {/* <Route path="/About" element={<About/>} /> */}
        <Route path="/Contact" element={<Contact/>} />
      
        <Route path="/Profile" element={<Profilepage/>} />
       
       
       
        {/* Set default route to the Login page */}
        <Route path="/" element={<Login />} />
      </Routes>
 
     

    </>
  );
}

export default App;
