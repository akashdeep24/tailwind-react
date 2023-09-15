import React from "react";
import Navbar from "./components/Navbar";
import SubNav from "./components/SubNav";
import Taskboard from "./screens/Taskboard";
const App = () => {
  return (
    <section
      className="h-screen
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <SubNav/>    
      <Taskboard/>  
    </section>
  );
};

export default App;
