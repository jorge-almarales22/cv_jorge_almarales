import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 flex items-center justify-center shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30 ring-4 ring-blue-50 dark:ring-slate-800 mx-auto">
            <svg className="w-20 h-20 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[2rem] md:text-[2.75rem] font-extrabold text-gray-900 dark:text-slate-100 leading-tight mb-4"
        >
          Jorge Almarales
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[0.9375rem] md:text-[1.0625rem] text-gray-500 dark:text-slate-400 leading-[1.375rem] max-w-xl mx-auto"
        >
          Ingeniero Comercial mención Economía, especializado en análisis de datos, Business Intelligence, reporting ejecutivo y automatización de procesos. Apasionado por transformar datos en decisiones estratégicas.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
