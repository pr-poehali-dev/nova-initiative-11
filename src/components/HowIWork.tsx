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

function StepCard({ step }: { step: typeof steps[0] }) {
  return (
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
  );
}

function Arrow({ dir }: { dir: 'right' | 'left' }) {
  return (
    <div className="hidden w-4 shrink-0 items-center justify-center md:flex">
      <Icon name={dir === 'right' ? 'ArrowRight' : 'ArrowLeft'} size={14} className="text-white/20" />
    </div>
  );
}

export default function HowIWork() {
  return (
    <section className="bg-black px-8 py-24 md:px-16">
      <div className="container mx-auto max-w-5xl space-y-24">

        {/* Steps snake */}
        <div>
          <h2 className="mb-16 text-4xl font-light text-white md:text-5xl">
            How I Work
          </h2>

          {/* Row 1: 01 → 02 → 03 */}
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
            <StepCard step={steps[0]} />
            <Arrow dir="right" />
            <StepCard step={steps[1]} />
            <Arrow dir="right" />
            <StepCard step={steps[2]} />
          </div>

          {/* Turn: ↓ на правой колонке */}
          <div className="my-3 hidden md:flex">
            <div className="flex-1" />{/* col1 */}
            <div className="w-4" />{/* arrow gap */}
            <div className="flex-1" />{/* col2 */}
            <div className="w-4" />{/* arrow gap */}
            <div className="flex flex-1 justify-center">
              <Icon name="ArrowDown" size={16} className="text-white/20" />
            </div>
          </div>

          {/* Row 2: пусто | пусто | 05 ← 04, визуально справа налево */}
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
            <div className="hidden flex-1 md:block" />{/* пустая col1 */}
            <div className="hidden w-4 md:block" />{/* пустой gap */}
            <StepCard step={steps[3]} />
            <Arrow dir="left" />
            <StepCard step={steps[4]} />
          </div>

          {/* Embed note */}
          <p className="mt-12 border-l-2 border-white/15 pl-6 text-base font-light italic leading-relaxed text-white/40">
            I do not operate as an external consultant.
            I embed into the initiative and build the execution system from within.
          </p>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="mb-8 text-4xl font-light text-white md:text-5xl">
            Timeline
          </h2>
          <div className="flex flex-col gap-4 md:flex-row">
            {[
              { phase: 'Diagnosis', duration: '1–2 weeks' },
              { phase: 'Architecture + key hiring', duration: '4–8 weeks' },
              { phase: 'Stable operational mode', duration: '3–6 months' },
            ].map((row, i) => (
              <div key={row.phase} className="flex flex-1 items-stretch gap-4">
                <div className="flex flex-1 flex-col justify-between gap-6 border border-white/10 p-6 transition-colors hover:border-white/25">
                  <span className="text-xs font-medium text-white/20">0{i + 1}</span>
                  <div>
                    <p className="mb-1 text-base font-light text-white">{row.phase}</p>
                    <p className="text-sm font-light text-white/30">{row.duration}</p>
                  </div>
                </div>
                {i < 2 && (
                  <div className="hidden w-4 shrink-0 items-center justify-center md:flex">
                    <Icon name="ArrowRight" size={14} className="text-white/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}