
import Navbar from "./components/NavBar/Navbar";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Login from "./pages/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
          <Route path='/' element={<Login/>} />
      </Routes>

    </BrowserRouter>
  
    
  );
}

export default App;
