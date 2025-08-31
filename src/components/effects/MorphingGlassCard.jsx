import React, { useState } from "react";

export default function MorphingGlassCard({ children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`morphing-glass-card ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        padding: "24px",
        background: `
                    linear-gradient(135deg, 
                        rgba(255, 255, 255, ${isHovered ? 0.15 : 0.08}) 0%,
                        rgba(255, 255, 255, ${isHovered ? 0.08 : 0.03}) 50%,
                        rgba(255, 255, 255, ${isHovered ? 0.15 : 0.08}) 100%
                    )
                `,
        backdropFilter: `blur(${isHovered ? 25 : 15}px) saturate(180%)`,
        WebkitBackdropFilter: `blur(${isHovered ? 25 : 15}px) saturate(180%)`,
        border: `1px solid rgba(255, 255, 255, ${isHovered ? 0.3 : 0.15})`,
        borderRadius: isHovered ? "25px" : "20px",
        boxShadow: `
                    0 ${isHovered ? 20 : 8}px ${
          isHovered ? 60 : 32
        }px rgba(0, 0, 0, ${isHovered ? 0.4 : 0.2}),
                    inset 0 1px 0 rgba(255, 255, 255, ${isHovered ? 0.4 : 0.2}),
                    inset 0 -1px 0 rgba(255, 255, 255, 0.1)
                `,
        transform: `translateY(${isHovered ? -8 : 0}px) scale(${
          isHovered ? 1.02 : 1
        })`,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
      }}
    >
      {/* Animated highlight */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: isHovered ? "0%" : "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
          transition: "left 0.6s ease",
          pointerEvents: "none",
        }}
      />

      {/* Liquid edge glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "inherit",
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          filter: "blur(1px)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
