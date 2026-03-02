const items = [
  'A strong team hired and structured for your business',
  'Clear roles and ownership across the initiative',
  'Organised execution processes',
  'A working management cadence (planning & reporting)',
  'Financial logic connected to daily operations',
  'Achieved and measurable business targets',
];

export default function WhatYouGet() {
  return (
    <section className="bg-black px-8 py-24 md:px-16">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">

          {/* Left */}
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-widest text-white/30">
                What You Get
              </p>
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 h-px w-6 shrink-0 bg-white/30" />
                    <span className="text-lg font-light leading-snug text-white/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-end">
            <p className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
              From idea and budget
              <br />
              <span className="text-white/40">to an operating business.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
