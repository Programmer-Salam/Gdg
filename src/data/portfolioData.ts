export interface SkillGroup {
  category: 'Backend' | 'Databases' | 'DevOps' | 'Mobile';
  summary: string;
  items: string[];
}

export interface ExperienceItem {
  index: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  index: string;
  category: string;
  title: string;
  summary: string;
  architectureDetails: string;
  techStack: string[];
  githubUrl: string;
  githubHandle: string;
  imageUrl: string;
  imageAlt: string;
}

export const PROFILE = {
  name: 'Badmus',
  brand: 'TOMMYTECH — Software Solutions',
  title: 'Backend & Full-Stack Engineer',
  location: 'Oyo State, Nigeria',
  tagline:
    'Building reliable fintech infrastructure, payment rails, and production backend systems.',
  about:
    'I am a backend-focused full-stack engineer based in Oyo State, Nigeria, operating my freelance practice as TOMMYTECH — Software Solutions. My work centers on fintech, VTU platforms, and high-integrity payment systems engineered with Laravel, PHP, Python, and Django REST. Alongside shipping production client software, I also teach PHP to beginners—helping aspiring developers master clean server-side fundamentals.',
  email: 'abdulsalambadmus955@gmail.com',
  githubProfiles: [
    {
      label: 'github.com/kingdamie',
      handle: '@kingdamie',
      url: 'https://github.com/kingdamie',
    },
    {
      label: 'github.com/programmer-salam',
      handle: '@programmer-salam',
      url: 'https://github.com/programmer-salam',
    },
  ],
  linkedin: {
    label: 'LinkedIn Profile',
    url: 'https://www.linkedin.com/in/abdulsalam-badmus',
  },
  heroImage: {
    url: '/src/assets/images/hero_engineer_studio_1795264680945.jpg',
    alt: 'Minimalist dark software engineering workstation showing code structure on laptop',
  },
};

export const HERO_FACTS = [
  { label: 'Practice', value: 'TOMMYTECH — Software Solutions' },
  { label: 'Location', value: 'Oyo State, Nigeria' },
  { label: 'Core Focus', value: 'Fintech & Payment Systems' },
  { label: 'Mentorship', value: 'Teaching PHP to Beginners' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Backend',
    summary: 'API architecture, payment webhooks, and service orchestration',
    items: ['Laravel', 'PHP', 'Node.js', 'Python', 'Django REST'],
  },
  {
    category: 'Databases',
    summary: 'Transactional ledgers, relational schemas, caching, and document stores',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'DevOps',
    summary: 'Reproducible environments and containerized production deployments',
    items: ['Docker'],
  },
  {
    category: 'Mobile',
    summary: 'Cross-platform client applications wired to production APIs',
    items: ['React Native / Expo'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    index: '01',
    company: 'CODEFIXBUG LIMITED',
    role: 'Remote Contract Backend Engineer',
    period: '2025',
    location: 'Remote',
    description:
      'Built a Laravel VTU platform backend supporting airtime, mobile data, and utility bill payments with resilient transaction tracking.',
    highlights: [
      'Engineered wallet debit/credit workflows and automated biller settlement callbacks.',
      'Structured idempotent payment handling to prevent duplicate charges during provider retries.',
    ],
  },
  {
    index: '02',
    company: 'Eskedigo',
    role: 'Backend Developer',
    period: 'Platform & Mobile',
    location: 'Backend & API',
    description:
      'Built the reservation and payments backend powering both the Eskedigo web platform and its companion mobile application.',
    highlights: [
      'Designed booking availability, reservation state transitions, and payment confirmation endpoints.',
      'Delivered unified REST APIs consumed directly by the React Native / Expo mobile app.',
    ],
  },
  {
    index: '03',
    company: 'MGD Concept',
    role: 'Client Projects — Backend & Deployment',
    period: 'Client Delivery',
    location: 'Full-Stack',
    description:
      'Delivered production client systems using Django REST and Laravel backends, integrating payment flows and managing deployment.',
    highlights: [
      'Architected custom REST APIs tailored to business operations and checkout requirements.',
      'Handled payment gateway integrations, server configuration, and production rollouts.',
    ],
  },
  {
    index: '04',
    company: 'Afex (African Exchange)',
    role: 'Backend Intern',
    period: 'Internship',
    location: 'Backend Systems',
    description:
      'Supported backend engineering teams working on structured commodity exchange and financial platform workflows.',
    highlights: [
      'Gained hands-on discipline in data validation, relational modeling, and production code reviews.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'vtu-payments-platform',
    index: '01',
    category: 'Fintech & Payments',
    title: 'VTU Payments Platform',
    summary:
      'Production Laravel backend powering instant airtime top-ups, data bundles, and utility bill payments with wallet ledger reconciliation.',
    architectureDetails:
      'Designed around atomic database transactions, queued provider dispatch, and webhook verification so user wallets remain consistent even under third-party telecom timeouts.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Redis'],
    githubUrl: 'https://github.com/kingdamie',
    githubHandle: 'kingdamie',
    imageUrl: '/src/assets/images/project_vtu_payments_1795264681868.jpg',
    imageAlt: 'Dark server hardware connected by an electric green optical payment trace',
  },
  {
    id: 'grlaas',
    index: '02',
    category: 'Developer Infrastructure',
    title: 'GRLaaS',
    summary:
      'Rate-Limiting-as-a-Service built with Python and Django to enforce configurable request quotas, burst protection, and API throttling.',
    architectureDetails:
      'Provides centralized policy evaluation and low-latency token/window counters so distributed services can protect sensitive endpoints like auth and checkout without duplicating limiter logic.',
    techStack: ['Python', 'Django', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/programmer-salam',
    githubHandle: 'programmer-salam',
    imageUrl: '/src/assets/images/project_grlaas_ratelimit_1795264681204.jpg',
    imageAlt: 'Precision milled optical flow shutter channeling an emerald laser beam',
  },
  {
    id: 'eskedigo',
    index: '03',
    category: 'Reservations & Mobile',
    title: 'Eskedigo',
    summary:
      'End-to-end reservation and payments system pairing a dedicated booking API backend with a cross-platform Expo mobile application.',
    architectureDetails:
      'Coordinates real-time slot locking, checkout verification, and booking confirmations across the backend API and the React Native / Expo client interface.',
    techStack: ['Laravel', 'MySQL', 'React Native', 'Expo'],
    githubUrl: 'https://github.com/kingdamie',
    githubHandle: 'kingdamie',
    imageUrl: '/src/assets/images/project_eskedigo_booking_1795264681674.jpg',
    imageAlt: 'Matte black smartphone displaying reservation access beside steel keycards',
  },
  {
    id: 'uae-schools-directory',
    index: '04',
    category: 'Data Engineering',
    title: 'UAE Schools Directory',
    summary:
      'Curated 295-school MongoDB dataset backed by an automated image ingestion, normalization, and storage pipeline.',
    architectureDetails:
      'Structures institutional profiles, curriculum metadata, and geocoded attributes in MongoDB while automating asset validation, resizing, and deduplication across 295 school records.',
    techStack: ['MongoDB', 'Node.js', 'Python', 'Image Pipeline'],
    githubUrl: 'https://github.com/programmer-salam',
    githubHandle: 'programmer-salam',
    imageUrl: '/src/assets/images/project_uae_schools_1795264680620.jpg',
    imageAlt: 'Structured grid of architectural school campus prints with green archival index tab',
  },
];
