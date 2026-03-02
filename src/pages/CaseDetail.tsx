import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
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
      <main className="min-h-screen bg-black px-8 pt-32 pb-24 md:px-16">
        <div className="container mx-auto max-w-5xl">

          {/* Back */}
          <Link
            to="/cases"
            className="mb-12 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/30 transition-colors hover:text-white"
          >
            ← All Cases
          </Link>

          {/* Header */}
          <div className="mb-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/30">
              {c.tag}
            </p>
            <h1 className="mb-4 text-3xl font-light leading-snug text-white md:text-4xl lg:text-5xl">
              {c.title}
            </h1>
            <p className="text-lg font-light text-white/40">{c.subtitle}</p>
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

          {/* What I Did + Results */}
          <div className="mb-20 grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-widest text-white/30">
                What I Did
              </p>
              <ul className="space-y-4">
                {c.whatIDid.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2.5 h-px w-5 shrink-0 bg-white/25" />
                    <span className="text-base font-light leading-relaxed text-white/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-widest text-white/30">
                Results
              </p>
              <ul className="space-y-4">
                {c.results.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                    <span className="text-base font-light leading-relaxed text-white/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
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
      </main>
    </>
  );
}
