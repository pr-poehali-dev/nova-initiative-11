import { useState } from 'react';
import LeadModal from './LeadModal';

const links = [
  {
    label: 'Email',
    value: 'em.abramenko@gmail.com',
    href: null,
  },
  {
    label: 'Telegram',
    value: '@eugen_targaryen',
    href: 'https://t.me/eugen_targaryen',
  },
  {
    label: 'LinkedIn',
    value: 'eugeneabramenko',
    href: 'https://www.linkedin.com/in/eugeneabramenko/',
  },
  {
    label: 'YouTube',
    value: '@managersnotes',
    href: 'https://www.youtube.com/@managersnotes',
  },
  {
    label: 'Telegram Channel',
    value: '@bdsmmchannel',
    href: 'https://t.me/bdsmmchannel',
  },
  {
    label: 'Boosty',
    value: 'tabletkideda',
    href: 'https://boosty.to/tabletkideda',
  },
];

export default function Contacts() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <section id="contacts" className="bg-black px-8 py-24 md:px-16">
        <div className="container mx-auto max-w-5xl">

          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">
                Contacts
              </p>
              <p className="text-3xl font-light text-white md:text-4xl">
                Ready to talk?
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="self-start border border-white/20 px-8 py-3 text-sm font-light uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black md:self-auto"
            >
              Get in touch
            </button>
          </div>

          <div className="space-y-0 border-t border-white/10">
            {links.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors hover:bg-white/[0.03]"
                >
                  <span className="text-sm font-light uppercase tracking-widest text-white/30">
                    {link.label}
                  </span>
                  <span className="text-base font-light text-white/60 transition-colors group-hover:text-white">
                    {link.value}
                  </span>
                </a>
              ) : (
                <div
                  key={link.label}
                  className="flex items-center justify-between border-b border-white/10 py-6"
                >
                  <span className="text-sm font-light uppercase tracking-widest text-white/30">
                    {link.label}
                  </span>
                  <span className="text-base font-light text-white/60">
                    {link.value}
                  </span>
                </div>
              )
            )}
          </div>

        </div>
      </section>
    </>
  );
}