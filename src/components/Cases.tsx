const whatIDid = [
  'Built the organizational structure from scratch',
  'Hired and assembled the full core team (hosts, video production, technical staff, traffic team)',
  'Defined roles, ownership boundaries, and execution workflows',
  'Established regular production and streaming cadence',
  'Integrated content, traffic acquisition, and monetization into one operating system',
  'Created financial model (P&L, cost structure, growth planning)',
];

const results = [
  'Fully operational esports studio launched',
  'Stable production and content pipeline established',
  'Clear ownership and execution structure implemented',
  'Business became structurally manageable and scalable',
];

export default function Cases() {
  return (
    <section className="bg-black px-8 py-24 md:px-16">
      <div className="container mx-auto max-w-5xl">

        <p className="mb-12 text-xs font-medium uppercase tracking-widest text-white/30">
          Case Study
        </p>

        <div className="border border-white/10 p-8 md:p-12">

          {/* Title */}
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/30">
            Building a Media & Esports Operation from Zero
          </p>
          <h2 className="mb-8 text-2xl font-light leading-snug text-white md:text-3xl">
            From funded ambition to a fully operating media business.
          </h2>

          {/* Context */}
          <div className="mb-10 border-l border-white/20 pl-6">
            <p className="text-sm font-medium uppercase tracking-widest text-white/30 mb-3">Context</p>
            <p className="text-base font-light leading-relaxed text-white/60">
              An investor-backed initiative aimed to build a media business in esports — including studio production, streaming, traffic, and monetization.
              There was funding and ambition — but no team, no structure, and no operating model.
            </p>
          </div>

          {/* What I did + Results */}
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-widest text-white/30">
                What I Did
              </p>
              <ul className="space-y-3">
                {whatIDid.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-white/25" />
                    <span className="text-sm font-light leading-relaxed text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-widest text-white/30">
                Results
              </p>
              <ul className="space-y-3">
                {results.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/60" />
                    <span className="text-sm font-light leading-relaxed text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
