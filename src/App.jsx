import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import Footer from './Footer'

const App = () => {
    return(
        <>
        <Navbar />
        <Routes>
            <Route exact path="/"  Component={Home}/>
            <Route exact path="/about"  Component={About}/>
            <Route exact path="/service"  Component={Service}/>
            <Route exact path="/contact"  Component={Contact}/>
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
        <Footer />
        </>
    )
};

export default App;