import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import Icon from '@/components/ui/icon';

const timeline = [
  {
    year: '2004',
    title: 'MEM Champion',
    desc: 'St. Petersburg champion in the economic strategy simulation MEM — an educational business game developed with Hewlett‑Packard.',
  },
  {
    year: '2010',
    title: 'HSE Graduate',
    desc: 'Graduated from the National Research University Higher School of Economics — Public and Municipal Administration, Government Regulation of the Economy.',
  },
  {
    year: '2012',
    title: 'Into E‑Commerce',
    desc: 'Moved into digital marketing and e‑commerce. Hands‑on performance marketing, traffic acquisition, and team management.',
  },
  {
    year: '2013',
    title: 'Web Studio & Media',
    desc: 'Launched a small web studio — first real entrepreneurial experiment. Started publishing professional content on LinkedIn and Telegram.',
  },
  {
    year: '2016',
    title: 'Product Management',
    desc: 'Transitioned into IT product management. Worked across MarTech, AdTech, FinTech, HRTech, esports, and collaborated with EPAM on HR tech.',
  },
  {
    year: '2019',
    title: 'First Startup',
    desc: 'Built an ML‑based matching platform for specialists with complex professional backgrounds. Full early‑stage cycle: CustDev, prototyping, team, investors.',
  },
  {
    year: '2021',
    title: 'Book "Product"',
    desc: 'Wrote a fictional book about the world of product management — available on Google Play Books.',
  },
  {
    year: '2024',
    title: 'Co‑founder at SoulPlace',
    desc: 'Joined SoulPlace as co‑founder. B2C subscription model, user analytics, 10+ product hypotheses tested in real market conditions.',
  },
  {
    year: '2025',
    title: 'Launched Summary',
    desc: 'Speech analytics platform: audio/video transcription, structured summaries, conversation analysis. Used by consultants, lawyers, psychologists.',
  },
];

const stats = [
  { value: '15+', label: 'Years in digital products' },
  { value: '18K', label: 'LinkedIn followers' },
  { value: '2K', label: 'Telegram subscribers' },
  { value: '25+', label: 'Countries visited' },
];

const interests = [
  { icon: 'Rocket', label: 'Space exploration' },
  { icon: 'BookOpen', label: 'Science fiction' },
  { icon: 'Gamepad2', label: 'Strategy simulators' },
  { icon: 'PenLine', label: 'Fiction writing' },
  { icon: 'Globe', label: 'Remote living' },
  { icon: 'FlaskConical', label: 'Longevity & science' },
];

const philosophyPrinciples = [
  { title: 'Honesty', text: 'Problems and mistakes are inevitable, and they should be discussed openly.' },
  { title: 'Ideas must be grounded in reality', text: 'Decisions should be based on data, evidence, and measurable results.' },
  { title: 'No miracles', text: 'If a project lacks a viable market or resources, management alone cannot fix that.' },
  { title: 'Responsibility requires authority', text: 'A person responsible for results must have real decision‑making power.' },
  { title: 'Systems matter more than lucky success stories', text: 'Sustainable results come from strong organizational systems.' },
];

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <div className="px-8 pt-32 pb-24 md:px-16">
          <div className="container mx-auto max-w-4xl">

            {/* Hero */}
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/30">
              About Me
            </p>
            <h1 className="mb-6 text-4xl font-light text-white md:text-5xl">
              Eugene Abramenko
            </h1>
            <p className="mb-6 max-w-2xl text-lg font-light leading-relaxed text-white/55">
              I work on launching and developing technology initiatives — helping turn ideas, teams, and investments into functioning systems, products, and measurable results.
            </p>
            <p className="mb-20 max-w-2xl text-base font-light leading-relaxed text-white/40">
              For more than 15 years my professional activity has been connected with digital products, technology projects, and building operational systems around them.
            </p>

            {/* Stats */}
            <div className="mb-24 grid grid-cols-2 gap-px border border-white/10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center justify-center gap-2 bg-white/[0.02] px-6 py-8 text-center">
                  <span className="text-3xl font-light text-white">{s.value}</span>
                  <span className="text-xs font-light uppercase tracking-wider text-white/35">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="mb-24">
              <p className="mb-12 text-xs font-medium uppercase tracking-widest text-white/30">
                Career Path
              </p>
              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-[60px] top-0 bottom-0 w-px bg-white/10 md:left-[72px]" />

                <div className="space-y-0">
                  {timeline.map((item, i) => (
                    <div key={i} className="group relative flex gap-8 pb-10 md:gap-12">
                      {/* Year */}
                      <div className="relative z-10 w-[52px] shrink-0 text-right md:w-16">
                        <span className="text-xs font-medium tabular-nums text-white/25 group-hover:text-white/60 transition-colors">
                          {item.year}
                        </span>
                      </div>

                      {/* Dot */}
                      <div className="relative z-10 -ml-1.5 mt-0.5 h-3 w-3 shrink-0 rounded-full border border-white/20 bg-black group-hover:border-white/60 transition-colors" />

                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <p className="mb-1 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                          {item.title}
                        </p>
                        <p className="text-sm font-light leading-relaxed text-white/35">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="mb-24">
              <p className="mb-8 text-xs font-medium uppercase tracking-widest text-white/30">
                Interests & Curiosities
              </p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {interests.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 border border-white/8 bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
                  >
                    <Icon name={item.icon} size={18} className="text-white/30 shrink-0" />
                    <span className="text-sm font-light text-white/55">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Background note */}
            <div className="mb-24 border-l border-white/15 pl-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/25">
                Background
              </p>
              <p className="mb-4 text-base font-light leading-relaxed text-white/50">
                I grew up in an intelligentsia family — my father is a physicist, my mother a mathematician. This shaped my analytical approach to everything I do.
              </p>
              <p className="text-base font-light leading-relaxed text-white/50">
                Outside my professional work I write fiction: essays, short stories, and imaginative worlds. I also enjoy creating stories and fairy tales for children.
              </p>
            </div>

            {/* Philosophy */}
            <div className="mb-14">
              <p className="mb-10 text-xs font-medium uppercase tracking-widest text-white/30">
                Management Philosophy
              </p>
              <div className="space-y-0 divide-y divide-white/8">
                {philosophyPrinciples.map((p, i) => (
                  <div key={p.title} className="flex items-start gap-6 py-5">
                    <span className="shrink-0 text-xs tabular-nums text-white/20 mt-0.5">
                      0{i + 1}
                    </span>
                    <div className="flex-1 md:flex md:items-baseline md:gap-8">
                      <p className="mb-1 md:mb-0 md:w-64 shrink-0 text-sm font-medium text-white/75">{p.title}</p>
                      <p className="text-sm font-light leading-relaxed text-white/40">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        <Contacts />
      </main>
    </>
  );
}
