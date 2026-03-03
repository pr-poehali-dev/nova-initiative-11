import Header from '@/components/Header';

const models = [
  {
    num: '01',
    title: 'Audit',
    purpose: "Independent executive-level assessment of an initiative's execution capacity.",
    duration: '2–4 weeks',
    format: 'Interviews, financial review, process analysis, leadership sessions',
    deliverables: [
      'Execution risk map',
      'Structural gaps analysis',
      'Financial logic review',
      'Clear prioritised action plan (30–60–90 days)',
      'Recommendation on team structure',
    ],
    notDoing: [
      'No operational takeover',
      'No team management',
      'No hiring execution',
    ],
    success:
      'Clear visibility of bottlenecks, risks, and structural flaws, with a concrete execution roadmap approved by stakeholders.',
  },
  {
    num: '02',
    title: 'Build',
    purpose: 'Design and launch a fully functional execution structure.',
    duration: '2–4 months',
    format: 'Embedded leadership role (fractional COO / Head of Execution style)',
    deliverables: [
      'Defined org structure & ownership model',
      'Hired key roles',
      'KPI system & reporting cadence',
      'Financial-performance linkage',
      'Operational playbook',
    ],
    notDoing: [
      'Long-term HR administration',
      'Pure consulting without implementation',
      'Technical micromanagement',
    ],
    success:
      'Team operates independently within defined structure; measurable KPIs in place; leadership has transparency and control.',
  },
  {
    num: '03',
    title: 'Run',
    purpose: 'Take full responsibility for execution and business performance.',
    duration: '6–12 months',
    format: 'Embedded executive role with performance accountability',
    deliverables: [
      'Operational leadership',
      'Ongoing team development',
      'Financial discipline enforcement',
      'Performance management',
      'Scaling readiness',
    ],
    notDoing: [
      'Founder replacement',
      'Pure strategy without execution authority',
      'Advisory-only roles',
    ],
    success:
      'Sustained KPI growth, operational stability, and readiness for scaling or investor review.',
  },
];

export default function EngagementModels() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black px-8 pb-32 pt-32 md:px-16">
        <div className="container mx-auto max-w-5xl">

          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/30">
            Engagement Models
          </p>
          <p className="mb-20 text-3xl font-light text-white md:text-4xl">
            Three ways to work together.
          </p>

          <div className="space-y-0">
            {models.map((model) => (
              <div
                key={model.num}
                className="border-t border-white/10 py-16"
              >
                {/* Title row */}
                <div className="mb-12 flex items-baseline gap-6">
                  <span className="text-sm font-light text-white/20">{model.num}</span>
                  <h2 className="text-2xl font-light text-white md:text-3xl">{model.title}</h2>
                  <span className="ml-auto text-sm font-light text-white/30">{model.duration}</span>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                  {/* Left col */}
                  <div className="space-y-8">
                    <div>
                      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/25">
                        Purpose
                      </p>
                      <p className="text-base font-light leading-relaxed text-white/65">
                        {model.purpose}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/25">
                        Format
                      </p>
                      <p className="text-base font-light leading-relaxed text-white/65">
                        {model.format}
                      </p>
                    </div>
                    <div>
                      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/25">
                        What I don't do
                      </p>
                      <ul className="space-y-2">
                        {model.notDoing.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-px w-4 shrink-0 bg-white/15" />
                            <span className="text-base font-light text-white/35">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right col */}
                  <div className="space-y-8">
                    <div>
                      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/25">
                        Deliverables
                      </p>
                      <ul className="space-y-3">
                        {model.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-px w-4 shrink-0 bg-white/25" />
                            <span className="text-base font-light text-white/70">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-l-2 border-white/15 pl-5">
                      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/25">
                        Success Criteria
                      </p>
                      <p className="text-base font-light leading-relaxed text-white/50">
                        {model.success}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
