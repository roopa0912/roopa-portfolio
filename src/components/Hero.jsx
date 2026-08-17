import './Hero.css';
import FlowField from './FlowField';
import { useState, useEffect } from 'react';

function Hero() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    return (
    <section className="hero">
      {isDesktop && <FlowField />}

      <div className="hero-photo">
        <img src={`${import.meta.env.BASE_URL}me.jpeg`} alt="Roopa Adepu" />
      </div>

      <div className="hero-text">
        <p className="hero-label">01 / hello</p>
        <h1 className="hero-heading">
          hi, <span className="accent">Roopa</span> here.
        </h1>
        <p className="hero-intro">
          Mechanical and simulation engineer in Boston. I model how things
          flow, deform, and fail, and build the machine-learning surrogates
          that make those models fast. Currently hunting for my next role in
          CAE and Scientific ML.
        </p>
        <a className="hero-button" href="mailto:adepu.r@northeastern.edu">
          Say hi!
        </a>
      </div>
    </section>
  );
}

export default Hero;