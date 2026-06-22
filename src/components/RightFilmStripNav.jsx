import { motion } from 'framer-motion';

export default function RightFilmStripNav({ sections, activeId }) {
  const scrollToSection = (id) => {
    const node = document.getElementById(id);
    node?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside className="fixed right-0 top-0 z-50 hidden h-screen w-[186px] overflow-hidden border-l border-gold/30 bg-[#090705]/95 shadow-[-20px_0_60px_rgba(0,0,0,0.55)] backdrop-blur-md lg:block">
      <div className="vintage-film-nav relative h-full px-4 py-4">
        {/* Film perforations */}
        <FilmPerforations side="left" />
        <FilmPerforations side="right" />

        <div className="relative z-10 flex h-full flex-col justify-between gap-2 py-1">
          {sections.map((section, index) => {
            const isActive = section.id === activeId;

            return (
              <motion.button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                initial={false}
                animate={{
                  scale: isActive ? 1.05 : 0.96,
                  opacity: isActive ? 1 : 0.62,
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group relative h-[12.6vh] min-h-[82px] overflow-hidden rounded-[3px] border border-parchment/15 bg-ink text-left shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] transition duration-300 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gold/70"
                aria-label={`Go to ${section.navLabel}`}
              >
                <img
                  src={section.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover sepia contrast-110 brightness-75 transition duration-700 group-hover:scale-110 group-hover:brightness-95"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
                <div className="absolute inset-0 border border-white/5" />

                <span className="absolute left-3 top-2 font-body text-[10px] tracking-[0.28em] text-gold/70">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="absolute inset-x-2 bottom-3 text-center font-display text-[1.06rem] font-semibold leading-none text-cream drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
                  {section.navLabel}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="activeFilmIndicator"
                    className="absolute inset-0 rounded-[3px] border-2 border-gold shadow-[inset_0_0_25px_rgba(191,161,129,0.35),0_0_20px_rgba(191,161,129,0.22)]"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

function FilmPerforations({ side }) {
  return (
    <div
      className={`absolute top-0 z-20 flex h-full w-[14px] flex-col justify-between py-3 ${
        side === 'left' ? 'left-1' : 'right-1'
      }`}
      aria-hidden="true"
    >
      {Array.from({ length: 28 }).map((_, index) => (
        <span
          key={index}
          className="h-[13px] w-[9px] rounded-[2px] bg-black shadow-[inset_0_0_4px_rgba(255,255,255,0.2)]"
        />
      ))}
    </div>
  );
}
