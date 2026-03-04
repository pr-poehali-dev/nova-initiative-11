import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import { cases } from '@/data/cases';

export default function CasesList() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <div className="px-8 pt-32 pb-24 md:px-16">
          <div className="container mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/30">
              Case Studies
            </p>
            <h1 className="mb-16 text-4xl font-light text-white md:text-5xl">
              Selected Work
            </h1>

            <div className="grid grid-cols-1 gap-px md:grid-cols-3 bg-white/10">
              {cases.map((c, i) => (
                <Link
                  key={c.slug}
                  to={`/cases/${c.slug}`}
                  className="group relative flex flex-col bg-black overflow-hidden"
                >
                  {/* Square image */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* Index number */}
                    <span className="absolute top-5 left-5 text-xs tabular-nums text-white/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Tag */}
                    <span className="absolute top-5 right-5 text-xs font-medium uppercase tracking-widest text-white/40 text-right max-w-[120px] leading-tight">
                      {c.tag.split('—')[0].trim()}
                    </span>
                  </div>

                  {/* Text block */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="mb-2 text-base font-light leading-snug text-white group-hover:text-white/80 transition-colors md:text-lg">
                        {c.title}
                      </p>
                      <p className="text-sm font-light text-white/35 leading-relaxed">
                        {c.subtitle}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-widest text-white/20">
                        View case
                      </span>
                      <span className="text-white/20 transition-colors group-hover:text-white/60">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Contacts />
      </main>
    </>
  );
}
