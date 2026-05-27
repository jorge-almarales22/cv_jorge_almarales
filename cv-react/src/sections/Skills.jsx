import React from 'react';
import { motion } from 'framer-motion';

const skills = ["Python", "Power BI", "SQL", "Excel", "VBA", "Stata"];

const Skills = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-maintext mb-10">Habilidades</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.span 
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
