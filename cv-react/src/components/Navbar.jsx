import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'experience', label: 'Trayectoria' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'contact', label: 'Contacto' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = sections.map(s => {
        const el = document.getElementById(s.id);
        return el ? el.getBoundingClientRect().top + window.scrollY - 120 : 0;
      });

      const scrollPos = window.scrollY;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollPos >= offsets[i] - 60) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-20 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:bg-slate-900/90 dark:border-slate-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center h-16 relative">
        {/* Desktop nav — centered */}
        <div className="hidden md:flex items-center gap-1 h-full">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`relative px-3 h-full flex items-center text-sm font-medium transition-colors
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:rounded-full after:transition-all after:duration-300
                ${
                  active === s.id
                    ? 'text-blue-600 after:w-8 after:bg-blue-500 dark:text-blue-400 dark:after:bg-blue-400'
                    : 'text-gray-500 hover:text-gray-800 after:w-0 hover:after:w-8 after:bg-gray-300 dark:text-slate-400 dark:hover:text-slate-200 dark:after:bg-slate-600'
                }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger — right side */}
        <button
          className="md:hidden absolute right-0 p-2 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md pb-3 dark:border-slate-800 dark:bg-slate-900/95">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                active === s.id
                  ? 'text-blue-600 bg-blue-50/70 border-l-[3px] border-blue-500 pl-[13px] dark:text-blue-400 dark:bg-blue-900/20 dark:border-blue-400'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-l-[3px] border-transparent pl-[13px] dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/50'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
