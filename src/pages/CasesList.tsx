import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { cases } from '@/data/cases';

export default function CasesList() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black px-8 pt-32 pb-24 md:px-16">
        <div className="container mx-auto max-w-5xl">

          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/30">
            Case Studies
          </p>
          <h1 className="mb-16 text-4xl font-light text-white md:text-5xl">
            Selected Work
          </h1>

          <div className="flex flex-col gap-0">
            {cases.map((c, i) => (
              <Link
                key={c.slug}
                to={`/cases/${c.slug}`}
                className="group flex flex-col gap-3 border-t border-white/10 py-8 transition-colors hover:bg-white/5 md:flex-row md:items-center md:justify-between md:gap-12 px-4 -mx-4"
              >
                <div className="flex items-start gap-6">
                  <span className="shrink-0 text-xs text-white/20 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/30">
                      {c.tag}
                    </p>
                    <p className="text-xl font-light text-white group-hover:text-white/80 transition-colors md:text-2xl">
                      {c.title}
                    </p>
                    <p className="mt-2 text-sm font-light text-white/40">
                      {c.subtitle}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-white/20 group-hover:text-white/60 transition-colors text-xl ml-12 md:ml-0">
                  →
                </span>
              </Link>
            ))}
            <div className="border-t border-white/10" />
          </div>

        </div>
      </main>
    </>
  );
}
