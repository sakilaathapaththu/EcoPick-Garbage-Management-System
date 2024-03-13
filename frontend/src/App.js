
import Navbar from "./components/NavBar/Navbar";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Login from "./pages/Loginpage";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* Set default route to the Login page */}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  
    
  );
}

export default App;
