import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/cases', label: 'Cases' },
  { to: '/engagement', label: 'Engagement'
  },
];

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-16 transition-colors duration-300"
        style={{ backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent' }}
      >
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'} bg-gradient-to-b from-black/60 to-transparent`} />

        <Link
          to="/"
          className="relative z-10 text-sm font-light uppercase tracking-widest text-white/70 transition-colors hover:text-white"
        >
          Eugene Abramenko
        </Link>

        {/* Desktop nav */}
        <nav className="relative z-10 hidden md:flex gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-light uppercase tracking-widest text-white/50 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to={isHome ? '#contacts' : '/#contacts'}
            className="text-sm font-light uppercase tracking-widest text-white/50 transition-colors hover:text-white"
          >
            Contacts
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="relative z-10 flex md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-black pt-20 px-6 pb-10 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-2xl font-light uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to={isHome ? '#contacts' : '/#contacts'}
              className="text-2xl font-light uppercase tracking-widest text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contacts
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}