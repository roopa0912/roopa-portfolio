function CylinderDomain() {
  return (
    <svg viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }} fontFamily="'Space Grotesk', 'Inter', sans-serif">
      <defs>
        <marker id="flowArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M1 1 L9 5 L1 9" fill="none" stroke="#f0a44a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="oscArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M1 1 L9 5 L1 9" fill="none" stroke="#5eead4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <rect x="0" y="0" width="900" height="480" fill="#0d1a26" />

      <rect x="150" y="90" width="600" height="300" fill="#111f2c" stroke="#3a5570" strokeWidth="2" />

      <text x="150" y="66" fill="#f0a44a" fontSize="16" fontWeight="700">Inlet</text>
      <text x="150" y="84" fill="#9aa7c2" fontSize="12" fontFamily="'Space Mono', monospace">U∞ = 1 m/s</text>

      <text x="750" y="66" fill="#e6edf3" fontSize="16" fontWeight="700" textAnchor="end">Outlet</text>
      <text x="750" y="84" fill="#9aa7c2" fontSize="12" fontFamily="'Space Mono', monospace" textAnchor="end">p = 0 (ref)</text>

      <line x1="90" y1="150" x2="145" y2="150" stroke="#f0a44a" strokeWidth="2.5" markerEnd="url(#flowArrow)" />
      <line x1="90" y1="240" x2="145" y2="240" stroke="#f0a44a" strokeWidth="2.5" markerEnd="url(#flowArrow)" />
      <line x1="90" y1="330" x2="145" y2="330" stroke="#f0a44a" strokeWidth="2.5" markerEnd="url(#flowArrow)" />

      <circle cx="330" cy="240" r="34" fill="#1a3a4a" stroke="#5eead4" strokeWidth="2.5" />
      <text x="330" y="245" fill="#e6edf3" fontSize="13" textAnchor="middle" fontWeight="600" fontFamily="'Space Mono', monospace">D = 1m</text>

      <line x1="330" y1="185" x2="330" y2="150" stroke="#5eead4" strokeWidth="2" markerEnd="url(#oscArrow)" />
      <line x1="330" y1="295" x2="330" y2="330" stroke="#5eead4" strokeWidth="2" markerEnd="url(#oscArrow)" />
      <text x="355" y="175" fill="#5eead4" fontSize="13" fontFamily="'Space Mono', monospace">oscillates</text>
      <text x="355" y="192" fill="#5eead4" fontSize="13" fontFamily="'Space Mono', monospace">(cross-flow)</text>

      <text x="150" y="410" fill="#9aa7c2" fontSize="12" textAnchor="middle" fontFamily="'Space Mono', monospace">-8D</text>
      <text x="330" y="410" fill="#9aa7c2" fontSize="12" textAnchor="middle" fontFamily="'Space Mono', monospace">0</text>
      <text x="130" y="94" fill="#9aa7c2" fontSize="12" textAnchor="end" fontFamily="'Space Mono', monospace">+6D</text>
      <text x="130" y="392" fill="#9aa7c2" fontSize="12" textAnchor="end" fontFamily="'Space Mono', monospace">-6D</text>

      <rect x="540" y="410" width="330" height="56" rx="6" fill="#111f2c" stroke="#2a4258" strokeWidth="1.2" />
      <line x1="560" y1="428" x2="595" y2="428" stroke="#f0a44a" strokeWidth="2.5" markerEnd="url(#flowArrow)" />
      <text x="605" y="432" fill="#9aa7c2" fontSize="12" fontFamily="'Space Mono', monospace">Flow direction (U∞)</text>
      <circle cx="577" cy="450" r="9" fill="#1a3a4a" stroke="#5eead4" strokeWidth="1.6" />
      <text x="605" y="454" fill="#9aa7c2" fontSize="12" fontFamily="'Space Mono', monospace">Cylinder (no-slip wall)</text>
    </svg>
  );
}

export default CylinderDomain;