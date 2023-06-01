import React from "react";
import web from '../src/img/grow-business.jpg';
import Common from "./Common";

const Home = () => {
  return (
    <>
        <Common name='Upgrade your skills with us' 
        imgsrc={web} 
        visit='/service' 
        btname='Get Started'/>
    </>
  );
};

export default Home;
