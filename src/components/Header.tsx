export default function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 md:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="relative z-10 text-sm font-light uppercase tracking-widest text-white/70 transition-colors hover:text-white"
      >
        Eugene Abramenko
      </button>

      <nav className="relative z-10 flex gap-8">
        <button
          onClick={() => scrollTo('cases')}
          className="text-sm font-light uppercase tracking-widest text-white/50 transition-colors hover:text-white"
        >
          Cases
        </button>
        <button
          onClick={() => scrollTo('contacts')}
          className="text-sm font-light uppercase tracking-widest text-white/50 transition-colors hover:text-white"
        >
          Contacts
        </button>
      </nav>
    </header>
  );
}
