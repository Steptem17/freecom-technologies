import React, { useEffect, useRef } from 'react';

const CircuitBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track window resizes
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Grid details for circuit lines
    const gridSize = 48;
    const nodes = [];
    const particles = [];

    // Pre-calculate grid node junctions
    const columns = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);

    // Generate static junctions (motherboard nodes) occasionally
    for (let c = 1; c < columns; c++) {
      for (let r = 1; r < rows; r++) {
        if (Math.random() < 0.15) {
          nodes.push({
            x: c * gridSize,
            y: r * gridSize,
            size: Math.random() * 2 + 1.5,
            pulseState: Math.random() * Math.PI
          });
        }
      }
    }

    // Particle class (flowing electrons)
    class Electron {
      constructor() {
        this.reset();
      }

      reset() {
        // Spawn along grid intersections
        const col = Math.floor(Math.random() * (columns - 2)) + 1;
        const row = Math.floor(Math.random() * (rows - 2)) + 1;
        this.x = col * gridSize;
        this.y = row * gridSize;
        
        // Travel direction (horizontal or vertical along grid lines)
        const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
        this.angle = angles[Math.floor(Math.random() * angles.length)];
        this.speed = Math.random() * 0.8 + 0.6; // slow, elegant speed
        this.length = Math.random() * 80 + 40; // path length before reset
        this.distanceTraveled = 0;
        this.opacity = Math.random() * 0.4 + 0.2;
      }

      update() {
        const dx = Math.cos(this.angle) * this.speed;
        const dy = Math.sin(this.angle) * this.speed;
        this.x += dx;
        this.y += dy;
        this.distanceTraveled += Math.sqrt(dx * dx + dy * dy);

        // Turn at 90 degrees occasionally at intersections
        if (
          Math.floor(this.x) % gridSize < 1 &&
          Math.floor(this.y) % gridSize < 1 &&
          Math.random() < 0.25
        ) {
          // Choose a new angle that isn't straight back
          const possibleAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].filter(
            (a) => Math.abs(a - this.angle) !== Math.PI
          );
          this.angle = possibleAngles[Math.floor(Math.random() * possibleAngles.length)];
        }

        if (this.distanceTraveled >= this.length || this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(13, 148, 136, ${this.opacity})`;
        ctx.shadowColor = '#0d9488';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    // Initialize electrons
    const maxParticles = Math.min(35, Math.floor((width * height) / 45000));
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Electron());
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint circuit tracks (horizontal and vertical lines)
      ctx.strokeStyle = 'rgba(13, 148, 136, 0.035)'; // very faint, non-distracting
      ctx.lineWidth = 1;

      // Draw vertical grid traces
      for (let c = 1; c < columns; c++) {
        ctx.beginPath();
        ctx.moveTo(c * gridSize, 0);
        ctx.lineTo(c * gridSize, height);
        ctx.stroke();
      }

      // Draw horizontal grid traces
      for (let r = 1; r < rows; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * gridSize);
        ctx.lineTo(width, r * gridSize);
        ctx.stroke();
      }

      // Draw static nodes (junction circles)
      nodes.forEach((node) => {
        node.pulseState += 0.015;
        const pulseRatio = (Math.sin(node.pulseState) + 1) / 2;
        const opacity = 0.05 + pulseRatio * 0.15;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(13, 148, 136, ${opacity})`;
        ctx.fill();

        // Outer ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + 2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(13, 148, 136, ${opacity * 0.5})`;
        ctx.stroke();
      });

      // Update & Draw flowing electrons
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block z-0 pointer-events-none"
    />
  );
};

export default CircuitBackground;
