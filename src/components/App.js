import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import logo from '../assets/pokemon-logo-png-1444.png'
import LandingPage from './LandingPage';
import Team from './Team';
import NavBar from './NavBar';
import PokeDex from './PokeDex'
import TallGrass from './TallGrass'

function App() {

  return (
    <div>
      <img className='logo' src={logo} alt='logo' />
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/pokedex' element={<PokeDex />} />
        <Route path='/explore' element={<TallGrass />} />
      </Routes>
    </div>
  );
}

export default App;
