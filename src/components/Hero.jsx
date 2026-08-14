import './Hero.css';
import FlowField from './FlowField';

function Hero() {
  return (
    <section className="hero">
      <FlowField />

      <div className="hero-photo">
        <img src="/me.jpeg" alt="Roopa Adepu" />
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