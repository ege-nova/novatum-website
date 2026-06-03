export interface Experience {
  id: string;
  role: string;
  company: string;
  employer?: string; // when company != employer (e.g. client projects)
  period: { start: string; end: string | null }; // "YYYY-MM"
  description: string;
  bullets: string[];
  techTags: string[];
  softTags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  note?: string;
}

export const experiences: Experience[] = [
  {
    id: 'novatum',
    role: 'Founder & Software Engineer',
    company: 'Novatum',
    period: { start: '2025-10', end: null },
    description:
      'Building software tools at the intersection of automation, permacomputing, and infrastructure — applying engineering craft to problems that matter.',
    bullets: [
      'Automation engineering',
      'Permacomputing',
      'DevOps engineering',
      'Software development',
    ],
    techTags: [
      'Angular', 'C#', 'ASP.NET Web API', 'TypeScript', 'Node.js',
      'Azure', 'Docker', 'Kubernetes', '.NET Aspire', 'Raspberry Pi', 'Flipper Zero',
    ],
    softTags: [],
  },
  {
    id: 'abiware-hermes',
    role: 'Developer / Architect',
    company: 'Hermes',
    employer: 'Abiware',
    period: { start: '2026-01', end: null },
    description:
      'All-in-one rewrite of various legacy firefighter ERP products into a single unified platform.',
    bullets: [
      'Full-stack development',
      'Architecture',
      'Technical lead',
    ],
    techTags: ['Angular', 'C#', 'ASP.NET Web API', 'Azure', 'Docker'],
    softTags: ['Architectural decisions', 'Technical lead', 'SCRUM/Agile'],
  },
  {
    id: 'abiware-abiweb-gen2',
    role: 'Developer / Architect',
    company: 'Abiweb Gen 2',
    employer: 'Abiware',
    period: { start: '2023-11', end: '2025-12' },
    description:
      'Major new version of the Abiweb firefighter ERP platform, rebuilt with a modern microservices architecture.',
    bullets: [
      'Full-stack development',
      'Architecture',
      'Coaching junior developers',
    ],
    techTags: ['Angular', 'C#', 'ASP.NET Web API', 'Microservices', 'RabbitMQ', 'Azure', 'Docker', '.NET Aspire'],
    softTags: ['Coaching', 'Architectural decisions', 'SCRUM/Agile'],
  },
  {
    id: 'ice-code',
    role: 'Founder & Software Engineer',
    company: 'Ice Code',
    period: { start: '2022-01', end: '2023-10' },
    description:
      'Applying software engineering expertise to sustainable tech: automation of permaculture, hydro-, aero- and aquaponics.',
    bullets: [
      'Electrical circuits',
      'IoT device management and provisioning',
      'AI: object detection/tracking, TTS, NLP, Speech Synthesis, Categorization',
      'Microcontroller programming (Arduino, Raspberry Pi)',
      'Architecting a global IoT network',
    ],
    techTags: ['C#', 'Azure', 'AWS', 'Node.js', 'Python', 'Arduino', 'Raspberry Pi', 'MongoDB', 'Bluetooth', 'BLE'],
    softTags: [
      'Collective learning', 'Technical documentation', 'Functional analysis',
      'SCRUM/Agile', 'Mockups',
    ],
  },
  {
    id: 'icapps',
    role: 'Developer-Analyst',
    company: 'iCapps',
    period: { start: '2022-06', end: '2023-04' },
    description: 'API development for customers including Kinepolis and KidsLife.',
    bullets: [
      'Functional and technical analysis',
      'Implementation',
      'Maintenance',
      'DevOps',
    ],
    techTags: ['C#', 'ASP.NET Web API', 'Azure', 'SQL Server', 'OAuth'],
    softTags: [
      'Technical documentation', 'Functional analysis', 'SCRUM/Agile',
    ],
  },
  {
    id: 'dotnet-lab',
    role: 'Developer-Analyst',
    company: 'dotNET lab',
    period: { start: '2021-04', end: '2021-11' },
    description: 'Maintaining a multi-tenant web shop at Artoos Group.',
    bullets: [
      'Maintain a multi-tenant web shop @ Artoos Group',
    ],
    techTags: ['JavaScript', 'C#', 'RabbitMQ'],
    softTags: ['SCRUM/Agile', 'Mockups'],
  },
  {
    id: 'abiware-abiweb',
    role: 'Developer-Analyst',
    company: 'Abiweb',
    employer: 'Abiware',
    period: { start: '2017-01', end: '2021-04' },
    description:
      'ERP solution for firefighters covering intervention reports, dispatching, inventory management and more.',
    bullets: [
      'Maintenance and second-line technical support',
      'Implementation of new Schooling module',
      'Feature work on Dispatching and Street & Municipality management',
      'Created mobile application line "AbiMobile" (Focus and Tour) from scratch',
      'Conceptual design of AbiMobile Me, a personal app for firefighters',
      'Complete revision of logging mechanism and conventions',
      'Structuring error messages and creation of a knowledgebase',
    ],
    techTags: ['AngularJS', 'TypeScript', 'JavaScript', 'C#', 'ASP.NET Web API', 'OAuth', 'Xamarin', 'SQL Server'],
    softTags: [
      'Training', 'Onboarding', 'Architectural decisions', 'Technical documentation',
      'Coaching', 'SCRUM/Agile', 'Mockups',
    ],
  },
  {
    id: 'abiware-ambuweb',
    role: 'Developer-Analyst',
    company: 'Ambuweb',
    employer: 'Abiware',
    period: { start: '2017-01', end: '2021-04' },
    description:
      'Reporting service for 80% of Belgian ambulances in response to AMBUREG compulsory registration law.',
    bullets: [
      'Taking over development of the mobile application',
      'Architecture and implementation of ECG integration over Bluetooth/BLE',
      'POC data reporting and follow-up of development',
      'Architecture and implementation of 3rd party API',
      'Architecture of monitoring service',
      'Second-line maintenance of web application',
    ],
    techTags: ['AngularJS', 'Angular', 'TypeScript', 'JavaScript', 'C#', 'ASP.NET Web API', 'OAuth', 'Xamarin', 'SQL Server', 'Bluetooth', 'BLE'],
    softTags: [
      'Architectural decisions', 'Technical documentation', 'Onboarding',
      'Coaching', 'SCRUM/Agile', 'Mockups',
    ],
  },
  {
    id: 'abiware-enabel',
    role: 'Developer-Analyst',
    company: 'Enabel Salary Engine',
    employer: 'Abiware',
    period: { start: '2017-01', end: '2021-04' },
    description:
      'Salary engine for expats, modernising a legacy application with yearly regulatory updates.',
    bullets: [
      'Functional and technical analysis',
      'Implementation',
      'Customer training',
      'Maintenance',
      'Yearly update of Fiche 281.10',
    ],
    techTags: ['AngularJS', 'TypeScript', 'JavaScript', 'C#', 'ASP.NET Web API', 'OAuth', 'SQL Server'],
    softTags: [
      'Onboarding', 'Technical documentation', 'User manual', 'Customer training',
      'SCRUM/Agile', 'Mockups',
    ],
  },
  {
    id: 'abiware-abimobile',
    role: 'Analyst/Architect',
    company: 'AbiMobile',
    employer: 'Abiware',
    period: { start: '2017-01', end: '2021-04' },
    description:
      'Complete rewrite of a legacy mobile application for inventory management.',
    bullets: [
      'Architecture',
      'Functional and technical analysis',
      'Follow-up of development',
    ],
    techTags: ['Xamarin', 'C#'],
    softTags: [
      'Coaching', 'Architectural decisions', 'Technical documentation',
      'SCRUM/Agile', 'Mockups',
    ],
  },
  {
    id: 'kenso',
    role: 'Developer-Analyst',
    company: 'Akkoo / Kenso',
    period: { start: '2011-09', end: '2016-12' },
    description:
      'In-house lead development of websites and on-site consultancy across a wide range of industries and customers.',
    bullets: [
      'Drupal maintenance @ Engie',
      'Mobile application development @ Engie',
      'Lead development of Drupal websites (WelloPet, 90plus, Calodar, LeGrand/Bticino)',
      'Lead development of Drupal site with integrated inventory management and cash register automation @ Switch',
      'Reporting dashboard for factory workers @ Kellogg\'s - Pringles',
      'Reporting dashboard @ GFK',
      'Development of succession tax calculator @ Kluwer',
      'Lead development of satellite configuration tooling @ Newtec',
      'Development of cloud CRM solution',
    ],
    techTags: ['Drupal', 'PHP', 'JavaScript', 'AngularJS', 'Angular', 'Node.js', 'ASP.NET MVC', 'C#'],
    softTags: [
      'Architectural decisions', 'Technical documentation', 'Customer training',
      'Onboarding', 'Coaching', 'SCRUM/Agile', 'Mockups',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Professional Bachelor Applied Computer Sciences',
    institution: 'Thomas More',
    year: '2011',
    note: 'Graduated with honors',
  },
];

export const languages = [
  { name: 'Dutch', level: 'Native' },
  { name: 'English', level: 'Fully proficient' },
  { name: 'French', level: 'Beginner' },
  { name: 'German', level: 'Beginner' },
];

// Top skills derived from frequency across all experiences — used in card hero
export const topTechTags = [
  'C#', 'ASP.NET Web API', 'TypeScript', 'JavaScript', 'Angular',
  'Azure', 'SQL Server', 'Node.js', 'Python', 'Xamarin',
];

export const allTechTags = [
  ...new Set(experiences.flatMap((e) => e.techTags)),
].sort();
