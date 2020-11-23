import React from 'react';
import sjaak from './assets/images/sjaak.jpg';
import github from './assets/images/github.svg';
import instagram from './assets/images/instagram.svg';

const App = () => (
  <main>
    <header>
      <img className="sjaak" src={sjaak} alt="sjaak" />
      <h1>Sjaak Luthart</h1>
      <h2>Fullstack Developer | Musician</h2>
      <div className="links">
        <a href="https://github.com/sjaakluthart" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.instagram.com/sjaakluthart/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </header>
  </main>
);

export default App;
