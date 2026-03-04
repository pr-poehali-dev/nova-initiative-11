const rows = [
  { before: 'Idea without execution plan', after: 'Clear execution strategy' },
  { before: 'Budget without financial logic', after: 'Financial model & cost structure' },
  { before: 'No team or wrong team', after: 'Strong team hired and structured' },
  { before: 'Blurred roles & accountability', after: 'Clear ownership across the initiative' },
  { before: 'Chaotic execution', after: 'Organised execution processes' },
  { before: 'No visibility into progress', after: 'Management cadence & reporting' },
  { before: 'Dependency on one person', after: 'Reduced chaos, distributed control' },
  { before: 'Stalled growth', after: 'Measurable results & scalable system' },
];

export default function Transformation() {
  return (
    <section className="bg-black px-8 py-24 md:px-16">
      <div className="container mx-auto max-w-5xl">

        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-4">
            The Transformation
          </p>
          <p className="text-3xl font-light text-white md:text-4xl">
            From Idea & Budget{' '}
            <span className="text-white/30">→</span>{' '}
            To Operating Business
          </p>
        </div>

        <div className="overflow-hidden border-t border-white/10">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-white/10 pb-3 pt-4">
            <p className="text-xs font-medium uppercase tracking-widest text-white/30">
              Starting Point
            </p>
            <p className="text-xs font-medium uppercase tracking-widest text-white/30">
              After My Work
            </p>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-b border-white/10 py-4 transition-colors hover:bg-white/5"
            >
              <p className="text-base font-light text-red-400/50">
                {row.before}
              </p>
              <div className="flex items-center gap-3">
                <span className="h-px w-4 shrink-0 bg-white/20" />
                <p className="text-base font-light text-emerald-400/70">
                  {row.after}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}