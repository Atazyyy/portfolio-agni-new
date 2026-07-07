import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  pulse: number;
  pulseSpeed: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export function useInteractiveBackground(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, isNear: false });
  const particlesRef = useRef<Particle[]>([]);
  const starsRef = useRef<Star[]>([]);
  const gridLinesRef = useRef<{ x1: number; y1: number; x2: number; y2: number; alpha: number }[]>([]);

  const colors = ['#38BDF8', '#818CF8', '#A78BFA', '#C084FC', '#22D3EE', '#34D399'];

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 25000), 60);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));
  }, []);

  const initStars = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 10000), 150);
    starsRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2,
    }));
  }, []);

  const initGridLines = useCallback((width: number, height: number) => {
    const spacing = 80;
    gridLinesRef.current = [];

    for (let x = 0; x < width; x += spacing) {
      gridLinesRef.current.push({
        x1: x, y1: 0,
        x2: x, y2: height,
        alpha: 0.03 + Math.random() * 0.02,
      });
    }

    for (let y = 0; y < height; y += spacing) {
      gridLinesRef.current.push({
        x1: 0, y1: y,
        x2: width, y2: y,
        alpha: 0.03 + Math.random() * 0.02,
      });
    }
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear with gradient overlay
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, 0,
      width / 2, height / 2, Math.max(width, height) * 0.7
    );
    gradient.addColorStop(0, 'rgba(16, 16, 24, 1)');
    gradient.addColorStop(0.5, 'rgba(11, 11, 15, 1)');
    gradient.addColorStop(1, 'rgba(6, 6, 10, 1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw subtle grid
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.03)';
    ctx.lineWidth = 1;
    gridLinesRef.current.forEach(line => {
      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.stroke();
    });

    // Draw stars
    starsRef.current.forEach(star => {
      star.twinklePhase += star.twinkleSpeed;
      const alpha = star.alpha * (0.5 + 0.5 * Math.sin(star.twinklePhase));

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();
    });

    // Draw particles
    particlesRef.current.forEach(p => {
      p.pulse += p.pulseSpeed;
      const pulseFactor = 0.5 + 0.5 * Math.sin(p.pulse);
      const currentAlpha = p.alpha * (0.7 + 0.3 * pulseFactor);

      // Mouse interaction
      const dx = mouseRef.current.x - p.x;
      const dy = mouseRef.current.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        const force = (150 - dist) / 150;
        p.vx -= (dx / dist) * force * 0.5;
        p.vy -= (dy / dist) * force * 0.5;
      }

      // Update position
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Boundary check
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw glow
      const glowGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 8);
      glowGradient.addColorStop(0, p.color + Math.round(currentAlpha * 0.4).toString(16).padStart(2, '0'));
      glowGradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 8, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Draw core
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * pulseFactor, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = currentAlpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    // Draw connections
    particlesRef.current.forEach((p1, i) => {
      particlesRef.current.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.15;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    // Mouse glow effect
    if (mouseRef.current.x !== 0 || mouseRef.current.y !== 0) {
      const mouseGradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 200
      );
      mouseGradient.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
      mouseGradient.addColorStop(0.5, 'rgba(129, 140, 248, 0.03)');
      mouseGradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 200, 0, Math.PI * 2);
      ctx.fillStyle = mouseGradient;
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(draw);
  }, [canvasRef]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    initParticles(canvas.width, canvas.height);
    initStars(canvas.width, canvas.height);
    initGridLines(canvas.width, canvas.height);
  }, [canvasRef, initParticles, initStars, initGridLines]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  }, [canvasRef]);

  useEffect(() => {
    handleResize();
    draw();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleResize, handleMouseMove, draw]);

  return null;
}
