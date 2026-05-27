import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-20 text-center"
    >
      <h2 className="text-3xl font-bold text-maintext mb-6">Contacto</h2>
      <p className="text-text mb-8">Conversamos sobre oportunidades y proyectos.</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="#" className="text-accent hover:text-accent/80"><FiGithub /></a>
        <a href="#" className="text-accent hover:text-accent/80"><FiLinkedin /></a>
        <a href="#" className="text-accent hover:text-accent/80"><FiMail /></a>
      </div>
    </motion.section>
  );
};

export default Contact;
