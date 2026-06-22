import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import RightFilmStripNav from './components/RightFilmStripNav.jsx';
import MobileNav from './components/MobileNav.jsx';
import { sections } from './sectionData.js';

export default function App() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        root: null,
        threshold: [0.35, 0.55, 0.75],
      }
    );

    sections.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const activeSection = sections.find((section) => section.id === activeId) || sections[0];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-cream">
      <SiteHeader />

      {/* Fixed right-side film strip navigation */}
      <RightFilmStripNav sections={sections} activeId={activeId} />
      <MobileNav sections={sections} activeId={activeId} />

      {/* Optional global background glow behind all sections */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_72%_22%,rgba(191,161,129,0.18),transparent_32%),radial-gradient(circle_at_15%_72%,rgba(154,111,108,0.16),transparent_34%)]" />

      {sections.map((section, index) => (
        <StorySection
          key={section.id}
          section={section}
          index={index}
          isActive={activeSection.id === section.id}
        />
      ))}
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="fixed left-0 top-0 z-40 w-full px-5 py-5 sm:px-8 lg:px-12">
      <div className="flex items-center justify-between pr-0 lg:pr-[190px]">
        <a href="#home" className="group inline-flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-[0.08em] text-cream drop-shadow sm:text-3xl">
            Ancestors & Anecdotes
          </span>
          <span className="mt-2 hidden text-[10px] uppercase tracking-[0.48em] text-gold/80 sm:block">
            Your story, preserved
          </span>
        </a>
      </div>
    </header>
  );
}

function StorySection({ section, index, isActive }) {
  return (
    <section
      id={section.id}
      className="story-section relative flex min-h-screen items-center overflow-hidden px-5 py-28 sm:px-8 lg:px-12 lg:pr-[230px]"
    >
      <SectionBackground section={section} isActive={isActive} />

      <div className="relative z-10 max-w-4xl">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="mb-7 flex items-center gap-5">
                <span className="h-px w-24 bg-gold/70" />
                <p className="font-body text-xs uppercase tracking-[0.55em] text-gold sm:text-sm">
                  {section.eyebrow}
                </p>
              </div>

              <h1 className="max-w-4xl font-script text-6xl leading-[0.95] text-white drop-shadow-[0_7px_18px_rgba(0,0,0,0.85)] sm:text-7xl md:text-8xl lg:text-9xl">
                {section.title}
              </h1>

              <p className="mt-9 max-w-2xl font-body text-lg leading-8 text-cream/90 drop-shadow-[0_3px_10px_rgba(0,0,0,0.75)] sm:text-xl">
                {section.body}
              </p>

              <a
                href={section.id === 'contact' ? '#contact' : `#${sections[Math.min(index + 1, sections.length - 1)].id}`}
                className="mt-10 inline-flex min-w-[250px] items-center justify-between gap-8 rounded-sm border border-cream/70 bg-black/20 px-7 py-4 font-body text-sm uppercase tracking-[0.24em] text-cream shadow-vintage backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold/15 hover:text-white"
              >
                <span>{section.cta}</span>
                <ArrowRight size={19} strokeWidth={1.5} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {index === 0 && (
        <a
          href="#what-we-do"
          className="absolute bottom-9 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-cream/80 md:flex lg:left-[46%]"
        >
          <span className="font-body text-sm tracking-[0.18em]">Scroll to explore</span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/60 animate-breathe">
            <ChevronDown size={18} strokeWidth={1.3} />
          </span>
        </a>
      )}
    </section>
  );
}

function SectionBackground({ section, isActive }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.img
        src={section.image}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover"
        initial={false}
        animate={{ scale: isActive ? 1.06 : 1.0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Dark overlays for premium readability */}
      <div className="absolute inset-0 bg-[#080604]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/45" />

      {/* Film grain layer */}
      <div className="grain-layer absolute inset-0 opacity-[0.18]" />
    </div>
  );
}
