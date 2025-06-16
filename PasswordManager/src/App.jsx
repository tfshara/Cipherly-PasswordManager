// import { useState } from 'react'
// import './App.css'
// import Navbar from './Components/Navbar'
// import Manager from './Components/Manager'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     < >
//     <Navbar/>
//     <Manager/>
      
//     </>
//   )
// }

// export default App
// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Manager from './Components/Manager';
import Home from './Components/Home';

const App = () => {
  return (
    <div className="relative min-h-screen w-full text-white">
      {/* 🔵 YOUR OLD THEME BACKGROUND */}
      <div className="absolute inset-0 -z-10 min-h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_65%,#1e2f59_100%)]"></div>

      <Navbar />

      {/* 📦 Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vault" element={<Manager />} />
      </Routes>
    </div>
  );
};

export default App;


