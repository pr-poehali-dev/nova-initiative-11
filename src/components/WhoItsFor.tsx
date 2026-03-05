const audience = [
  {
    label: 'Founders with funded digital initiatives',
    description:
      "You have capital and a vision. What's missing is the execution system that turns both into a working product.",
  },
  {
    label: 'Investors launching technology products',
    description:
      "You have made the bet. Now you need someone who can build the operational structure that makes it pay off.",
  },
  {
    label: 'Companies struggling with execution',
    description:
      "Strategy exists. Budget exists. But delivery is slow, ownership is unclear, and results don't come.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-black px-8 py-24 md:px-16">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-16 text-4xl font-light text-white md:text-5xl">
          Who My Clients Are
        </h2>
        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {audience.map((item) => (
            <div key={item.label} className="flex flex-col gap-6 bg-black p-8">
              <span className="text-xl font-light text-white">{item.label}</span>
              <p className="text-base font-light leading-relaxed text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}