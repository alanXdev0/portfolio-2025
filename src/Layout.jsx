import React, { useState, useEffect, useRef } from "react";
import {
  User,
  Briefcase,
  FolderOpen,
  Mail,
  Download,
  Laptop,
} from "lucide-react";
import BackgroundImage from "./assets/img/bg.jpeg";

const navigationItems = [
  { title: "Home", id: "hero", icon: Laptop },
  { title: "About", id: "about", icon: User },
  { title: "Experience", id: "experience", icon: Briefcase },
  { title: "Projects", id: "projects", icon: FolderOpen },
  { title: "Contact", id: "contact", icon: Mail },
];

export default function Layout({ children }) {
  const [activeSection, setActiveSection] = useState("hero");
  const observer = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    if (!mainRef.current) return;

    // Detecta si el scroll real ocurre en <main> o en el viewport
    const pickRoot = () => {
      const el = mainRef.current;
      if (!el) return null;
      return el.scrollHeight > el.clientHeight + 1 ? el : null;
    };

    let currentRoot = pickRoot();

    // Mantenemos el ratio por sección para decidir el activo solo con IO
    const ratios = new Map();

    const setAllRatiosToZero = () => {
      const scope = currentRoot || document;
      scope
        .querySelectorAll("section[id]")
        .forEach((el) => ratios.set(el.id, 0));
    };

    const pickMaxRatioId = () => {
      let bestId = null;
      let best = 0;
      ratios.forEach((v, k) => {
        if (v > best) {
          best = v;
          bestId = k;
        }
      });
      return bestId;
    };

    const cb = (entries) => {
      // Actualiza ratios solo con lo que reporta el IO
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (!id) return;
        // Si está intersectando, guarda su ratio; si no, bájalo a 0
        ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
      });

      const nextId = pickMaxRatioId();
      if (nextId && nextId !== activeSection) {
        setActiveSection(nextId);
      }
    };

    let io = new IntersectionObserver(cb, {
      root: currentRoot,
      // Umbrales finos para que el ratio sea más preciso
      threshold: Array.from({ length: 21 }, (_, i) => i / 20), // 0, 0.05, ..., 1
      rootMargin: "-20% 0px -50% 0px",
    });

    const observeAll = () => {
      const scope = currentRoot || document;
      scope.querySelectorAll("section[id]").forEach((el) => io.observe(el));
      // Inicializa el mapa con ids conocidos
      setAllRatiosToZero();
    };
    const unobserveAll = () => {
      const scope = currentRoot || document;
      scope.querySelectorAll("section[id]").forEach((el) => io.unobserve(el));
    };

    observeAll();

    // Si cambia el layout/resize y el root efectivo, re-crea el IO
    const onResize = () => {
      const newRoot = pickRoot();
      if (newRoot !== currentRoot) {
        unobserveAll();
        io.disconnect();
        currentRoot = newRoot;
        io = new IntersectionObserver(cb, {
          root: currentRoot,
          threshold: Array.from({ length: 21 }, (_, i) => i / 20),
          rootMargin: "-20% 0px -50% 0px",
        });
        observeAll();
      }
    };
    window.addEventListener("resize", onResize);

    // Re-engancha si cambian las secciones dentro del scope
    const mo = new MutationObserver(() => {
      unobserveAll();
      io.disconnect();
      io = new IntersectionObserver(cb, {
        root: currentRoot,
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
        rootMargin: "-20% 0px -50% 0px",
      });
      observeAll();
    });
    mo.observe(currentRoot || document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("resize", onResize);
      mo.disconnect();
      unobserveAll();
      io.disconnect();
    };
  }, [activeSection]);

  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0,
      mouseY = 0;
    let outlineX = 0,
      outlineY = 0;
    let animationId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      animationId = requestAnimationFrame(animateOutline);
    };

    const handleMouseEnter = () => cursorOutline.classList.add("hover");
    const handleMouseLeave = () => cursorOutline.classList.remove("hover");

    const addListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    const removeListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationId = requestAnimationFrame(animateOutline);
    addListeners();

    const mutationObserver = new MutationObserver((mutations) => {
      removeListeners();
      addListeners();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      removeListeners();
      mutationObserver.disconnect();
    };
  }, []);

  const handleDownload = async () => {
    const file = await import("./assets/files/Alan_Anaya_CV.pdf");
    window.open(file.default, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans custom-cursor-area print:bg-white print:text-black">
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>

      {/* Background */}
      <div className="fixed inset-0 z-0 print:hidden">
        <img
          src={BackgroundImage}
          height={"100%"}
          width={"100%"}
          className="w-full h-full"
        />
      </div>

      {/* Sidebar Navigation */}
      <aside className="fixed inset-y-0 left-0 flex flex-col gap-3 sm:gap-4 py-6 px-3 items-center bg-transparent z-50 print:hidden">
        {navigationItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.title}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              title={item.title}
              aria-label={`Go to ${item.title}`}
              className={`liquid-glass-nav-item w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 will-change-transform ${
                isActive
                  ? "bg-white text-black scale-105 shadow-md"
                  : "text-white hover:scale-105"
              }`}
              style={{
                background: isActive
                  ? "white"
                  : `
                                        linear-gradient(135deg, 
                                            rgba(255, 255, 255, 0.15) 0%,
                                            rgba(255, 255, 255, 0.05) 50%,
                                            rgba(255, 255, 255, 0.15) 100%
                                        )
                                    `,
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: isActive
                  ? "0 8px 32px rgba(255, 255, 255, 0.3)"
                  : `
                                        0 4px 16px rgba(0, 0, 0, 0.3),
                                        inset 0 1px 0 rgba(255, 255, 255, 0.3)
                                    `,
              }}
            >
              <item.icon className="w-4 h-4" />
            </a>
          );
        })}

        <button
          onClick={handleDownload}
          title="Download Resume"
          aria-label="Download resume as PDF"
          className="liquid-glass-nav-item w-10 h-10 mt-auto rounded-full flex items-center justify-center transition-all duration-300 text-white hover:scale-105 will-change-transform"
          style={{
            background: `
                            linear-gradient(135deg, 
                                rgba(255, 255, 255, 0.15) 0%,
                                rgba(255, 255, 255, 0.05) 50%,
                                rgba(255, 255, 255, 0.15) 100%
                            )
                        `,
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: `
                            0 4px 16px rgba(0, 0, 0, 0.3),
                            inset 0 1px 0 rgba(255, 255, 255, 0.3)
                        `,
          }}
        >
          <Download className="w-4 h-4" />
        </button>
      </aside>

      {/* Main Content */}
      <main
        ref={mainRef}
        className="relative z-10 flex flex-col items-center w-full px-4 custom-scrollbar overflow-y-auto min-h-screen sm:pl-20 md:pl-24 lg:pl-28 print:pl-0 print:px-8"
      >
        {children}
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&display=swap");

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 2rem;
        }
        body,
        * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        * {
          box-sizing: border-box;
          will-change: auto;
        }

        /* Enhanced Glass Card Effect */
        .glass-card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.1) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(255, 255, 255, 0.1);
        }

        /* Liquid Glass Navigation Items */
        .liquid-glass-nav-item:hover {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.25) 100%
          ) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.4),
            0 0 20px rgba(255, 255, 255, 0.2) !important;
        }

        /* Animations */
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
          will-change: opacity, transform;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section {
          scroll-margin-top: 4rem;
        }

        /* Transitions */
        button,
        a,
        .glass-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Print Styles */
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            transition: none !important;
            animation: none !important;
          }

          body {
            background: white !important;
            color: black !important;
          }

          .glass-card {
            background: rgba(250, 250, 250, 1) !important;
            border: 1px solid rgba(0, 0, 0, 0.1) !important;
            backdrop-filter: none !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          span,
          div,
          svg {
            color: black !important;
            opacity: 1 !important;
          }

          .text-white,
          .text-white\\/90,
          .text-white\\/80,
          .text-white\\/70 {
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
}
