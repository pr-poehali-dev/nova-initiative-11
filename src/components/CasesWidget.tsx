import { Link } from 'react-router-dom';
import { cases } from '@/data/cases';

export default function CasesWidget() {
  return (
    <section className="bg-black px-8 py-24 md:px-16">
      <div className="container mx-auto max-w-5xl">

        <div className="mb-12 flex items-end justify-between">
          <p className="text-xs font-medium uppercase tracking-widest text-white/30">
            Case Studies
          </p>
          <Link
            to="/cases"
            className="text-xs font-medium uppercase tracking-widest text-white/30 transition-colors hover:text-white"
          >
            All cases →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
          {cases.map((c, i) => (
            <Link
              key={c.slug}
              to={`/cases/${c.slug}`}
              className="group relative flex flex-col bg-black overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <span className="absolute top-5 left-5 text-xs tabular-nums text-white/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/30">
                    {c.tag.split('—')[0].trim()}
                  </p>
                  <p className="mt-2 text-base font-light leading-snug text-white group-hover:text-white/80 transition-colors">
                    {c.title}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-widest text-white/20">
                    View case
                  </span>
                  <span className="text-white/20 transition-colors group-hover:text-white/60">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
