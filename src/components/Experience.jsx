import { useState } from 'react';
import './Experience.css';
import useReveal from './useReveal';

const jobs = [
   {
    company: 'Fresenius Medical Care',
    role: 'R&D Product Engineer, Co-op',
    dates: 'Jan 2026 - Jul 2026',
    location: 'Lawrence, MA',
    bullets: [
      'Root-caused the top field-failure mode on PureFlow SL water pumps and proved a hardware redesign that eliminates the failures behind roughly half of water-pump alarms.',
      'Built the ROI model that won project approval, projecting break-even within 12 months and about $2.5M net savings over 5 years.',
      'Built a MATLAB GUI that cut field-log analysis time by 97% with an automated Python pipeline replacing manual SQL queries.',
    ],
  },
    {
    company: 'Collins Aerospace',
    role: 'Lead Engineer, Research & Technology',
    dates: 'Feb 2022 - Dec 2024',
    location: 'Bengaluru, India',
    bullets: [
      'Built AI-based reduced-order models for 3D solenoid-valve CFD, cutting simulation time from 6 hours to 20 seconds inside 1D system tools.',
      'Secured $80K internal R&D funding by demonstrating proof-of-concepts using Neural ODEs and physics-informed neural networks.',
      'Reached 95% R-squared accuracy and 60% faster model compilation for Boeing 777X air-management systems using Bayesian hyperparameter optimization.',
      'Deployed surrogate-modeling methods into the standard production workflow, two of them classified by Collins as trade secrets.',
    ],
  },
 
];

function Experience() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(0);

  const job = jobs[active];

  return (
    <section className="experience" ref={ref}>
      <p className="exp-label">04 / experience</p>

      <div className={`exp-grid ${visible ? 'revealed' : ''}`}>
        <div className="exp-tabs">
          {jobs.map((j, i) => (
            <button
              key={j.company}
              className={`exp-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {j.company}
            </button>
          ))}
        </div>

        <div className="exp-panel" key={active}>
          <h3 className="exp-role">
            {job.role} <span className="accent">@ {job.company}</span>
          </h3>
          <p className="exp-dates">{job.dates} . {job.location}</p>
          <ul className="exp-bullets">
            {job.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;