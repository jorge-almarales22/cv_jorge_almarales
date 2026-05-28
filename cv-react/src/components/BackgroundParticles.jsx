import { useState, useEffect, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(() => {}, []);

  const options = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 180, links: { opacity: 0.25, color: "#3b82f6" } },
      },
    },
    particles: {
      color: { value: "#3b82f6" },
      links: { color: "#3b82f6", distance: 150, enable: true, opacity: 0.15, width: 1 },
      move: { enable: true, speed: 0.8, direction: "none", random: false, straight: false, outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 800 }, value: 75 },
      opacity: { value: 0.25 },
      shape: { type: "circle" },
      size: { value: { min: 1.5, max: 4 } },
    },
    detectRetina: false,
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
      style={{
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
      }}
    />
  );
};

export default BackgroundParticles;
