export interface Service {
  slug: string
  title: string
  shortDesc: string
  fullDesc: string
  icon: string
  color: string
  features: string[]
  useCases: string[]
}

export interface Stat {
  value: string
  label: string
  prefix?: string
  suffix?: string
}

export interface Location {
  city: string
  country: string
  region: 'UK' | 'Europe'
  flag: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export const SERVICES: Service[] = [
  {
    slug: 'data-centre',
    title: 'Data Centre Support Services',
    shortDesc: 'Smart Hands services, DCIM, rack and stack — full data centre lifecycle support across the UK and Europe.',
    fullDesc: 'AB IT and Technical Services delivers end-to-end data centre support including skilled Smart Hands technicians, real-time Data Centre Infrastructure Management (DCIM), and professional rack and stack services. Our certified team ensures optimal performance, security, and uptime for your data centre operations.',
    icon: '🏢',
    color: 'blue',
    features: [
      'Smart Hands — on-site technical support',
      'Hardware replacement & troubleshooting',
      'Data Centre Infrastructure Management (DCIM)',
      'Real-time monitoring of hardware & facilities',
      'Rack and Stack — installation & configuration',
      'Professional cabling of data centre equipment',
      'Site surveys & audits',
      'Hardware removal & ITAD',
    ],
    useCases: ['Enterprise data centres', 'Co-location facilities', 'Edge computing deployments', 'Data centre consolidation'],
  },
  {
    slug: 'telecom',
    title: 'Network & Cabling Solutions',
    shortDesc: 'Fibre optic cabling, structured cabling services, and professional cable management for robust connectivity.',
    fullDesc: 'AB IT and Technical Services provides advanced network and cabling solutions including Fibre Optic Cabling design, installation and maintenance, Structured Cabling for custom infrastructure supporting business growth, and efficient Cable Management ensuring safety, accessibility, and optimal network performance.',
    icon: '🔌',
    color: 'indigo',
    features: [
      'Fibre Optic Cabling — design, installation & maintenance',
      'Fast, reliable fibre connectivity',
      'Structured Cabling Services',
      'Custom cabling infrastructure for business growth',
      'Cable Management — organisation & maintenance',
      'Safety and accessibility-focused cabling',
      'Network performance optimisation',
      'NOC escalation support',
    ],
    useCases: ['Enterprise network buildouts', 'Data centre cabling projects', 'Office network installations', 'Network performance upgrades'],
  },
  {
    slug: 'it-support',
    title: 'IT Support Services',
    shortDesc: 'Desktop support, server management, and network operations — ensuring uninterrupted business operations.',
    fullDesc: 'AB IT and Technical Services provides comprehensive IT support covering Desktop Support for end-user devices, expert Server Support and Management for server infrastructure, and Network Operations Support for maintaining network integrity and secure connectivity.',
    icon: '💻',
    color: 'sky',
    features: [
      'Desktop Support — hardware, software & connectivity',
      'End-user device troubleshooting',
      'Server Support and Management',
      'Expert installation & configuration of servers',
      'Maintenance for uninterrupted operations',
      'Network Operations Support',
      'Network integrity monitoring & performance',
      'Secure connectivity management',
    ],
    useCases: ['SME IT outsourcing', 'Corporate helpdesk overflow', 'Multi-site support contracts', 'Infrastructure rollouts'],
  },
  {
    slug: 'cloud',
    title: 'Cloud & Data Engineering',
    shortDesc: 'Cloud design, provisioning, deployment, and managed operations for hybrid and multi-cloud environments.',
    fullDesc: 'From architecture design to day-two operations, ABIT\'s cloud engineers guide your business through every stage of the cloud journey. We support AWS, Azure, and private cloud platforms, delivering secure, scalable environments aligned to your business goals.',
    icon: '☁️',
    color: 'cyan',
    features: [
      'Cloud architecture design',
      'Infrastructure provisioning (IaC)',
      'Hybrid & multi-cloud management',
      'Data pipeline engineering',
      'Cloud cost optimisation',
      'Migration & modernisation',
      'Kubernetes & container ops',
      'Monitoring & observability',
    ],
    useCases: ['Cloud migration programmes', 'Hybrid cloud design', 'Big data platforms', 'DevOps transformation'],
  },
  {
    slug: 'field-engineers',
    title: 'Remote & On-site Technical Support',
    shortDesc: '24/7 remote and on-site support — rapid response and technical solutions to minimise downtime.',
    fullDesc: 'AB IT and Technical Services offers 24/7 remote and on-site support tailored to meet the demands of your business. Our team is ready to provide rapid response and technical solutions, minimising downtime and maintaining business continuity across the UK and Europe.',
    icon: '👷',
    color: 'amber',
    features: [
      '24/7 remote & on-site support',
      'Rapid response to minimise downtime',
      'Business continuity focus',
      'Tailored support for your business demands',
      'Multi-disciplinary technical team',
      'SLA-aligned response targets',
      'Flexible contract models',
      'UK and Europe-wide deployment',
    ],
    useCases: ['Break-fix emergencies', 'Ongoing maintenance contracts', 'Business continuity planning', 'Infrastructure rollout support'],
  },
  {
    slug: 'managed-security',
    title: 'Cybersecurity Services',
    shortDesc: 'Proactive threat monitoring, vulnerability assessment, and SIEM solutions to safeguard your digital assets.',
    fullDesc: 'AB IT and Technical Services provides comprehensive cybersecurity services including Level 1 Cybersecurity with proactive threat monitoring and rapid incident response, Vulnerability Assessment with comprehensive scans to identify system weaknesses, and a SIEM Solution delivering real-time threat detection and automated incident response.',
    icon: '🔒',
    color: 'red',
    features: [
      'Level 1 Cybersecurity Services',
      'Proactive threat monitoring & rapid incident response',
      'Early detection of potential risks',
      'Vulnerability Assessment — comprehensive scans',
      'System vulnerability identification & remediation',
      'SIEM Solution — real-time threat detection',
      'Automated incident response',
      'Security monitoring & compliance reporting',
    ],
    useCases: ['Regulated industries', 'Financial institutions & healthcare', 'Incident response', 'Security posture uplift'],
  },
  {
    slug: 'software-design',
    title: 'Software Design House',
    shortDesc: 'Bespoke software and data solutions designed and managed to your exact business requirements.',
    fullDesc: 'Our software engineering team designs and builds custom applications, integrations, and data solutions tailored to your business. From requirements gathering through to deployment and ongoing management, ABIT delivers software that solves real operational challenges.',
    icon: '⚙️',
    color: 'purple',
    features: [
      'Bespoke application development',
      'API design & integration',
      'Database design & optimisation',
      'Custom reporting dashboards',
      'Legacy system modernisation',
      'Workflow automation',
      'Ongoing maintenance & support',
      'Agile delivery methodology',
    ],
    useCases: ['Custom business tools', 'System integrations', 'Data dashboards', 'Process automation'],
  },
  {
    slug: 'wireless',
    title: 'Wireless Survey & Testing',
    shortDesc: 'Professional wireless surveys, site validation, and testing using Ekahau and industry-standard tools.',
    fullDesc: 'ABIT\'s wireless engineers conduct thorough RF surveys, heat-mapping, and validation testing using Ekahau and other professional tools. Whether you are designing a new Wi-Fi network or validating an existing deployment, we ensure optimal coverage and performance.',
    icon: '📶',
    color: 'green',
    features: [
      'Predictive RF design',
      'Onsite survey & heat-mapping',
      'Ekahau certified surveys',
      'Post-installation validation',
      'Wi-Fi 6/6E deployments',
      'Spectrum analysis',
      'Coverage gap analysis',
      'Detailed survey reporting',
    ],
    useCases: ['Office Wi-Fi deployments', 'Warehouse & logistics sites', 'Stadium & event venues', 'Healthcare environments'],
  },
  {
    slug: 'automation',
    title: 'Automation (SDN) & Virtualisation (NFV)',
    shortDesc: 'Network automation, SDN architecture, and NFV deployments to modernise your infrastructure.',
    fullDesc: 'ABIT helps enterprises and carriers move from legacy, manual network operations to automated, software-driven infrastructure. Our SDN and NFV specialists design and implement solutions that reduce operational cost, improve agility, and future-proof your network.',
    icon: '🤖',
    color: 'violet',
    features: [
      'SDN architecture & design',
      'NFV platform deployment',
      'Network automation scripting',
      'Ansible & Terraform playbooks',
      'ZTP (Zero-Touch Provisioning)',
      'CI/CD for network changes',
      'Intent-based networking',
      'Virtual network functions (VNFs)',
    ],
    useCases: ['Carrier network modernisation', 'Enterprise automation', 'Data centre fabric', 'DevNetOps programmes'],
  },
  {
    slug: 'call-centre',
    title: 'Call Centre & Remote Support',
    shortDesc: 'Zendesk, Remedy ticketing and Netcool alarm monitoring — 24×7 service desk operations.',
    fullDesc: 'Our service desk team provides first-line and second-line support via phone, email, and chat. We operate industry-standard platforms including Zendesk, Remedy, and Netcool, delivering seamless alarm monitoring and ticket management around the clock.',
    icon: '📞',
    color: 'teal',
    features: [
      '24×7 service desk operations',
      'Zendesk & Remedy ticketing',
      'Netcool alarm monitoring',
      'First-line & second-line support',
      'SLA tracking & reporting',
      'Escalation management',
      'Multi-language capabilities',
      'ITIL-aligned processes',
    ],
    useCases: ['Managed service contracts', 'NOC & SOC operations', 'IT helpdesk outsourcing', 'Alarm management'],
  },
]

export const STATS: Stat[] = [
  { value: '10', suffix: '+', label: 'Years of Experience' },
  { value: '450', suffix: '+', label: 'Field Engineers' },
  { value: '25', suffix: '+', label: 'Countries Covered' },
  { value: '5000', suffix: '+', label: 'Tickets Resolved (12 mo)' },
  { value: '98', suffix: '%', label: 'SLA Achievement Rate' },
  { value: '15', suffix: ' min', label: 'Ticket Response Time' },
]

export const LOCATIONS: Location[] = [
  { city: 'London', country: 'United Kingdom', region: 'UK', flag: '🇬🇧' },
  { city: 'Manchester', country: 'United Kingdom', region: 'UK', flag: '🇬🇧' },
  { city: 'Birmingham', country: 'United Kingdom', region: 'UK', flag: '🇬🇧' },
  { city: 'Edinburgh', country: 'United Kingdom', region: 'UK', flag: '🇬🇧' },
  { city: 'Amsterdam', country: 'Netherlands', region: 'Europe', flag: '🇳🇱' },
  { city: 'Frankfurt', country: 'Germany', region: 'Europe', flag: '🇩🇪' },
  { city: 'Paris', country: 'France', region: 'Europe', flag: '🇫🇷' },
  { city: 'Stockholm', country: 'Sweden', region: 'Europe', flag: '🇸🇪' },
  { city: 'Warsaw', country: 'Poland', region: 'Europe', flag: '🇵🇱' },
  { city: 'Madrid', country: 'Spain', region: 'Europe', flag: '🇪🇸' },
  { city: 'Milan', country: 'Italy', region: 'Europe', flag: '🇮🇹' },
  { city: 'Brussels', country: 'Belgium', region: 'Europe', flag: '🇧🇪' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'ABIT deployed a team of 12 field engineers across 3 European countries within 48 hours. The response speed and technical quality were exceptional.',
    name: 'James Harrington',
    role: 'Head of Infrastructure',
    company: 'GlobalTech PLC',
  },
  {
    quote: 'Their data centre migration team handled our complete server relocation with zero downtime. Highly recommended for any mission-critical work.',
    name: 'Sophie Müller',
    role: 'IT Director',
    company: 'Nexus Financial Group',
  },
  {
    quote: 'The 24x7 NOC and alarm monitoring service from ABIT has significantly reduced our MTTR. Their Netcool expertise is second to none.',
    name: 'Carlos Reyes',
    role: 'Network Operations Manager',
    company: 'EuroComm Networks',
  },
]

export const WHY_CHOOSE: { title: string; desc: string; icon: string }[] = [
  {
    title: 'UK & Europe Coverage',
    desc: 'Direct coverage across EMEA and APAC regions with 450+ engineers ready to deploy anywhere.',
    icon: '🌍',
  },
  {
    title: 'SC-Cleared Engineers',
    desc: 'We provide Security Cleared (SC) engineers within the UK for government and sensitive sites.',
    icon: '🔐',
  },
  {
    title: '98% SLA Achievement',
    desc: 'Our 15-minute response time and 2-4 hour on-site targets are backed by a 98% SLA record.',
    icon: '📊',
  },
  {
    title: 'Multi-Technology Expertise',
    desc: 'From data centres and telecom to cloud and security — one partner for all your IT needs.',
    icon: '⚡',
  },
  {
    title: 'GDPR Compliant',
    desc: 'Fully GDPR-compliant operations with trained staff, signed NDAs, and a documented data policy.',
    icon: '✅',
  },
  {
    title: '10+ Years Experience',
    desc: 'Trusted by enterprises and carriers across the UK and Europe for over a decade.',
    icon: '🏆',
  },
]
