import { useRef, useEffect } from 'react';
import './FlowField.css';

function FlowField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        resize();
        const freestream = 1.6;
        const vortices = [];
        const rows = 2;
        const perRow = 5;
        const spacingX = canvas.width / (perRow + 1);
        const gapY = 70;

        for (let r = 0; r< rows; r++) {
            for (let i = 0; i < perRow; i++) {
                vortices.push({
                    x: spacingX * (i+1) + (r === 1 ? spacingX / 2 : 0), //
                    y: canvas.height / 2 + (r === 0 ? -gapY / 2: gapY /2),
                    strength: r === 0 ? 350:-350, 
                });
            }
        }

        function velocityAt(px, py) {
            let u = freestream;
            let v= 0;

            for (const vort of vortices) {
                const dx = px - vort.x;
                const dy = py - vort.y;
                const distSq = dx * dx + dy * dy + 400;

                u += (-vort.strength * dy) / distSq;
                v += (vort.strength * dx) / distSq;
            }

            return {u, v};
        }

        const particles = [];
        const particleCount = 450;

        function spawnParticle(randomX) {
            return {
                x: randomX ? Math.random() * canvas.width : 0,
                y: Math.random() * canvas.height,
                age: 0,
                life: 150 + Math.random() * 150,
            };
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(spawnParticle(true));
        }

        window.addEventListener('resize', resize);

        let animationId;

        function draw() {
            ctx.fillStyle = 'rgba(13, 26, 38, 0.25)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'rgba(94, 234, 212, 0.55)';

            for (const p of particles) {
                const { u , v } = velocityAt(p.x, p.y);

                p.x += u;
                p.y += v;
                p.age += 1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
                ctx.fill();

                if (
                    p.x > canvas.width ||
                    p.x < 0 || 
                    p.y < 0 || 
                    p.y > canvas.height ||
                    p.age > p.life
                ) {
                    Object.assign(p, spawnParticle(true));
                }
            }

            animationId = requestAnimationFrame(draw);
        }
        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);
    return <canvas ref={canvasRef} className="flow-field" />;
}

export default FlowField;