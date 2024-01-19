import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Features from './Pages/Features'
import Gallery from './Pages/Gallery'
import Pricing from './Pages/Pricing'
import Team from './Pages/Team'
import Pagenotfound from './Pages/Pagenotfound'

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<Features />}/>
        <Route path="/" element={<Gallery />}/>
        <Route path="/" element={<Pricing />}/>
        <Route path="/" element={<Team />}/>
        <Route path="*" element={<Pagenotfound />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
