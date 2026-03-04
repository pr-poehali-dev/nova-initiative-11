import Icon from '@/components/ui/icon';

const steps = [
  {
    n: '01',
    title: 'Diagnosis',
    desc: 'Assessment of finances, objectives, resources, and risks.',
    timeline: '1–2 weeks',
  },
  {
    n: '02',
    title: 'Execution Architecture',
    desc: 'Defining team structure, roles, processes, and KPIs.',
    timeline: '4–8 weeks',
  },
  {
    n: '03',
    title: 'Team Assembly & Launch',
    desc: 'Recruiting and onboarding key talent.',
    timeline: null,
  },
  {
    n: '04',
    title: 'Operational Cadence Setup',
    desc: 'Planning rhythm, reporting structure, and performance control.',
    timeline: null,
  },
  {
    n: '05',
    title: 'Operational Stabilization',
    desc: 'Building a system that functions without manual micromanagement.',
    timeline: '3–6 months',
  },
];

const outcomes = [
  'A structured, accountable, high-performing team',
  'A transparent financial logic behind operations',
  'Measurable and controllable progress',
  'Reduced chaos and lower dependency on any single individual',
  'A clear foundation for scaling',
];

// Split steps into rows of 3 and 2 for the snake layout
const row1 = steps.slice(0, 3); // 01 02 03 → left to right
const row2 = steps.slice(3, 5); // 04 05 → right to left

export default function HowIWork() {
  return (
    <section className="bg-black px-8 py-24 md:px-16">
      <div className="container mx-auto max-w-5xl space-y-24">

        {/* Steps snake */}
        <div>
          <p className="mb-16 text-xs font-medium uppercase tracking-widest text-white/30">
            How I Work
          </p>

          {/* Row 1: left → right */}
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
            {row1.map((step, i) => (
              <div key={step.n} className="flex flex-1 items-stretch gap-4">
                {/* Card */}
                <div className="flex flex-1 flex-col gap-4 border border-white/10 p-6 transition-colors hover:border-white/25">
                  <span className="text-xs font-medium text-white/20">{step.n}</span>
                  <div className="flex-1">
                    <p className="mb-2 text-base font-light text-white">{step.title}</p>
                    <p className="text-sm font-light leading-relaxed text-white/45">{step.desc}</p>
                  </div>
                  {step.timeline && (
                    <span className="text-xs font-light text-white/25">{step.timeline}</span>
                  )}
                </div>
                {/* Arrow right (between cards, not after last) */}
                {i < row1.length - 1 && (
                  <div className="hidden items-center md:flex">
                    <Icon name="ArrowRight" size={16} className="text-white/20" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Turn arrow: down on the right */}
          <div className="my-4 hidden justify-end pr-[calc(50%-theme(spacing.5))] md:flex">
            <Icon name="ArrowDown" size={16} className="text-white/20" />
          </div>

          {/* Row 2: right → left (reversed visually) */}
          <div className="flex flex-col gap-4 md:flex-row-reverse md:items-stretch">
            {row2.map((step, i) => (
              <div key={step.n} className="flex flex-1 items-stretch gap-4">
                {/* Card */}
                <div className="flex flex-1 flex-col gap-4 border border-white/10 p-6 transition-colors hover:border-white/25">
                  <span className="text-xs font-medium text-white/20">{step.n}</span>
                  <div className="flex-1">
                    <p className="mb-2 text-base font-light text-white">{step.title}</p>
                    <p className="text-sm font-light leading-relaxed text-white/45">{step.desc}</p>
                  </div>
                  {step.timeline && (
                    <span className="text-xs font-light text-white/25">{step.timeline}</span>
                  )}
                </div>
                {/* Arrow left (between cards in reversed row) */}
                {i < row2.length - 1 && (
                  <div className="hidden items-center md:flex">
                    <Icon name="ArrowLeft" size={16} className="text-white/20" />
                  </div>
                )}
              </div>
            ))}
            {/* Empty slots to keep grid aligned (row2 has 2 of 3 cols) */}
            <div className="hidden flex-1 md:block" />
          </div>

          {/* Embed note */}
          <p className="mt-12 border-l-2 border-white/15 pl-6 text-base font-light italic leading-relaxed text-white/40">
            I do not operate as an external consultant.
            I embed into the initiative and build the execution system from within.
          </p>
        </div>

        {/* What the Client Gets + Timeline */}
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="mb-8 text-xs font-medium uppercase tracking-widest text-white/30">
              What the Client Gets
            </p>
            <ul className="space-y-4">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 h-px w-5 shrink-0 bg-white/25" />
                  <span className="text-base font-light leading-snug text-white/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-8 text-xs font-medium uppercase tracking-widest text-white/30">
              Timeline
            </p>
            <div className="space-y-0 border-t border-white/10">
              {[
                { phase: 'Diagnosis', duration: '1–2 weeks' },
                { phase: 'Architecture + key hiring', duration: '4–8 weeks' },
                { phase: 'Stable operational mode', duration: '3–6 months' },
              ].map((row) => (
                <div
                  key={row.phase}
                  className="flex items-center justify-between border-b border-white/10 py-4"
                >
                  <span className="text-base font-light text-white/60">{row.phase}</span>
                  <span className="text-base font-light text-white/30">{row.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
