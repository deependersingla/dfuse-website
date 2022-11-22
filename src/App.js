import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeScreen from "./Component/home";
import './Css/App.css';

function App() {
  return (
    <div className=''>
      <div>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
