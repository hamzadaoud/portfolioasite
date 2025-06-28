import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SkillsRadarChart = ({ data = [] }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 40;

    const animate = () => {
      progressRef.current += 0.02;
      if (progressRef.current > 1) progressRef.current = 1;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background grid
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.2)';
      ctx.lineWidth = 1;
      
      // Draw concentric circles
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, 2 * Math.PI);
        ctx.stroke();
      }

      // Draw axis lines
      const angleStep = (2 * Math.PI) / data.length;
      for (let i = 0; i < data.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * maxRadius;
        const y = centerY + Math.sin(angle) * maxRadius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      // Draw skill labels
      ctx.fillStyle = '#A0A0B8';
      ctx.font = '12px Inter';
      ctx.textAlign = 'center';
      
      for (let i = 0; i < data.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const labelRadius = maxRadius + 20;
        const x = centerX + Math.cos(angle) * labelRadius;
        const y = centerY + Math.sin(angle) * labelRadius;
        
        ctx.fillText(data[i].skill, x, y + 4);
      }

      // Draw skill polygon
      if (progressRef.current > 0) {
        ctx.beginPath();
        ctx.strokeStyle = '#00F5FF';
        ctx.fillStyle = 'rgba(0, 245, 255, 0.1)';
        ctx.lineWidth = 2;
        
        for (let i = 0; i < data.length; i++) {
          const angle = i * angleStep - Math.PI / 2;
          const value = data[i].value * progressRef.current;
          const radius = (value / 100) * maxRadius;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Draw skill points
        ctx.fillStyle = '#00F5FF';
        for (let i = 0; i < data.length; i++) {
          const angle = i * angleStep - Math.PI / 2;
          const value = data[i].value * progressRef.current;
          const radius = (value / 100) * maxRadius;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, 2 * Math.PI);
          ctx.fill();
          
          // Add glow effect
          ctx.shadowColor = '#00F5FF';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, 2 * Math.PI);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      if (progressRef.current < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    // Start animation
    progressRef.current = 0;
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-surface/50 rounded-2xl border border-accent/20 p-8 shadow-neon"
    >
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-full h-auto max-w-md mx-auto"
      />
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
    </motion.div>
  );
};

export default SkillsRadarChart;