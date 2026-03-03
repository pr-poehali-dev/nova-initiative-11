const links = [
  {
    label: 'Email',
    value: 'em.abramenko@gmail.com',
    href: 'mailto:em.abramenko@gmail.com',
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
];

export default function Contacts() {
  return (
    <section id="contacts" className="bg-black px-8 py-24 md:px-16">
      <div className="container mx-auto max-w-5xl">
        <p className="mb-16 text-xs font-medium uppercase tracking-widest text-white/30">
          Contacts
        </p>
        <div className="space-y-0 border-t border-white/10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors hover:bg-white/[0.03]"
            >
              <span className="text-sm font-light uppercase tracking-widest text-white/30">
                {link.label}
              </span>
              <span className="text-lg font-light text-white/70 transition-colors group-hover:text-white">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
