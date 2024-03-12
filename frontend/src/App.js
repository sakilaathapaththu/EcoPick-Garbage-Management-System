
import Navbar from "./components/NavBar/Navbar";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Login from "./pages/Loginpage";
import Signup from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Home' element={<Home/>}/>
      </Routes>

    </BrowserRouter>
  
    
  );
}

export default App;
