import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, side, index }) => {
  return (
    <div className="relative w-full pb-12">
      {/* ---- NODE: absolutely positioned at center, ON TOP of the line ---- */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-4 h-4 bg-blue-500 rounded-full border-[3px] border-white shadow-[0_0_0_3px_rgba(147,197,253,0.5)]" />
      </div>

      {/* ---- CARD ---- */}
      <motion.div
        initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`hidden md:block w-[46%] min-w-[320px] max-w-[500px] bg-blue-50/70 border border-blue-100 rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] ${
          side === 'left' ? 'mr-auto' : 'ml-auto'
        }`}
      >
        <span className="text-xs text-blue-600 font-mono tracking-wide">{item.date}</span>
        <h3 className="text-xl font-bold text-gray-900 mt-2">{item.role}</h3>
        <p className="text-blue-500 text-sm mb-4">{item.company}</p>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed">{item.desc}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white border border-blue-100 rounded-full text-xs text-blue-600">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ---- MOBILE ---- */}
      <div className="md:hidden flex pl-10 relative">
        <div className="absolute left-[6px] top-0 w-4 h-4 bg-blue-500 rounded-full border-[3px] border-white shadow-[0_0_0_3px_rgba(147,197,253,0.5)] z-10" />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex-1 bg-blue-50/70 border border-blue-100 rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
        >
          <span className="text-sm text-blue-600 font-mono">{item.date}</span>
          <h3 className="text-xl font-bold text-gray-900 mt-1">{item.role}</h3>
          <p className="text-blue-500 text-sm mb-4">{item.company}</p>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white border border-blue-100 rounded-full text-xs text-blue-600">
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
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2 z-0" />
      {/* ---- Mobile vertical line on the left ---- */}
      <div className="md:hidden absolute left-[13px] top-0 bottom-0 w-0.5 bg-blue-200 z-0" />

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
