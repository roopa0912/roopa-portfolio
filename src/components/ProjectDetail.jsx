import { useParams, useNavigate } from 'react-router-dom';
import { projectData } from './projectData';
import BracketSchematic from './BracketSchematic';
import './ProjectDetail.css';
import CylinderDomain from './CylinderDomain';

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId];

  const goToProjects = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!project) {
    return (
      <div className="detail-page">
        <button onClick={goToProjects} className="detail-back">← Back to projects</button>
        <p className="detail-notfound">Project not found.</p>
      </div>
    );
  }

  const renderBlock = (block, i) => {
    switch (block.type) {
      case 'text':
        return <p key={i} className="detail-text">{block.value}</p>;

      case 'image':
        return (
          <figure key={i} className="detail-figure">
            <img src={`${import.meta.env.BASE_URL}${block.src}`} alt={block.caption || ''} />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        );

      case 'table':
        return (
          <div key={i} className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  {block.headers.map((h, j) => <th key={j}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) => <td key={k}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'schematic':
        return (
          <div key={i} className="detail-schematic">
            {block.name === 'cylinder-domain' ? <CylinderDomain /> : <BracketSchematic />}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="detail-page">
      <button onClick={goToProjects} className="detail-back">← Back to projects</button>

      <header className="detail-header">
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-tagline">{project.tagline}</p>
        <div className="detail-tags">
          {project.tags.map((t) => <span key={t} className="detail-tag">{t}</span>)}
        </div>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="detail-github">
            View code on GitHub →
          </a>
        )}
      </header>

      <article className="detail-body">
        {project.sections.map((section, i) => (
          <section key={i} className="detail-section">
            {section.heading && <h2 className="detail-heading">{section.heading}</h2>}
            {section.content.map(renderBlock)}
          </section>
        ))}
      </article>

      <button onClick={goToProjects} className="detail-back detail-back-bottom">← Back to projects</button>
    </div>
  );
}

export default ProjectDetail;