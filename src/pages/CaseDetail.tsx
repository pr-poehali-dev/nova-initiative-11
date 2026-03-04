import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import { cases } from '@/data/cases';

export default function CaseDetail() {
  const { slug } = useParams();
  const c = cases.find((item) => item.slug === slug);

  if (!c) return <Navigate to="/cases" replace />;

  const currentIndex = cases.indexOf(c);
  const next = cases[currentIndex + 1] ?? cases[0];

  return (
    <>
      <Header />
      <main className="bg-black">

        {/* Hero image */}
        <div className="relative h-[55vh] min-h-[360px] w-full overflow-hidden">
          <img
            src={c.image}
            alt={c.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-10 md:px-16">
            <div className="container mx-auto max-w-5xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/40">
                {c.tag}
              </p>
              <h1 className="text-3xl font-light leading-snug text-white md:text-4xl lg:text-5xl max-w-3xl">
                {c.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="px-8 pb-24 md:px-16">
          <div className="container mx-auto max-w-5xl">

            {/* Back link */}
            <div className="py-8 border-b border-white/10 mb-12">
              <Link
                to="/cases"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/30 transition-colors hover:text-white"
              >
                ← All Cases
              </Link>
            </div>

            {/* Subtitle */}
            <p className="mb-16 text-xl font-light text-white/45 max-w-2xl">{c.subtitle}</p>

            {/* Metrics */}
            <div className="mb-16 grid grid-cols-2 gap-px border border-white/10 md:grid-cols-4">
              {c.metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center justify-center gap-2 bg-white/[0.02] px-4 py-8 text-center"
                >
                  <span className="text-3xl font-light text-white md:text-4xl">{m.value}</span>
                  <span className="text-xs font-light uppercase tracking-wider text-white/30 leading-tight max-w-[120px]">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Context */}
            <div className="mb-16 border-l-2 border-white/20 pl-8">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/30">
                Context
              </p>
              <p className="text-lg font-light leading-relaxed text-white/60">
                {c.context}
              </p>
            </div>

            {/* What I Did */}
            <div className="mb-16">
              <p className="mb-8 text-xs font-medium uppercase tracking-widest text-white/30">
                What I Did
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {c.whatIDid.map((item, i) => (
                  <div key={item} className="flex items-start gap-4 border border-white/8 bg-white/[0.02] px-5 py-4">
                    <span className="shrink-0 text-xs tabular-nums text-white/20 mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-light leading-relaxed text-white/65">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-20">
              <p className="mb-8 text-xs font-medium uppercase tracking-widest text-white/30">
                Results
              </p>
              <div className="space-y-0 divide-y divide-white/8 border border-white/10">
                {c.results.map((item, i) => (
                  <div key={item} className="flex items-center gap-6 px-6 py-5">
                    <span className="shrink-0 h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span className="flex-1 text-base font-light leading-relaxed text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next case */}
            <div className="border-t border-white/10 pt-12">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/30">
                Next Case
              </p>
              <Link
                to={`/cases/${next.slug}`}
                className="group flex items-center justify-between"
              >
                <p className="text-2xl font-light text-white/60 transition-colors group-hover:text-white md:text-3xl">
                  {next.title}
                </p>
                <span className="text-white/20 transition-colors group-hover:text-white text-2xl ml-6">
                  →
                </span>
              </Link>
            </div>

          </div>
        </div>
        <Contacts />
      </main>
    </>
  );
}
