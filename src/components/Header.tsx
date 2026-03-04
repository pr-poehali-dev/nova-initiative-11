import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 md:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      <Link
        to="/"
        className="relative z-10 text-sm font-light uppercase tracking-widest text-white/70 transition-colors hover:text-white"
      >
        Eugene Abramenko
      </Link>

      <nav className="relative z-10 flex gap-8">
        <Link
          to="/about"
          className="text-sm font-light uppercase tracking-widest text-white/50 transition-colors hover:text-white"
        >
          About
        </Link>
        <Link
          to="/cases"
          className="text-sm font-light uppercase tracking-widest text-white/50 transition-colors hover:text-white"
        >
          Cases
        </Link>
        <Link
          to="/engagement"
          className="text-sm font-light uppercase tracking-widest text-white/50 transition-colors hover:text-white"
        >
          Engagement
        </Link>
        <Link
          to={isHome ? '#contacts' : '/#contacts'}
          className="text-sm font-light uppercase tracking-widest text-white/50 transition-colors hover:text-white"
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
}