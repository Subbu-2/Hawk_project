import React, {useEffect,useState} from 'react';
import './App.scss';
import { BrowserRouter as Router,	Routes,	Route,	Link } from 'react-router-dom';
import HeroBar from './components/heroBar';
import Home from './home.js';
import Playlist from './playlists.js';
import About from './about.js';
import Player from './components/player';
import Background from './components/background';

const App = () => {
  return (
    <Router>
      <body>
        <HeroBar />
        <div  className='main-container'>
        <Background  className='send-background'/>
        <div className='sub-container'>
          <Routes className='send-forward'>
            <Route path='/' element={ <Home /> } />
            <Route path='/playlists' element={ <Playlist /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/player' element={ <Player /> } />
          </Routes>
        </div>
        </div>
      </body>
    </Router>
  );
}

export default App;
