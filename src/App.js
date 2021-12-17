import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import GradientList from "./components/GradientList";
const App = () => {
  return (
    <div>
      <Navbar />
      <GradientList />
    </div>
  );
};

export default App;
