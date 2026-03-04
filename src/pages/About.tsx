import Header from '@/components/Header';
import Contacts from '@/components/Contacts';

const sections = [
  {
    label: 'Introduction',
    content: [
      'My name is Eugene.',
      'I work on launching and developing technology initiatives — helping turn ideas, teams, and investments into functioning systems, products, and measurable results.',
      'For more than 15 years my professional activity has been connected with digital products, technology projects, and building operational systems around them. However, my interest in managing complex systems appeared much earlier.',
    ],
  },
  {
    label: 'Early Interest in Systems and Management',
    content: [
      'Since childhood I have been fascinated by complex systems — especially those connected with economics, infrastructure, and the development of territories.',
      'I was interested not only in managing organizations, but in understanding how entire systems work: cities, economic structures, and institutional processes.',
      'This interest was also reflected in the games I enjoyed. I spent time with economic and management simulators such as Tropico, Railroad Tycoon, and Railway Empire — games in which you build and manage large economic systems and infrastructure.',
      'Because of this interest I chose to study management rather than a narrow specialization.',
      'In 2010 I graduated from the National Research University Higher School of Economics with a degree in Public and Municipal Administration, specializing in Government Regulation of the Economy.',
      'Earlier, in 2004, I became the St. Petersburg champion in the economic strategy simulation MEM — an educational business game developed with the participation of Hewlett‑Packard.',
    ],
  },
  {
    label: 'First Professional Steps',
    content: [
      'After university I briefly worked in government service.',
      'However, I quickly realized that meaningful change in large public systems often takes decades. Institutional constraints make transformation slow, and I understood that I might not be able to realize the projects and ideas that interested me within that environment.',
      'Because of that I decided to move into the commercial sector, where experimentation and implementation happen much faster.',
    ],
  },
  {
    label: 'Why Marketing',
    content: [
      'My first step into business was digital marketing in e‑commerce.',
      'This was a deliberate choice. I wanted to understand how businesses actually generate revenue.',
      'I was interested in questions such as: where customers come from, how demand is formed, how acquisition channels work, how product economics operate, and how the overall "business machine" functions.',
      'Starting in 2012 I worked in e‑commerce projects, beginning with hands‑on work and later managing marketing teams. My experience included performance marketing, traffic acquisition, advertising channels, and team management.',
    ],
  },
  {
    label: 'Transition to Technology Products',
    content: [
      'While working in digital marketing I started noticing structural limitations.',
      'Marketing teams were often expected to deliver business results while having limited influence over the product itself or the core business model.',
      'Over time I realized I wanted to influence the system behind the business, not just the acquisition layer.',
      'In 2016 I transitioned into IT product management.',
      'Over the following years I worked with projects in MarTech, AdTech, FinTech, HRTech, and esports, and collaborated with the international technology company EPAM on HR technology projects.',
    ],
  },
  {
    label: 'From Product Management to Execution',
    content: [
      'Over time I noticed that the part of the work I enjoyed most was organizing execution.',
      'I found myself building operational structures: aligning teams, structuring responsibilities, coordinating product, engineering, and marketing.',
      'Whenever a clear execution system appeared, projects moved forward faster.',
      'Eventually I realized that my strongest contribution lies in building execution systems around products and initiatives.',
    ],
  },
  {
    label: 'Entrepreneurial Attempts',
    content: [
      'My interest in entrepreneurship started early and developed alongside my professional career.',
      'While still in university I experimented with small initiatives — creative services for musicians, recruitment for construction teams, and other small business ideas.',
      'In 2013 I attempted to launch a small web studio. It was an early entrepreneurial experiment that provided valuable real‑world experience working with clients and projects.',
    ],
  },
  {
    label: 'First Startup Experience',
    content: [
      'A more structured startup attempt appeared in 2019.',
      'I worked on a concept for a machine‑learning‑based matching platform designed to connect specialists with complex professional backgrounds to suitable positions.',
      'During this project I went through the full early‑stage startup process: customer development interviews, product prototyping, team building, and early investment discussions.',
      'Although the project did not become a successful business, it provided valuable experience in understanding how early‑stage startups actually work.',
    ],
  },
  {
    label: 'SoulPlace',
    content: [
      'In 2024 I joined the company SoulPlace as a co‑founder.',
      'The company operates a B2C subscription model built around user analytics and product experimentation.',
      'Working on SoulPlace allowed me to directly observe how management decisions influence real financial results. Within the company we tested more than ten product hypotheses on the market.',
    ],
  },
  {
    label: 'Summary',
    content: [
      'In 2025 we launched the product Summary within the SoulPlace ecosystem.',
      'Summary is a speech analytics platform that allows users to transcribe audio and video, generate structured summaries, and analyze conversations.',
      'It is used both by professionals such as consultants, lawyers, and psychologists, as well as by individual users.',
    ],
  },
  {
    label: 'Book',
    content: [
      'In 2021 I wrote a fictional book about the world of product management called "Product".',
      'The book explores the life and work of people in the digital product industry and reflects many real observations about the profession. It is available in digital bookstores including Google Play Books.',
    ],
  },
  {
    label: 'Public Activity',
    content: [
      'Alongside my professional work I have maintained public channels where I write about technology, management, and the product industry.',
      'My media activity began around 2013 when I started publishing professional posts about marketing and digital products.',
      'Today my audience includes more than 18,000 followers on LinkedIn, a Telegram channel with around 2,000 subscribers, as well as channels on Boosty and YouTube.',
    ],
  },
  {
    label: 'About Me as a Person',
    content: [
      'I grew up in an intelligentsia family. My father is a physicist and my mother is a mathematician.',
      'Outside my professional work I write fiction — essays, short stories, and imaginative worlds. I also enjoy creating stories and fairy tales for children.',
      'Personally I am a calm and analytical person who prefers structured thinking and respectful collaboration over aggressive leadership styles.',
    ],
  },
  {
    label: 'Remote Work',
    content: [
      'I believe remote work is a natural model for many technology teams.',
      'Remote environments allow performance to be measured by results rather than time spent in an office, and they provide professionals with more flexibility to manage their energy and productivity.',
    ],
  },
  {
    label: 'Perspective on Time and Human Potential',
    content: [
      'One idea that has always interested me is the relationship between human potential and time.',
      'Much of our early life is spent learning how the world works. True professional maturity often arrives much later.',
      'Because of this I have always been interested in technologies related to longevity and the future of human capability.',
    ],
  },
  {
    label: 'Interest in Space and Science Fiction',
    content: [
      'I also have a long‑standing fascination with space exploration and science fiction.',
      'These interests represent curiosity about humanity\'s long‑term future and the possibilities of technological development.',
    ],
  },
  {
    label: 'Risk and Entrepreneurship',
    content: [
      'Entrepreneurship inevitably involves risk and uncertainty.',
      'I accept that many initiatives may fail. Venture projects cannot guarantee outcomes, and I prefer to work with people who understand that reality.',
    ],
  },
  {
    label: 'Travel',
    content: [
      'I have lived in Russia, Turkey, and Thailand and have visited around 25 countries.',
      'This experience helped me understand that no place in the world is perfect, and every environment has its own challenges.',
    ],
  },
  {
    label: 'What I Focus on Today',
    content: [
      'Today I focus on the role I describe as an Execution Architect.',
      'This means building the operational systems that allow teams, products, and resources to produce results.',
      'My work includes forming teams, designing operational processes, aligning product and market strategy, and helping technology initiatives move from ideas to working systems.',
    ],
  },
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
          <div className="container mx-auto max-w-3xl">

            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/30">
              About Me
            </p>
            <h1 className="mb-20 text-4xl font-light text-white md:text-5xl">
              Eugene Abramenko
            </h1>

            {sections.map((section) => (
              <div key={section.label} className="mb-14">
                <p className="mb-5 text-xs font-medium uppercase tracking-widest text-white/30">
                  {section.label}
                </p>
                <div className="space-y-4">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-base font-light leading-relaxed text-white/60">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="mb-14">
              <p className="mb-8 text-xs font-medium uppercase tracking-widest text-white/30">
                Management Philosophy
              </p>
              <div className="space-y-6">
                {philosophyPrinciples.map((p) => (
                  <div key={p.title} className="flex items-start gap-6">
                    <span className="mt-2.5 h-px w-5 shrink-0 bg-white/25" />
                    <div>
                      <p className="mb-1 text-sm font-medium text-white/80">{p.title}</p>
                      <p className="text-sm font-light leading-relaxed text-white/45">{p.text}</p>
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
