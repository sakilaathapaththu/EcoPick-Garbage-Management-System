
import Navbar from "./components/NavBar/Navbar";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route } from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
    </BrowserRouter>
  
    
  );
}

export default App;
