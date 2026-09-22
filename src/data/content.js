export const bio = `I hold a Computer Engineering degree from the University of Deusto and currently work as a Cloud Analyst at Deloitte, after building full-stack systems at Sener. I like understanding things well enough to build them — and well enough to break them. That drive is what's pulling me toward cybersecurity, and I bring the same work ethic to it: hardworking, committed, and always looking to learn and grow in the field. HTB's CJCA is already done, and I'm working my way toward Security+ and, eventually, running red team engagements.`

export const identity = {
  first: 'Lucas',
  last: 'Echeverría Madariaga',
  location: 'Bilbao',
}

export const softSkillsHome = [
  'Problem-solving',
  'Self-directed learning',
  'Adaptability',
  'Time management',
]

export const experienceShort =
  'Cloud Analyst @ Deloitte (AWS) — previously Full-Stack Developer @ Sener (GIS, microservices)'

export const skillsSummaryShort = [
  'Full-Stack Development',
  'AWS',
  'Pentesting',
  'SIEM / Blue Team',
  'AI & Agents',
]

export const projects = {
  erasmusFriends: {
    id: 'erasmus-friends',
    title: 'Erasmus+Friends',
    description:
      'Social app that helps Erasmus students meet and connect, with identity verification.',
    tags: ['Mobile', 'Social'],
    accent: 'develop',
  },
  homelab: {
    id: 'homelab',
    title: 'Homelab',
    description:
      'Self-hosted NAS, GPU compute and honeypots running on personal infrastructure, with IDS monitoring.',
    tags: ['Infra', 'Honeypots', 'IDS'],
    accent: 'security',
  },
  fifaScoreboard: {
    id: 'fifa-scoreboard',
    title: 'FIFA Scoreboard (ESP32)',
    description:
      'A physical scoreboard for FIFA matches, built with an ESP32, buttons, a display and sound.',
    tags: ['Hardware', 'IoT'],
    accent: 'develop',
  },
  htbThm: {
    id: 'htb-thm',
    title: 'HTB & TryHackMe',
    description:
      'Hands-on offensive security practice across HackTheBox and TryHackMe labs.',
    tags: ['Pentesting', 'CTF'],
    accent: 'security',
  },
}

export const homeProjects = [projects.erasmusFriends, projects.homelab]
export const developProjects = [projects.erasmusFriends, projects.fifaScoreboard]
export const securityProjects = [projects.homelab, projects.htbThm]

export const developSkills = {
  featured: ['Python', 'Java / Spring Boot', 'React', 'AWS', 'AI & Agents'],
  breakdown: [
    {
      category: 'Backend',
      items: [
        'Java',
        'Spring Boot',
        'Python',
        'Django',
        'FastAPI',
        'C/C++',
        'C#',
        '.NET',
        'Relational databases',
        'Non-relational databases',
      ],
    },
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue'],
    },
    {
      category: 'AWS',
      items: [
        'EC2',
        'Lambda',
        'ECS/Fargate',
        'S3',
        'RDS',
        'DynamoDB',
        'VPC',
        'API Gateway',
        'CloudFront',
        'Route53',
        'IAM',
        'KMS',
        'Cognito',
        'SQS',
        'SNS',
        'Step Functions',
        'CloudFormation',
        'CDK',
        'Terraform',
        'CloudWatch',
      ],
    },
    {
      category: 'AI',
      items: ['Artificial Intelligence', 'Computer Vision', 'Fine-tuning', 'Agents'],
    },
    {
      category: 'Fundamentals',
      items: ['Data Structures & Algorithms', 'Computer Architecture', 'Software Engineering'],
    },
    {
      category: 'Game Development',
      items: ['C++', 'Game Design', 'Unity'],
    },
  ],
}

export const securitySkills = {
  featured: ['Pentesting', 'Blue Team / SIEM', 'Incident Response', 'Threat Hunting', 'IDS'],
  breakdown: [
    'Operating Systems',
    'Pentesting',
    'Networking',
    'Blue Team / SIEM',
    'IDS',
    'Incident Response',
    'Threat Hunting',
    'Enumeration',
    'Privilege Escalation',
    'Vulnerability Assessment',
    'Security Reporting',
  ],
}

export const softSkillsFull = [
  {
    name: 'Hardworking',
    rationale:
      'completed a full engineering degree while holding down full-time roles at Sener and Deloitte.',
  },
  {
    name: 'Committed',
    rationale: 'saw a 315+ module certification path (HTB CJCA) through to completion.',
  },
  {
    name: 'Eager to learn and grow',
    rationale: 'chasing Security+ and a red-team career on top of a full-time cloud role.',
  },
  {
    name: 'Teamwork',
    rationale: 'built full-stack systems at Sener as part of a team.',
  },
  {
    name: 'Problem-solving',
    rationale: 'years of full-stack debugging plus CTF and pentesting practice.',
  },
  {
    name: 'Self-directed learning',
    rationale: 'HTB CJCA, AWS Cloud Practitioner and the homelab were all built outside any required curriculum.',
  },
  {
    name: 'Adaptability',
    rationale: 'moves comfortably between GIS/microservices, cloud, and offensive security.',
  },
  {
    name: 'Communication',
    rationale: 'writes clear penetration-testing reports (part of the HTB CJCA path).',
  },
  {
    name: 'Time management',
    rationale: 'finished a Computer Engineering degree while working full-time.',
  },
]

export const languages = [
  { name: 'Spanish', level: 'native' },
  { name: 'English', level: 'advanced' },
  { name: 'Italian', level: 'basic' },
]

export const studies = [
  'Computer Engineering, Universidad de Deusto — completed 2026',
  'Own degree in Video Game Development and Design, Universidad de Deusto',
  'HTB CJCA (Certified Junior Cybersecurity Associate) — HackTheBox',
  'AWS Certified Cloud Practitioner',
  'IBM OA6 competition — 1st place, university round; eliminated in the Madrid round',
]

export const experienceFull = [
  {
    role: 'Cloud Analyst',
    company: 'Deloitte',
    period: 'Jul 2026 – Present',
    description: 'Cloud development, primarily on AWS.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Sener',
    period: 'Nov 2025 – Jun 2026',
    description:
      'Custom development for in-house systems; full-stack work around GIS and microservices. Stack: Python, C#, .NET, relational databases, AI, React, Angular.',
  },
]

export const roadmap = [
  {
    label: 'Now',
    description: 'Working as a Cloud Analyst at Deloitte, preparing the move into cybersecurity.',
  },
  {
    label: 'Next',
    description: 'Land a cybersecurity-focused role. Make the full move from cloud into security, professionally.',
  },
  {
    label: 'Then',
    description: 'CompTIA Security+. Foundational security certification to build on.',
  },
  {
    label: 'Later',
    description: 'Red Team Manager. Leading offensive security engagements end to end.',
  },
]

export const contact = {
  email: 'lucasecheverriamdariaga@gmail.com',
  phone: '684 234 410',
  github: 'lucasEcheverria',
  githubUrl: 'https://github.com/lucasEcheverria',
  linkedin: 'linkedin.com/in/lucas-echeverría-madariaga-66381a20a',
  linkedinUrl: 'https://linkedin.com/in/lucas-echeverría-madariaga-66381a20a',
  location: 'Bilbao',
  resumeUrl: '/resume.pdf',
}
