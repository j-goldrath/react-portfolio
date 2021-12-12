// import React
import React from 'react';

// import App.css
import './App.css';

// import react components we created
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';


function App() {
  // any functions that need to be called in the render function
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
