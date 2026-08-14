import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <span id="top" />
      <Hero />
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
    </div>
  );
}

export default App;