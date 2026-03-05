export interface CaseMetric {
  value: string;
  label: string;
}

export interface Case {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  context: string;
  metrics: CaseMetric[];
  whatIDid: string[];
  results: string[];
}

export const cases: Case[] = [
  {
    slug: 'media-esports',
    tag: 'Media & Esports',
    title: 'Building a Media & Esports Operation from Zero',
    subtitle: 'From funded ambition to a fully operating media business.',
    image: 'https://cdn.poehali.dev/projects/f944b436-aa70-4c49-aebc-ee28570ab2cd/files/0eb20462-fa7f-4cca-bbd1-84209e475600.jpg',
    context:
      'An investor-backed initiative aimed to build a media business in esports — including studio production, streaming, traffic, and monetization. There was funding and ambition — but no team, no structure, and no operating model.',
    metrics: [
      { value: '4 mo', label: 'From zero to fully operating' },
      { value: '0→1', label: 'Full studio built from scratch' },
      { value: '6', label: 'Core team roles filled' },
      { value: '1', label: 'Unified P&L model created' },
    ],
    whatIDid: [
      'Built the organizational structure from scratch',
      'Hired and assembled the full core team (hosts, video production, technical staff, traffic team)',
      'Defined roles, ownership boundaries, and execution workflows',
      'Established regular production and streaming cadence',
      'Integrated content, traffic acquisition, and monetization into one operating system',
      'Created financial model (P&L, cost structure, growth planning)',
    ],
    results: [
      'Fully operational esports studio launched',
      'Stable production and content pipeline established',
      'Clear ownership and execution structure implemented',
      'Business became structurally manageable and scalable',
    ],
  },
  {
    slug: 'moneycare-fintech',
    tag: 'Moneycare — FinTech Credit Marketplace',
    title: 'Launching a New Credit Interface Under Deadline Pressure',
    subtitle: 'From fragmented delivery to a launched product before high season.',
    image: 'https://cdn.poehali.dev/projects/f944b436-aa70-4c49-aebc-ee28570ab2cd/files/47b8ce34-af37-4a6a-b061-6282846fb6a1.jpg',
    context:
      'The company needed to launch a new operator interface powered by an updated credit algorithm before the high season (December). Development was fragmented, priorities constantly shifted, and responsibility boundaries were unclear. The CEO required visibility and predictable delivery.',
    metrics: [
      { value: '4 mo', label: 'From kickoff to launch' },
      { value: '60%', label: 'DAU migrated by deadline' },
      { value: '100%', label: 'Migration completed next cycle' },
      { value: '↓', label: 'Scope drop reduced significantly' },
    ],
    whatIDid: [
      'Separated technical ownership between development leads to eliminate internal bottlenecks',
      'Established product-level prioritization aligned with business value',
      'Unified communication (Slack + Jira integration) to centralize execution',
      'Structured rollout plan and migration metrics for controlled adoption',
      'Became the execution bridge between CEO and development',
    ],
    results: [
      'New interface launched before the high season',
      '60% DAU migrated by deadline',
      'Full migration completed within the next cycle',
      'Scope drop reduced significantly',
      'Delivery became transparent and predictable for the CEO',
    ],
  },
  {
    slug: 'moneycare-execution',
    tag: 'MoneyCare — Fintech / Credit Marketplace',
    title: 'Restoring Execution Control in a Product Company',
    subtitle: 'From chaotic, fragmented delivery to a structured system aligned with business priorities.',
    image: 'https://cdn.poehali.dev/projects/f944b436-aa70-4c49-aebc-ee28570ab2cd/files/f67da5d9-a19c-4ffc-85ea-810c532f5806.jpg',
    context:
      'When I joined MoneyCare in 2018, the company faced serious execution breakdown. Business and development had no shared prioritization. Delivery was unpredictable — most tasks were constantly re-scoped or abandoned. Teams worked in isolated tools (WhatsApp, Skype, private messengers), and the development structure created constant conflict between backend and frontend. Jira was used only as a technical tracker with no product-level visibility. As a result: priorities changed constantly, teams worked overtime, releases were chaotic, and business had no visibility into delivery.',
    metrics: [
      { value: '~60%→20%', label: 'Scope drop reduced' },
      { value: '6 mo', label: 'To structured delivery' },
      { value: '1', label: 'Unified workspace (Slack)' },
      { value: '↑', label: 'Business visibility restored' },
    ],
    whatIDid: [
      'Built a unified communication system — introduced Slack as a single company-wide workspace, aligned all team leads, and integrated Jira alerts and dev workflows into Slack',
      'Rebuilt task management around product goals — redesigned Jira structure, introduced Epic-level management for product initiatives, and aligned development with business priorities',
      'Distributed product ownership — delegated backlog ownership to technical team leads, turning them into product owners for their domains',
      'Structured bug flow from support to development — created a centralized bug intake process, standardized bug types and priority levels, and integrated support with development workflows',
    ],
    results: [
      'Company-wide communication became centralized and transparent within the first months',
      'Business and development gained shared visibility of priorities',
      'Scope drop reduced from ~60% to ~20% within 6 months',
      'Delivery became significantly more predictable',
      'Business stakeholders could track development progress in real time',
      'Development teams focused on fewer but higher-impact tasks',
    ],
  },
  {
    slug: 'epam-ml-platform',
    tag: 'EPAM Systems — ML Matching Platform (100K+ internal users)',
    title: 'Turning a Strategic AI Product into Measurable Impact',
    subtitle: 'From technical speed to value-driven product outcomes.',
    image: 'https://cdn.poehali.dev/projects/f944b436-aa70-4c49-aebc-ee28570ab2cd/files/20e6d7f6-e216-405f-b403-621f0ac5a207.jpg',
    context:
      "The company was building an internal ML matching product. The team focused on real-time prediction speed, while actual user value wasn't clearly measured. Leadership needed results — not technical progress.",
    metrics: [
      { value: '6 mo', label: 'Engagement period' },
      { value: '2×', label: 'Product usage doubled' },
      { value: '100K+', label: 'Internal users on the platform' },
      { value: '↑', label: 'Matching relevance improved' },
    ],
    whatIDid: [
      'Reframed the product focus from "real-time speed" to measurable relevance',
      'Introduced a value metric (Proposal Rate) directly tied to user action',
      'Rebuilt roadmap around impact-driven priorities',
      'Structured backlog and delivery around measurable outcomes',
      'Led cross-functional team (DS, BE, DevOps, QA) toward value-first execution',
    ],
    results: [
      'Product usage doubled within 6 months',
      'Matching relevance significantly improved',
      'Delivery became focused on measurable business outcomes',
      'Product direction stabilized and aligned with value',
    ],
  },
];