import React, { useEffect, useRef } from "react";

export default function LiquidGlassEffect({ children, className = "" }) {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create liquid blobs
    const createBlob = (index) => {
      const blob = document.createElement("div");
      blob.className = "liquid-blob";
      blob.style.cssText = `
                position: absolute;
                width: ${Math.random() * 200 + 100}px;
                height: ${Math.random() * 200 + 100}px;
                background: radial-gradient(circle, 
                    rgba(255, 255, 255, 0.1) 0%, 
                    rgba(255, 255, 255, 0.05) 50%, 
                    transparent 20%);
                border-radius: 50%;
                pointer-events: none;
                filter: blur(1px);
                mix-blend-mode: plus-lighter;
                animation: liquidFloat${index} ${
        15 + Math.random() * 10
      }s infinite linear;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                transform-origin: center center;
            `;
      return blob;
    };

    // Add CSS animations
    const style = document.createElement("style");
    style.textContent = `
            @keyframes liquidFloat0 {
                0%, 100% { 
                    transform: translate(0, 0) rotate(0deg) scale(1);
                    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                }
                25% { 
                    transform: translate(50px, -30px) rotate(90deg) scale(1.1);
                    border-radius: 50% 60% 40% 30% / 50% 60% 30% 60%;
                }
                50% { 
                    transform: translate(-20px, 40px) rotate(180deg) scale(0.9);
                    border-radius: 30% 60% 70% 40% / 50% 40% 60% 30%;
                }
                75% { 
                    transform: translate(-40px, -20px) rotate(270deg) scale(1.05);
                    border-radius: 40% 30% 60% 70% / 40% 50% 60% 30%;
                }
            }
            @keyframes liquidFloat1 {
                0%, 100% { 
                    transform: translate(0, 0) rotate(45deg) scale(1);
                    border-radius: 40% 60% 50% 30% / 70% 20% 80% 40%;
                }
                33% { 
                    transform: translate(-60px, 20px) rotate(135deg) scale(1.15);
                    border-radius: 60% 40% 30% 70% / 40% 60% 50% 30%;
                }
                66% { 
                    transform: translate(30px, -50px) rotate(225deg) scale(0.85);
                    border-radius: 50% 30% 70% 40% / 60% 40% 30% 70%;
                }
            }
            @keyframes liquidFloat2 {
                0%, 100% { 
                    transform: translate(0, 0) rotate(90deg) scale(1);
                    border-radius: 70% 30% 40% 60% / 30% 70% 40% 60%;
                }
                40% { 
                    transform: translate(40px, 60px) rotate(180deg) scale(1.2);
                    border-radius: 30% 70% 60% 40% / 50% 30% 70% 40%;
                }
                80% { 
                    transform: translate(-30px, -40px) rotate(270deg) scale(0.8);
                    border-radius: 60% 40% 30% 70% / 40% 60% 30% 70%;
                }
            }
        `;
    document.head.appendChild(style);

    // Create multiple blobs
    for (let i = 0; i < 3; i++) {
      const blob = createBlob(i);
      container.appendChild(blob);
      blobsRef.current.push(blob);
    }

    return () => {
      document.head.removeChild(style);
      blobsRef.current.forEach((blob) => {
        if (blob.parentNode) {
          blob.parentNode.removeChild(blob);
        }
      });
      blobsRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`liquid-glass-container ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        background: `
                    linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.1) 0%,
                        rgba(255, 255, 255, 0.05) 25%,
                        rgba(255, 255, 255, 0.02) 50%,
                        rgba(255, 255, 255, 0.05) 75%,
                        rgba(255, 255, 255, 0.1) 100%
                    ),
                    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)
                `,
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3),
                    inset 0 -1px 0 rgba(255, 255, 255, 0.1)
                `,
        borderRadius: "20px",
      }}
    >
      {/* Liquid surface effect */}
      <div
        className="liquid-surface"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)",
          animation: "liquidWave 3s ease-in-out infinite",
          borderRadius: "20px 20px 0 0",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

      <style jsx>{`
        @keyframes liquidWave {
          0%,
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(100%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
