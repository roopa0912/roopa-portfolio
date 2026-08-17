import './Projects.css';
import { Link } from 'react-router-dom';
import useReveal from './useReveal';

const projects = [
  {
    id: 'fea-camera-bracket',
    title: 'Margin-Under-Uncertainty FEA: Robot Camera Bracket',
    blurb: 'Static FEA of a robot-mounted camera bracket that failed its alignment spec under motion, redesigned with gussets for 2.2x stiffness at +3% mass.',
    tags: ['Ansys Mechanical', 'SolidWorks', 'FEA'],
    image: 'fea-thumb.png',
  },
  {
    id: 'rom-oscillating-cylinder',
    title: 'Reduced-Order Modeling of Oscillating Cylinder Flow',
    blurb: 'Surrogate model for transient vortex-shedding flow, replacing minutes-long CFD runs with near-instant predictions using nonlinear dimensionality reduction.',
    tags: ['OpenFOAM', 'Python', 'ROM'],
    image:'rom-thumb.png',
  },
];

function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section className="projects" ref={ref}>
      <p className="proj-label">05 / projects</p>

      <div className={`proj-grid ${visible ? 'revealed' : ''}`}>
        {projects.map((p) => (
          <Link to={`/projects/${p.id}`} className="proj-card" key={p.id}>
            <div className="proj-card-image">
              <img src={`${import.meta.env.BASE_URL}${p.image}`} alt={p.title} />
            </div>
            <div className="proj-card-body">
              <h3 className="proj-card-title">{p.title}</h3>
              <p className="proj-card-blurb">{p.blurb}</p>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span className="proj-tag" key={t}>{t}</span>
                ))}
              </div>
              <span className="proj-card-link">View details →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;