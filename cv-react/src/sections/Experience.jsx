import React from 'react';
import Timeline from '../components/Timeline';

const experiences = [
  {
    role: "Analista Senior de Datos y Reporting",
    company: "Comisión Económica para América Latina y el Caribe (CEPAL)",
    date: "May 2024 - Mar 2026",
    desc: "Elaboré análisis de datos, reportes ejecutivos e indicadores para apoyar la toma de decisiones. Actualicé, estructuré y validé bases de datos para estudios regionales.",
    tags: ["Análisis de datos", "Reporting ejecutivo", "Power BI", "Python", "SQL"]
  },
  {
    role: "Analista de Datos y Finanzas Comerciales",
    company: "BTG Pactual Chile",
    date: "Oct 2023 - May 2024",
    desc: "Generé reportes ejecutivos para el seguimiento de indicadores operacionales y financieros. Analicé y validé transacciones internacionales.",
    tags: ["Análisis financiero", "Reporting", "Excel", "VBA"]
  },
  {
    role: "Analista Senior de Datos y Reporting",
    company: "Comisión Económica para América Latina y el Caribe (CEPAL)",
    date: "May 2024 - Mar 2026",
    desc: "Elaboré análisis de datos, reportes ejecutivos e indicadores para apoyar la toma de decisiones. Actualicé, estructuré y validé bases de datos para estudios regionales.",
    tags: ["Análisis de datos", "Reporting ejecutivo", "Power BI", "Python", "SQL"]
  },
  {
    role: "Analista de Datos y Finanzas Comerciales",
    company: "BTG Pactual Chile",
    date: "Oct 2023 - May 2024",
    desc: "Generé reportes ejecutivos para el seguimiento de indicadores operacionales y financieros. Analicé y validé transacciones internacionales.",
    tags: ["Análisis financiero", "Reporting", "Excel", "VBA"]
  },
  {
    role: "Analista de Datos y Finanzas Comerciales",
    company: "BTG Pactual Chile",
    date: "Oct 2023 - May 2024",
    desc: "Generé reportes ejecutivos para el seguimiento de indicadores operacionales y financieros. Analicé y validé transacciones internacionales.",
    tags: ["Análisis financiero", "Reporting", "Excel", "VBA"]
  },
  {
    role: "Analista de Datos y Finanzas Comerciales",
    company: "BTG Pactual Chile",
    date: "Oct 2023 - May 2024",
    desc: "Generé reportes ejecutivos para el seguimiento de indicadores operacionales y financieros. Analicé y validé transacciones internacionales.",
    tags: ["Análisis financiero", "Reporting", "Excel", "VBA"]
  },
  {
    role: "Analista de Datos y Finanzas Comerciales",
    company: "BTG Pactual Chile",
    date: "Oct 2023 - May 2024",
    desc: "Generé reportes ejecutivos para el seguimiento de indicadores operacionales y financieros. Analicé y validé transacciones internacionales.",
    tags: ["Análisis financiero", "Reporting", "Excel", "VBA"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-24 pb-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-[1.75rem] md:text-[2.3125rem] font-extrabold text-gray-900 dark:text-slate-100 leading-tight flex items-center gap-3
          before:content-[''] before:block before:w-[3px] before:h-[1.625rem] md:before:h-[2.125rem] before:bg-blue-500 dark:before:bg-blue-400 before:rotate-[15deg] before:rounded-sm before:shrink-0
        ">
          Trayectoria Profesional
        </h2>
        <p className="mt-4 text-[0.9375rem] md:text-[1.0625rem] text-gray-500 dark:text-slate-400 max-w-2xl leading-[1.375rem]">
          Mi recorrido en análisis de datos, BI, automatización y formación aplicada en ciencia de datos.
        </p>
      </div>
      <Timeline items={experiences} />
    </section>
  );
};

export default Experience;
