import './App.css';
import React, { Component } from "react";
import Test from './components/test'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    
    <div className="App">
      <h1>Me Gusta Tu Eyeliner</h1>
      <p>Click and drag the square to move</p>
      <p>Pinch in and out to zoom</p>
      <div id="exhibit">
        <Test/>
      </div>
    </div>
  );
}

export default App;
 