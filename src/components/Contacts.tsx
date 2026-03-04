import { useState } from 'react';
import Icon from '@/components/ui/icon';
import LeadModal from './LeadModal';

const links = [
  {
    label: 'Email',
    icon: 'Mail',
    href: 'mailto:em.abramenko@gmail.com',
  },
  {
    label: 'Telegram',
    icon: 'Send',
    href: 'https://t.me/eugen_targaryen',
  },
  {
    label: 'LinkedIn',
    icon: 'Linkedin',
    href: 'https://www.linkedin.com/in/eugeneabramenko/',
  },
  {
    label: 'YouTube',
    icon: 'Youtube',
    href: 'https://www.youtube.com/@managersnotes',
  },
  {
    label: 'Telegram Channel',
    icon: 'Radio',
    href: 'https://t.me/bdsmmchannel',
  },
  {
    label: 'Boosty',
    icon: 'Zap',
    href: 'https://boosty.to/tabletkideda',
  },
  {
    label: 'Book',
    icon: 'BookOpen',
    href: 'https://www.google.ru/books/edition/%D0%9F%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82/Scg7EAAAQBAJ?hl=ru&gbpv=0',
  },
];

export default function Contacts() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <section id="contacts" className="border-t border-white/10 bg-black px-8 py-10 md:px-16">
        <div className="container mx-auto max-w-5xl flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">

          <button
            onClick={() => setModalOpen(true)}
            className="border border-white/20 px-8 py-3 text-sm font-light uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
          >
            Get in touch
          </button>

          <div className="flex items-center gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                title={link.label}
                className="text-white/30 transition-colors hover:text-white"
              >
                <Icon name={link.icon} size={18} />
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
