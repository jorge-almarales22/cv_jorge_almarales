import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, side, index }) => {
  return (
    <div className="relative w-full pb-12">
      {/* ---- NODE: absolutely positioned at center, ON TOP of the line ---- */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-[3px] border-white dark:border-slate-900 shadow-[0_0_0_3px_rgba(147,197,253,0.5)] dark:shadow-[0_0_0_3px_rgba(96,165,250,0.2)]" />
      </div>

      {/* ---- CARD ---- */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-50px" }}
        className={`hidden md:block w-[46%] min-w-[320px] max-w-[500px] bg-blue-50/70 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700/80 rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.3)] ${
          side === 'left' ? 'mr-auto' : 'ml-auto'
        }`}
      >
        <span className="text-xs text-blue-600 dark:text-blue-400 font-mono tracking-wide">{item.date}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mt-2">{item.role}</h3>
        <p className="text-blue-500 dark:text-blue-400 text-sm mb-4">{item.company}</p>
        <p className="text-gray-600 dark:text-slate-400 text-sm mb-5 leading-relaxed">{item.desc}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-700 border border-blue-100 dark:border-slate-600 rounded-full text-xs text-blue-600 dark:text-blue-300">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ---- MOBILE ---- */}
      <div className="md:hidden flex pl-10 relative">
        <div className="absolute left-[6px] top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-[3px] border-white dark:border-slate-900 shadow-[0_0_0_3px_rgba(147,197,253,0.5)] dark:shadow-[0_0_0_3px_rgba(96,165,250,0.2)] z-10" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex-1 bg-blue-50/70 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700/80 rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
        >
          <span className="text-sm text-blue-600 dark:text-blue-400 font-mono">{item.date}</span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mt-1">{item.role}</h3>
          <p className="text-blue-500 dark:text-blue-400 text-sm mb-4">{item.company}</p>
          <p className="text-gray-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-700 border border-blue-100 dark:border-slate-600 rounded-full text-xs text-blue-600 dark:text-blue-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* ---- Vertical center line (behind everything) ---- */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-slate-700 -translate-x-1/2 z-0" />
      {/* ---- Mobile vertical line on the left ---- */}
      <div className="md:hidden absolute left-[13px] top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-slate-700 z-0" />

      {items.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          side={index % 2 === 0 ? 'left' : 'right'}
          index={index}
        />
      ))}
    </div>
  );
};

export default Timeline;
