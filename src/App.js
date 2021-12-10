// import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron/Jumbotron';
import FullWidthLogoImageSlider from './components/FullwidthLogoImageSlider/FullWidthLogoImageSlider';

function App() {
  // any functions that need to be called in the render function
  return (
    <div className="App">
      <Jumbotron />
      <FullWidthLogoImageSlider />
    </div>
  );
}

export default App;
