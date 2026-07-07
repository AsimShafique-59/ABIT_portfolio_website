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
    title: 'Data Centre Services',
    shortDesc: 'Colocation, migrations, rack installations, cabling, and full data centre lifecycle management.',
    fullDesc: 'ABIT engineers deliver end-to-end data centre services across the UK and Europe. From initial surveys and rack-stacking through to patching, fibre works, and decommissioning, our certified team handles every stage of the data centre lifecycle with precision.',
    icon: '🏢',
    color: 'blue',
    features: [
      'Onsite support & remote hands',
      'Server relocation & migrations',
      'Rack stacking & installations',
      'Structured cabling & patching',
      'Fibre works & testing (Fluke)',
      'Power infrastructure support',
      'Hardware removal & ITAD',
      'Site surveys & audits',
    ],
    useCases: ['Enterprise data centres', 'Co-location facilities', 'Edge computing deployments', 'Data centre consolidation'],
  },
  {
    slug: 'telecom',
    title: 'Telecom Services',
    shortDesc: 'E2E testing, operations, maintenance and deployment for Ethernet IP, SDH/DWDM, 1G/10G/100G networks.',
    fullDesc: 'Our telecom engineers bring deep expertise in Ethernet IP, SDH, and DWDM technologies. Whether it is a greenfield deployment, ongoing operations support, or high-speed 100G end-to-end testing, ABIT delivers the telecoms engineering skills your network demands.',
    icon: '📡',
    color: 'indigo',
    features: [
      'Operations & maintenance (O&M)',
      'Network deployment & commissioning',
      'Field support & troubleshooting',
      'Ethernet IP / SDH / DWDM',
      '1G / 10G / 100G E2E testing',
      'MPLS & SD-WAN deployment',
      'Transmission network support',
      'NOC escalation support',
    ],
    useCases: ['Tier 1 & Tier 2 carriers', 'Enterprise WAN migrations', 'Network expansion projects', 'Maintenance contracts'],
  },
  {
    slug: 'it-support',
    title: 'Professional IT & Support',
    shortDesc: 'IT, Network and Desktop support onsite and remote — 24x7, 365 days a year.',
    fullDesc: 'ABIT provides comprehensive IT support covering everything from desktop and laptop management to complex network troubleshooting. Our engineers offer both onsite visits and remote desktop support, ensuring your business stays operational around the clock.',
    icon: '💻',
    color: 'sky',
    features: [
      '24×7 remote desktop support',
      'Onsite IT & network engineers',
      'Desktop & laptop management',
      'Printer & peripheral support',
      'Software installation & config',
      'Network troubleshooting',
      'IT asset management',
      'Break-fix and BAU support',
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
    title: 'On-Demand Field Engineers',
    shortDesc: '450+ certified field engineers available 24/7 across the UK, Europe, and beyond.',
    fullDesc: 'Our network of 450+ trained field engineers can be dispatched anywhere in the UK or Europe on short notice. With SLA-aligned response targets and a 98% SLA achievement rate, ABIT gives you the boots on the ground exactly when and where you need them.',
    icon: '👷',
    color: 'amber',
    features: [
      '450+ engineers across UK & Europe',
      '24×7 dispatch availability',
      'SLA-aligned response targets',
      'SC-cleared engineers (UK)',
      'Flexible contract models',
      '15-minute ticket response time',
      'Multi-disciplinary skill sets',
      'Travel-ready for any site',
    ],
    useCases: ['Break-fix emergencies', 'Project deployment teams', 'Maintenance contracts', 'Overflow engineering support'],
  },
  {
    slug: 'managed-security',
    title: 'Managed Security',
    shortDesc: 'SOC-as-a-service, GDPR compliance, threat detection, and end-to-end security operations.',
    fullDesc: 'ABIT\'s managed security services protect your infrastructure around the clock. From SOC monitoring and threat detection to GDPR compliance consulting and penetration testing, we ensure your business meets its security obligations across EU and UK regulatory frameworks.',
    icon: '🔒',
    color: 'red',
    features: [
      'SOC-as-a-service (24×7)',
      'Threat detection & response',
      'GDPR compliance consulting',
      'Penetration testing',
      'Vulnerability assessments',
      'Security policy design',
      'Incident response planning',
      'Compliance reporting',
    ],
    useCases: ['Regulated industries', 'GDPR compliance programmes', 'Incident response', 'Security posture uplift'],
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
