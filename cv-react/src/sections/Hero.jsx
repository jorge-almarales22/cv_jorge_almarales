import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import fotoPortada from '../assets/foto_portada.png';

const useTypewriter = (text, speed = 45) => {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayText('');
    setIsDone(false);
    indexRef.current = 0;

    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current <= text.length) {
        setDisplayText(text.slice(0, indexRef.current));
      } else {
        setIsDone(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayText, isDone };
};

const description =
  'Ingeniero de sistemas especializado en transformar procesos complejos mediante desarrollo web, gestion de datos e integracion estrategica de IA. Tu infraestructura, optimizada para la era de la inteligencia artificial.';

const Hero = () => {
  const { displayText, isDone } = useTypewriter(description, 38);

  return (
    <section id="hero" className="pt-28 pb-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30 ring-4 ring-blue-50 dark:ring-slate-800 mx-auto">
            <img
              src={fotoPortada}
              alt="Jorge Almarales"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 20%' }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[2rem] md:text-[2.75rem] font-extrabold text-gray-900 dark:text-slate-100 leading-tight mb-3"
          style={{ textShadow: '0 0 40px rgba(59,130,246,0.25)' }}
        >
          Jorge Almarales
        </motion.h1>

        {/* Tagline — clean, no cards, subtle glow */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[1.125rem] md:text-[1.25rem] font-semibold leading-snug max-w-lg mx-auto mb-10"
          style={{ color: '#d7c9c9', textShadow: '0 0 20px rgba(215,201,201,0.2)' }}
        >
          Elevo la eficiencia operativa de tu negocio con Software Inteligente y Analitica de Datos.
        </motion.h2>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl mx-auto rounded-xl overflow-hidden border border-slate-700/40 shadow-2xl shadow-black/10 dark:shadow-black/30"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/90 border-b border-slate-700/40">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>

          {/* Body */}
          <div className="px-5 py-4 bg-[#0d1117]/95 font-mono text-sm leading-relaxed text-left">
            <div className="flex gap-5">
              <span className="text-slate-600 select-none shrink-0 pt-[1px]">1</span>
              <span className="text-[#10b981]">
                {displayText}
                <span
                  className={`inline-block w-[0.6em] h-[1.1em] ml-0.5 align-text-bottom ${
                    isDone
                      ? 'bg-[#10b981]/60 animate-pulse'
                      : 'bg-[#10b981] animate-pulse'
                  }`}
                />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
