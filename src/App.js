import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
// import FullWidthLogoImageSlider from './components/FullwidthLogoImageSlider/FullWidthLogoImageSlider';

function App() {
  // any functions that need to be called in the render function
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
