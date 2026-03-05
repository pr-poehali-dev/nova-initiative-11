import { useEffect, useRef, useState } from 'react';

export default function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      {/* background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* diagonal accent line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 h-[700px] w-px origin-top rotate-[30deg] bg-gradient-to-b from-transparent via-white/10 to-transparent"
        />
        <div
          className="absolute -top-20 -right-20 h-[500px] w-px origin-top rotate-[30deg] bg-gradient-to-b from-transparent via-white/6 to-transparent"
        />
      </div>

      <div className="container mx-auto max-w-6xl px-8 py-32 md:px-16">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-0">

          {/* Left — big contrast statements */}
          <div className="flex flex-col justify-center md:border-r md:border-white/8 md:pr-20">
            <div
              className="transition-all duration-700 ease-out"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/25">
                The Gap
              </p>
              <p className="text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
                Ideas are<br />
                <span className="text-white/30">abundant.</span>
              </p>
            </div>

            <div
              className="mt-8 transition-all duration-700 ease-out delay-200"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}
            >
              <p className="text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
                Execution is<br />
                <span className="text-white">scarce.</span>
              </p>
            </div>
          </div>

          {/* Right — explanation */}
          <div
            className="flex flex-col justify-center md:pl-20 transition-all duration-700 ease-out delay-400"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(24px)' }}
          >
            <div className="space-y-8">
              <div className="border-l border-white/15 pl-6">
                <p className="text-lg font-light leading-relaxed text-white/55 md:text-xl">
                  Companies don't fail because of strategy.
                </p>
                <p className="mt-1 text-lg font-light leading-relaxed text-white/55 md:text-xl">
                  They fail because execution collapses.
                </p>
              </div>

              <div className="relative">
                {/* accent bar */}
                <div className="absolute -left-0 top-0 h-full w-0.5 bg-gradient-to-b from-white/60 to-white/10" />
                <div className="pl-6">
                  <p className="text-xl font-light leading-snug text-white md:text-2xl">
                    This is the gap<br />I work in.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
