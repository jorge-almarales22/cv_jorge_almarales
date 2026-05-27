import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Dashboard Comercial Retail 2024",
    desc: "Dashboard interactivo para seguimiento de KPI comerciales.",
    tech: ["Power BI", "SQL"]
  }
];

const Projects = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-maintext mb-10">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-accent/5 border border-accent/10 p-6 rounded-2xl"
          >
            <div className="w-full h-40 bg-accent/20 rounded-xl mb-4"></div>
            <h3 className="text-xl font-bold text-maintext">{proj.title}</h3>
            <p className="text-sm text-text mt-2">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
