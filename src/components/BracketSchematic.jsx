function BracketSchematic() {
  return (
    <svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }} fontFamily="'Space Grotesk', 'Inter', sans-serif">
      <defs>
        <marker id="arrowAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M2 1 L8 5 L2 9" fill="none" stroke="#f0a44a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="dimTick" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="9" markerHeight="9" orient="auto">
          <path d="M5 1 L5 9" stroke="#9aa7c2" strokeWidth="1.3" />
        </marker>
      </defs>

      <rect x="0" y="0" width="900" height="400" fill="#0d1a26" />

      <line x1="430" y1="330" x2="760" y2="330" stroke="#2a4258" strokeWidth="1.5" />

      <rect x="480" y="312" width="150" height="18" fill="#1a2f42" stroke="#3a5570" strokeWidth="1.6" />
      <rect x="480" y="80" width="18" height="232" fill="#1a2f42" stroke="#3a5570" strokeWidth="1.6" />
      <path d="M498,312 Q498,298 512,298" fill="none" stroke="#3a5570" strokeWidth="1.6" />

      <path d="M480,312 L480,80 L498,80 L498,312 Z" fill="none" stroke="#5eead4" strokeWidth="1.4" strokeDasharray="5 5" opacity="0.5" transform="rotate(-5 489 312)" />
      <text x="430" y="66" fill="#5eead4" fontSize="13" fontFamily="'Space Mono', monospace" opacity="0.75" textAnchor="end">deflected shape</text>
      <path d="M455,84 Q445,74 432,70" fill="none" stroke="#5eead4" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

      <circle cx="489" cy="115" r="4" fill="#0a141d" stroke="#3a5570" strokeWidth="1" />
      <circle cx="489" cy="160" r="4" fill="#0a141d" stroke="#3a5570" strokeWidth="1" />

      <rect x="360" y="98" width="120" height="80" rx="6" fill="#12303a" stroke="#5eead4" strokeWidth="2" />
      <rect x="334" y="126" width="26" height="24" rx="3" fill="#0d2229" stroke="#5eead4" strokeWidth="2" />
      <circle cx="347" cy="138" r="7" fill="#0a181d" stroke="#5eead4" strokeWidth="1.2" />
      <text x="420" y="132" fill="#e6edf3" fontSize="15" textAnchor="middle" fontWeight="600">Camera</text>
      <text x="420" y="153" fill="#5eead4" fontSize="13" textAnchor="middle" fontFamily="'Space Mono', monospace">0.4 kg</text>

      <path d="M480,138 L520,138" stroke="#9aa7c2" strokeWidth="1" strokeDasharray="3 3" />
      <text x="526" y="142" fill="#9aa7c2" fontSize="12" fontFamily="'Space Mono', monospace">bolts to upright face</text>

      <g>
        <circle cx="420" cy="138" r="8" fill="none" stroke="#f0a44a" strokeWidth="1.6" />
        <path d="M420 138 A8 8 0 0 1 428 146 L420 146 Z" fill="#f0a44a" />
        <path d="M412 138 A8 8 0 0 1 420 130 L420 138 Z" fill="#f0a44a" />
        <path d="M420 130 L420 146 M412 138 L428 138" stroke="#f0a44a" strokeWidth="1.4" />
      </g>
      <text x="360" y="115" fill="#9aa7c2" fontSize="11" textAnchor="middle" fontFamily="'Space Mono', monospace">center of mass</text>

      <line x1="420" y1="220" x2="480" y2="220" stroke="#9aa7c2" strokeWidth="1.2" markerStart="url(#dimTick)" markerEnd="url(#dimTick)" />
      <line x1="420" y1="212" x2="420" y2="228" stroke="#9aa7c2" strokeWidth="1" />
      <line x1="480" y1="212" x2="480" y2="228" stroke="#9aa7c2" strokeWidth="1" />
      <rect x="401" y="208" width="98" height="24" rx="4" fill="#0d1a26" />
      <text x="450" y="225" fill="#e6edf3" fontSize="13" textAnchor="middle" fontFamily="'Space Mono', monospace">50 mm offset</text>
      <line x1="420" y1="146" x2="420" y2="212" stroke="#9aa7c2" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

      <line x1="420" y1="148" x2="420" y2="195" stroke="#f0a44a" strokeWidth="2.5" markerEnd="url(#arrowAmber)" />
      <text x="388" y="182" fill="#f0a44a" fontSize="13" textAnchor="end" fontFamily="'Space Mono', monospace">weight</text>
      <line x1="410" y1="138" x2="310" y2="138" stroke="#f0a44a" strokeWidth="2.5" markerEnd="url(#arrowAmber)" />
      <text x="300" y="142" fill="#f0a44a" fontSize="13" textAnchor="end" fontFamily="'Space Mono', monospace">inertia (accel)</text>

      <line x1="470" y1="330" x2="640" y2="330" stroke="#5eead4" strokeWidth="2" />
      <g stroke="#5eead4" strokeWidth="1.4">
        <line x1="480" y1="330" x2="470" y2="344" />
        <line x1="500" y1="330" x2="490" y2="344" />
        <line x1="520" y1="330" x2="510" y2="344" />
        <line x1="540" y1="330" x2="530" y2="344" />
        <line x1="560" y1="330" x2="550" y2="344" />
        <line x1="580" y1="330" x2="570" y2="344" />
        <line x1="600" y1="330" x2="590" y2="344" />
        <line x1="620" y1="330" x2="610" y2="344" />
        <line x1="640" y1="330" x2="630" y2="344" />
      </g>
      <text x="555" y="366" fill="#9aa7c2" fontSize="14" textAnchor="middle" fontFamily="'Space Mono', monospace">foot bolted to desk — fully fixed</text>

      <circle cx="502" cy="306" r="4" fill="#f0a44a" />
      <path d="M506,306 Q580,292 660,310" fill="none" stroke="#9aa7c2" strokeWidth="1.1" strokeDasharray="4 3" />
      <text x="670" y="306" fill="#f0a44a" fontSize="15" fontWeight="600">Max bending stress</text>
      <text x="670" y="327" fill="#9aa7c2" fontSize="13" fontFamily="'Space Mono', monospace">where it wants to bend</text>
    </svg>
  );
}

export default BracketSchematic;