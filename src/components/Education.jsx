import './Education.css';
import useReveal from './useReveal';

const schools = [
  {
    school: 'Northeastern University',
    degree: 'M.S. Mechanical Engineering',
    location: 'Boston, MA',
    dates: 'Expected Dec 2026',
    detail: 'GPA 3.89 / 4.0',
    coursework: 'Scientific Machine Learning, Advanced Materials, Robot Mechanics & Controls',
  },
  {
    school: 'National Institute of Technology, Warangal',
    degree: 'B.Tech Mechanical Engineering',
    location: 'Warangal, India',
    dates: 'Aug 2018 - May 2022',
    detail: '',
    coursework: '',
  },
];

function Education() {
  const { ref, visible } = useReveal();

  return (
    <section className="education" ref={ref}>
      <p className="edu-label">03 / education</p>

      <div className={`edu-grid layout-stacked ${visible ? 'revealed' : ''}`}>
        {schools.map((s) => (
          <div className="edu-card" key={s.school}>
            <h3 className="edu-school">{s.school}</h3>
            <p className="edu-degree">{s.degree}</p>
            <p className="edu-meta">{s.dates} · {s.location}</p>
            {s.detail && <p className="edu-detail">{s.detail}</p>}
            {s.coursework && (
              <p className="edu-coursework">
                <span className="edu-coursework-label">Coursework: </span>
                {s.coursework}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;