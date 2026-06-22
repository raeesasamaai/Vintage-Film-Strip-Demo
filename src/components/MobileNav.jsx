import { motion } from 'framer-motion';

export default function MobileNav({ sections, activeId }) {
  const scrollToSection = (id) => {
    const node = document.getElementById(id);
    node?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 items-center justify-between rounded-full border border-cream/15 bg-black/65 px-3 py-2 shadow-vintage backdrop-blur-md lg:hidden">
      {sections.map((section) => {
        const isActive = activeId === section.id;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-gold/70"
            aria-label={`Go to ${section.navLabel}`}
          >
            {isActive && (
              <motion.span
                layoutId="mobileActiveNav"
                className="absolute inset-0 rounded-full bg-gold/25"
              />
            )}
            <span className={`relative h-2.5 w-2.5 rounded-full ${isActive ? 'bg-gold' : 'bg-cream/55'}`} />
          </button>
        );
      })}
    </nav>
  );
}
