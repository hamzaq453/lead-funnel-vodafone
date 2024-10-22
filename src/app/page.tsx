import React from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Eligibility from "./components/Eligibility";
import FunnelForm from "./components/FunnelForm";


const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen">
  
     <Hero/>
     <Benefits/>
     <Eligibility/>
     <FunnelForm/>

    </div>
  );
};

export default HomePage;
