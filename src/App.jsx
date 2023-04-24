import { useEffect, useState } from 'react'
import './App.scss'
import Nav from './components/Nav/Nav'
import HomeContent from './components/Content/HomeContent'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import DestinationContent from './components/Content/DestinationContent'
import CrewContent from './components/Content/CrewContent'
import TechnologyContent from './components/Content/TechnologyContent'

function App() {
  
  const path = useLocation().pathname;
  const location = path.split('/')[1];
  

  useEffect(() => {
    switch (location) {
      case 'home': 
        document.body.classList.remove('destination-bg');
        document.body.classList.remove('technology-bg');
        document.body.classList.remove('crew-bg');
        document.body.classList.add('home-bg');
        break;
      case 'destination': 
        document.body.classList.remove('home-bg');
        document.body.classList.remove('technology-bg');
        document.body.classList.remove('crew-bg');
        document.body.classList.add('destination-bg');
        break;
      case 'crew': 
        document.body.classList.remove('home-bg');
        document.body.classList.remove('technology-bg');
        document.body.classList.remove('destination-bg');
        document.body.classList.add('crew-bg');
        break;
      case 'technology': 
        document.body.classList.remove('home-bg');
        document.body.classList.remove('crew-bg');
        document.body.classList.remove('destination-bg');
        document.body.classList.add('technology-bg');
        break;
      default:
        document.body.classList.add('home-bg');
        break;
    }
  }, [location]);

  return (
    <>
      <Nav location={location}/>
      <Routes>
        <Route path='/home' element={<HomeContent/>}/>
        <Route path='/destination' element={<DestinationContent/>}/>
        <Route path='/crew' element={<CrewContent/>}/>
        <Route path='/technology' element={<TechnologyContent/>}/>
      </Routes>
    </>
  )
}

export default App
