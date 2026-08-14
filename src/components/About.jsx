import './About.css';
import useReveal from './useReveal';

function About() {
  const { ref, visible } = useReveal();

  const tools = [
    'Ansys Mechanical',
    'Ansys Fluent',
    'SolidWorks',
    'OpenFOAM',
    'MATLAB',
    'Simulink',
    'PyTorch',
    'TensorFlow',
  ];

  const methods = [
    'DOE Study',
    'Sensitivity Analysis',
    'Root Cause Analysis',
    'Reduced-Order Modeling',
  ];

  return (
    <section className="about" ref={ref}>
      <p className="about-label">02 / about me</p>

      <div className={`about-grid ${visible ? 'revealed' : ''}`}>
        <div className="about-body">
          <p className="about-text">
            I'm a mechanical and simulation engineer finishing my MS at
            Northeastern. Before grad school I spent three years at{' '}
            <span className="hl">Collins Aerospace</span> building multi-physics
            models and AI surrogates for aerospace systems, and most recently I
            redesigned a water pump on a medical device during my co-op at{' '}
            <span className="hl">Fresenius Medical Care</span>.
          </p>
          <p className="about-text">
            What ties it together is a simple habit: I like to model how a
            physical system behaves, then prove the model against real data.
            Lately I've been blending data-driven modeling into that work,
            making slow, high-fidelity simulations fast enough to actually
            design with.
          </p>
        </div>

        <div className="about-stack">
          <p className="stack-heading">Tools</p>
          <div className="tag-row">
            {tools.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>

          <p className="stack-heading">Methods</p>
          <div className="tag-row">
            {methods.map((m) => (
              <span className="tag" key={m}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;