const audience = [
  {
    label: 'Founders & Investors',
    description:
      'Who have an idea and funding, but lack structured, accountable execution.',
  },
  {
    label: 'CEOs',
    description:
      'Who need to launch or relaunch a digital or IT initiative with clarity and control.',
  },
  {
    label: 'Businesses',
    description:
      'That have resources and responsibility, but no operating system that reliably turns investment into measurable results.',
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-black px-8 py-24 md:px-16">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-16 text-4xl font-light text-white md:text-5xl">
          Who It's For
        </h2>
        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {audience.map((item) => (
            <div key={item.label} className="flex flex-col gap-6 bg-black p-8">
              <span className="text-xl font-light text-white">{item.label}</span>
              <p className="text-base font-light leading-relaxed text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}