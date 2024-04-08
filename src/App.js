// import React, { Fragment } from "react";
 import React from "react"
import './App.css'
import { BrowserRouter as Router,Route,  Routes } from "react-router-dom";
import Header from "./header/Header";
import Stays from "./stays/Stays";
import Beach from "./beach/Beach";
import { Page } from "./page/Page";
// import { Vacation } from "./vacation/Vacation";
import Footer from "./Footer/Footer";

export default function App() {
  return (
   
    <Router>
      <Header/>
        <Routes>
        
        {/* <Route path="/header" element={<Header />} /> */}
          <Route path="/page" element={<Page />}/>
          <Route path="/stays" element={<Stays />} />
          <Route path='/beach' element={<Beach/>}/>
          {/* <Route path="/Footer" element={<Footer />} /> */}
        </Routes>
      <Footer/>
      
    </Router>
  );
}


