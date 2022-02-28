import './App.css';
import Background from './components/background/background';
import Title from './components/title/Title.js';
import Selector from './components/Selector/Selector.js'
import Sorter from "./components/sorter/Sorter.js"
import PathFinder from './components/PathFinder/PathFinder.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Background>
        <Sorter/>
        <PathFinder/>
        <Title/>
        <Selector/>
        <About/>
        <Footer/>
      </Background>
    </div>
  );
}


export default App;
