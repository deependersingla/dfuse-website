import React from "react";
import { Switch, Route, Redirect, Routes, Navigate } from "react-router-dom";
import HomeScreen from "./Component/home";
import Navbar from "./Component/Navbar/navbar";
import About from "./Component/about";
import Strategies from "./Component/strategies";
import Risk_Parity from './Component/risk_Parity';
import Tokenomics from './Component/tokenomics';
import Teams from './Component/teams';
import './Css/App.css';

function App() {
  return (
    <div className=''>
      {/* <Navbar /> */}
      {/* <HomeScreen /> */}
      <div>
        <Routes>
          {/* <Route path="/student/:name" component={EditStudent} /> */}
          {/* <Route path="/allStudent" render={props => <Show {...props} />} /> */}
          <Route path="/home" element={<HomeScreen />} />
          {/* <Route path="/howItWorks" element={<About />} /> */}
          {/* <Route path="/strategies" element={<Strategies />} /> */}
          {/* <Route path="/risk" element={<Risk_Parity />} /> */}
          {/* <Route path="/tokenomics" element={<Tokenomics />} /> */}
          {/* <Route path="/teams" element={<Teams />} /> */}
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
