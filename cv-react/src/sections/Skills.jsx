import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiPostgresql,
  SiR,
  SiLooker,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiGit,
} from 'react-icons/si';
import { FaChartBar, FaFileExcel, FaChartPie, FaCode } from 'react-icons/fa';
import { FiBarChart2, FiTrendingUp } from 'react-icons/fi';

const iconMap = {
  Python: <SiPython className="w-[15px] h-[15px]" style={{ color: '#3776AB' }} />,
  SQL: <SiPostgresql className="w-[15px] h-[15px]" style={{ color: '#336791' }} />,
  R: <SiR className="w-[15px] h-[15px]" style={{ color: '#276DC3' }} />,
  VBA: <span className="text-[11px] font-bold text-blue-600">VBA</span>,
  'Power BI': <FaChartBar className="w-[15px] h-[15px]" style={{ color: '#F2C811' }} />,
  Excel: <FaFileExcel className="w-[15px] h-[15px]" style={{ color: '#217346' }} />,
  Tableau: <FaChartPie className="w-[15px] h-[15px]" style={{ color: '#E97627' }} />,
  'Looker Studio': <SiLooker className="w-[15px] h-[15px]" style={{ color: '#4285F4' }} />,
  Pandas: <SiPandas className="w-[15px] h-[15px]" style={{ color: '#150458' }} />,
  NumPy: <SiNumpy className="w-[15px] h-[15px]" style={{ color: '#013243' }} />,
  'Scikit-learn': <SiScikitlearn className="w-[15px] h-[15px]" style={{ color: '#F7931E' }} />,
  Matplotlib: <FiBarChart2 className="w-[15px] h-[15px]" style={{ color: '#11557C' }} />,
  Jupyter: <SiJupyter className="w-[15px] h-[15px]" style={{ color: '#F37626' }} />,
  Git: <SiGit className="w-[15px] h-[15px]" style={{ color: '#F05032' }} />,
  'VS Code': <FaCode className="w-[15px] h-[15px]" style={{ color: '#007ACC' }} />,
  Stata: <FiTrendingUp className="w-[15px] h-[15px]" style={{ color: '#1A476F' }} />,
};

const skillGroups = [
  {
    category: 'Lenguajes',
    skills: [
      { name: 'Python', stars: 3 },
      { name: 'SQL', stars: 3 },
      { name: 'R', stars: 2 },
      { name: 'VBA', stars: 2 },
    ],
  },
  {
    category: 'BI & Visualización',
    skills: [
      { name: 'Power BI', stars: 3 },
      { name: 'Excel', stars: 3 },
      { name: 'Tableau', stars: 2 },
      { name: 'Looker Studio', stars: 1 },
    ],
  },
  {
    category: 'Librerías & ML',
    skills: [
      { name: 'Pandas', stars: 3 },
      { name: 'NumPy', stars: 2 },
      { name: 'Scikit-learn', stars: 2 },
      { name: 'Matplotlib', stars: 2 },
    ],
  },
  {
    category: 'Herramientas',
    skills: [
      { name: 'Jupyter', stars: 3 },
      { name: 'Git', stars: 2 },
      { name: 'VS Code', stars: 3 },
      { name: 'Stata', stars: 1 },
    ],
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-[3px]">
    {[1, 2, 3].map(i => (
      <span
        key={i}
        className="block w-[7px] h-[7px] rounded-full bg-blue-400"
        style={{ opacity: i <= count ? 1 : 0.18 }}
      />
    ))}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="pt-24 pb-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-[1.75rem] md:text-[2.3125rem] font-extrabold text-gray-900 dark:text-slate-100 leading-tight flex items-center gap-3
          before:content-[''] before:block before:w-[3px] before:h-[1.625rem] md:before:h-[2.125rem] before:bg-blue-500 dark:before:bg-blue-400 before:rotate-[15deg] before:rounded-sm before:shrink-0
        ">
          Habilidades Técnicas
        </h2>
        <p className="mt-4 text-[0.9375rem] md:text-[1.0625rem] text-gray-500 dark:text-slate-400 max-w-2xl leading-[1.375rem]">
          Tecnologías y herramientas que utilizo para transformar datos en información accionable.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: gi * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -2 }}
            className="bg-white border border-blue-100 rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(59,130,246,0.08)] hover:border-blue-200 transition-all duration-300 dark:bg-slate-800/60 dark:border-slate-700/80 dark:shadow-[0_1px_2px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] dark:hover:border-slate-600"
          >
            <h3 className="text-[0.6875rem] font-semibold text-blue-500 uppercase tracking-[0.14em] mb-4 pb-3 border-b border-blue-50 dark:text-blue-400 dark:border-slate-700">
              {group.category}
            </h3>

            <div className="space-y-[10px]">
              {group.skills.map(skill => (
                <div key={skill.name} className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-5 h-5 opacity-80 group-hover/skill:opacity-100 transition-opacity">
                      {iconMap[skill.name]}
                    </span>
                    <span className="text-[0.8125rem] font-medium text-gray-700 group-hover/skill:text-gray-900 transition-colors dark:text-slate-300 dark:group-hover/skill:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <Stars count={skill.stars} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
