import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './components/Gallery';

function Home() {
  return (
    <>
      <span id="top" />
      <Hero />
      <div id="about"><About /></div>
      <div id="education"><Education /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="gallery"><Gallery /></div>
    </>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;