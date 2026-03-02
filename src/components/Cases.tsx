const cases = [
  {
    tag: 'Media & Esports',
    title: 'Building a Media & Esports Operation from Zero',
    subtitle: 'From funded ambition to a fully operating media business.',
    context:
      'An investor-backed initiative aimed to build a media business in esports — including studio production, streaming, traffic, and monetization. There was funding and ambition — but no team, no structure, and no operating model.',
    whatIDid: [
      'Built the organizational structure from scratch',
      'Hired and assembled the full core team (hosts, video production, technical staff, traffic team)',
      'Defined roles, ownership boundaries, and execution workflows',
      'Established regular production and streaming cadence',
      'Integrated content, traffic acquisition, and monetization into one operating system',
      'Created financial model (P&L, cost structure, growth planning)',
    ],
    results: [
      'Fully operational esports studio launched',
      'Stable production and content pipeline established',
      'Clear ownership and execution structure implemented',
      'Business became structurally manageable and scalable',
    ],
  },
  {
    tag: 'Moneycare — FinTech Credit Marketplace',
    title: 'Launching a New Credit Interface Under Deadline Pressure',
    subtitle: 'From fragmented delivery to a launched product before high season.',
    context:
      'The company needed to launch a new operator interface powered by an updated credit algorithm before the high season (December). Development was fragmented, priorities constantly shifted, and responsibility boundaries were unclear. The CEO required visibility and predictable delivery.',
    whatIDid: [
      'Separated technical ownership between development leads to eliminate internal bottlenecks',
      'Established product-level prioritization aligned with business value',
      'Unified communication (Slack + Jira integration) to centralize execution',
      'Structured rollout plan and migration metrics for controlled adoption',
      'Became the execution bridge between CEO and development',
    ],
    results: [
      'New interface launched before the high season',
      '60% DAU migrated by deadline',
      'Full migration completed within the next cycle',
      'Scope drop reduced significantly',
      'Delivery became transparent and predictable for the CEO',
    ],
  },
  {
    tag: 'EPAM Systems — ML Matching Platform (100K+ internal users)',
    title: 'Turning a Strategic AI Product into Measurable Impact',
    subtitle: 'From technical speed to value-driven product outcomes.',
    context:
      'The company was building an internal ML matching product. The team focused on real-time prediction speed, while actual user value wasn\'t clearly measured. Leadership needed results — not technical progress.',
    whatIDid: [
      'Reframed the product focus from "real-time speed" to measurable relevance',
      'Introduced a value metric (Proposal Rate) directly tied to user action',
      'Rebuilt roadmap around impact-driven priorities',
      'Structured backlog and delivery around measurable outcomes',
      'Led cross-functional team (DS, BE, DevOps, QA) toward value-first execution',
    ],
    results: [
      'Product usage doubled within 6 months',
      'Matching relevance significantly improved',
      'Delivery became focused on measurable business outcomes',
      'Product direction stabilized and aligned with value',
    ],
  },
];

export default function Cases() {
  return (
    <section id="cases" className="bg-black px-8 py-24 md:px-16">
      <div className="container mx-auto max-w-5xl">

        <p className="mb-12 text-xs font-medium uppercase tracking-widest text-white/30">
          Case Studies
        </p>

        <div className="flex flex-col gap-8">
          {cases.map((c, i) => (
            <div key={i} className="border border-white/10 p-8 md:p-12">

              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/30">
                {c.tag}
              </p>
              <h2 className="mb-8 text-2xl font-light leading-snug text-white md:text-3xl">
                {c.title}
              </h2>

              <div className="mb-10 border-l border-white/20 pl-6">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/30">
                  Context
                </p>
                <p className="text-base font-light leading-relaxed text-white/60">
                  {c.context}
                </p>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <p className="mb-5 text-sm font-medium uppercase tracking-widest text-white/30">
                    What I Did
                  </p>
                  <ul className="space-y-3">
                    {c.whatIDid.map((item) => (
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
                    {c.results.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/60" />
                        <span className="text-sm font-light leading-relaxed text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}