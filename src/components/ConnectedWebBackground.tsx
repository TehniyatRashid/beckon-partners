import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export const ConnectedWebBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate responsive nodes
    const nodeCount = Math.floor(Math.min(width, height) / 22); // Adapt count to screen size
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 1.8,
        baseAlpha: Math.random() * 0.35 + 0.35
      });
    }

    // Interactive mouse state
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 250 // Proximity interaction radius
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & render nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        // Bounce boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Distance from mouse
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        const mouseHoverRatio = Math.max(0, 1 - distToMouse / mouse.radius);

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const nx = other.x - node.x;
          const ny = other.y - node.y;
          const dist = Math.sqrt(nx * nx + ny * ny);

          const maxDist = 160;
          if (dist < maxDist) {
            const distRatio = 1 - dist / maxDist;
            
            // Calculate hover glow for connection line
            const midX = (node.x + other.x) / 2;
            const midY = (node.y + other.y) / 2;
            const midDistToMouse = Math.sqrt((mouse.x - midX) ** 2 + (mouse.y - midY) ** 2);
            const lineHover = Math.max(0, 1 - midDistToMouse / mouse.radius);

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);

            if (lineHover > 0) {
              // Highlighted & bold dark grey web line on mouse hover
              const strokeAlpha = Math.min(0.95, 0.35 + lineHover * 0.6);
              ctx.strokeStyle = `rgba(20, 24, 33, ${strokeAlpha})`;
              ctx.lineWidth = 1.5 + lineHover * 1.8;
            } else {
              // Clearly visible dark grey ambient web line
              const strokeAlpha = Math.min(0.45, 0.12 + distRatio * 0.28);
              ctx.strokeStyle = `rgba(45, 52, 65, ${strokeAlpha})`;
              ctx.lineWidth = 1.0;
            }

            ctx.stroke();
          }
        }

        // Draw Node Point
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + mouseHoverRatio * 2.8, 0, Math.PI * 2);

        if (mouseHoverRatio > 0) {
          // Darkened bold hover dot with charcoal glow
          ctx.fillStyle = `rgba(10, 12, 16, ${Math.min(1, 0.8 + mouseHoverRatio * 0.2)})`;
          ctx.shadowColor = 'rgba(10, 12, 16, 0.5)';
          ctx.shadowBlur = 10;
        } else {
          // Visible dark grey default dot
          ctx.fillStyle = `rgba(35, 42, 54, ${node.baseAlpha})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
