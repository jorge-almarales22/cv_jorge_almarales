import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Dashboard de Ventas Retail",
    desc: "Dashboard interactivo en Power BI con KPIs de ventas, márgenes y rotación de inventario, conectado a SQL Server.",
    tech: ["Power BI", "SQL", "DAX"],
  },
  {
    title: "Automatización de Reportes Financieros",
    desc: "Pipeline en Python para consolidar estados financieros desde múltiples fuentes y generar reportes ejecutivos automáticos.",
    tech: ["Python", "Pandas", "Excel"],
  },
  {
    title: "Análisis de Deserción de Clientes",
    desc: "Modelo de machine learning para predecir churn e identificar factores de riesgo, con visualizaciones interactivas.",
    tech: ["Python", "Scikit-learn", "Power BI"],
  },
  {
    title: "ETL de Indicadores Regionales",
    desc: "Proceso ETL para integrar bases de datos de estudios socioeconómicos de América Latina, con validación y limpieza automatizada.",
    tech: ["SQL", "Python", "Stata"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-[1.75rem] md:text-[2.3125rem] font-extrabold text-gray-900 dark:text-slate-100 leading-tight flex items-center gap-3
          before:content-[''] before:block before:w-[3px] before:h-[1.625rem] md:before:h-[2.125rem] before:bg-blue-500 dark:before:bg-blue-400 before:rotate-[15deg] before:rounded-sm before:shrink-0
        ">
          Proyectos Destacados
        </h2>
        <p className="mt-4 text-[0.9375rem] md:text-[1.0625rem] text-gray-500 dark:text-slate-400 max-w-2xl leading-[1.375rem]">
          Una selección de proyectos donde apliqué análisis de datos, visualización y automatización para resolver problemas reales de negocio. 
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -3 }}
            className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] dark:bg-slate-800/60 dark:border-slate-700/80 dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_4px_16px_rgba(59,130,246,0.08)]"
          >
            <div className="w-full h-36 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-slate-700 dark:to-slate-600 rounded-lg mb-5 flex items-center justify-center">
              <svg className="w-10 h-10 text-blue-400 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-500 dark:text-slate-400 leading-[1.375rem] mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map(tech => (
                <span key={tech}                   className="px-2.5 py-1 bg-white border border-blue-100 rounded-full text-[0.6875rem] text-blue-600 font-medium dark:bg-slate-700 dark:border-slate-600 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
