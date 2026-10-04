import type { LucideIcon } from 'lucide-react';
import {
  Users, Monitor, Briefcase, Plane, Brain, Zap,
  Search, MessageSquare, FileText, UserCheck, ClipboardList,
  Megaphone, Target, Share2, Mail, Database, Cpu,
  BarChart3, Network, Workflow, Bot, Headphones, Globe,
  Rocket, Building2, Lightbulb, ShieldCheck, Layers,
  TrendingUp, GraduationCap, Handshake, Sparkles,
} from 'lucide-react';

// ─── NAV ──────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string; desc: string }[];
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Business',
    to: '/business',
    children: [
      { label: 'International Talent', to: '/business/international-talent', desc: 'Sourcing & qualification across markets' },
      { label: 'Digital Operations', to: '/business/digital-operations', desc: 'Marketing, leads & digital workflows' },
      { label: 'Business Support', to: '/business/business-support', desc: 'Practical operational support' },
      { label: 'Travel & International', to: '/business/travel-international', desc: 'Connecting people & destinations' },
    ],
  },
  {
    label: 'Technology',
    to: '/technology',
    children: [
      { label: 'AI Workforce', to: '/technology/ai-workforce', desc: 'Specialized intelligent agents' },
      { label: 'Intelligent Automation', to: '/technology/intelligent-automation', desc: 'From repetitive work to operations' },
    ],
  },
  { label: 'Partners', to: '/partners' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

// ─── HOME: HERO ───────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: 'TITAN AXIS CORPORATION',
  headline: 'Connecting People, Technology & Global Business',
  supporting:
    'Titan Axis Corporation develops international talent, business-support and digital solutions while building intelligent systems for the next generation of business operations.',
  primaryCta: { label: 'Explore Our Business', to: '/business' },
  secondaryCta: { label: 'Work With Us', to: '/contact' },
};

// ─── HOME: BUSINESS CARDS ─────────────────────────────────────────────────────

export interface BusinessCard {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

export const businessCards: BusinessCard[] = [
  {
    number: '01',
    title: 'International Talent',
    description:
      'Connecting businesses with international talent through structured sourcing, communication and qualification processes.',
    icon: Users,
    to: '/business/international-talent',
  },
  {
    number: '02',
    title: 'Digital Operations',
    description:
      'Digital marketing, lead generation, communication systems and technology-supported business operations.',
    icon: Monitor,
    to: '/business/digital-operations',
  },
  {
    number: '03',
    title: 'Business Support',
    description:
      'Practical support for businesses and entrepreneurs that need help connecting people, processes and digital resources.',
    icon: Briefcase,
    to: '/business/business-support',
  },
  {
    number: '04',
    title: 'Travel & International Services',
    description:
      'Developing services that connect people, destinations and international opportunities.',
    icon: Plane,
    to: '/business/travel-international',
  },
];

// ─── HOME: TECHNOLOGY SECTION ─────────────────────────────────────────────────

export const techSection = {
  heading: 'Building Intelligent Business Systems',
  text:
    'Technology is becoming a core part of Titan Axis. We are developing AI-assisted systems that can research information, organize knowledge, support communication, automate workflows and eventually perform approved business tasks.',
};

export const aiProcessSteps = [
  { label: 'Research', icon: Search },
  { label: 'Understand', icon: Brain },
  { label: 'Plan', icon: ClipboardList },
  { label: 'Act', icon: Zap },
  { label: 'Evaluate', icon: BarChart3 },
  { label: 'Improve', icon: TrendingUp },
];

// ─── HOME: TALENT SECTION ─────────────────────────────────────────────────────

export const talentSection = {
  heading: 'Connecting Businesses With International Talent',
  text:
    'We work across international markets to identify, communicate with and qualify potential candidates for business requirements.',
};

export const recruitmentSteps = [
  'Requirement', 'Source', 'Contact', 'Collect',
  'Screen', 'Qualify', 'Interview', 'Documentation', 'Onboarding Support',
];

// ─── HOME: INTERNATIONAL MARKETS ──────────────────────────────────────────────

export const marketsSection = {
  heading: 'International Markets & Connections',
  text:
    'These represent markets and international connections — not necessarily physical offices. We work through relationships and structured processes across regions.',
};

export const markets = [
  'India', 'Philippines', 'Mexico', 'Canada', 'Thailand', 'International',
];

// ─── HOME: WHY TITAN AXIS ─────────────────────────────────────────────────────

export interface WhyPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyPoints: WhyPoint[] = [
  { title: 'International Perspective', description: 'Working across markets, cultures and business environments.', icon: Globe },
  { title: 'Talent Network', description: 'Connecting businesses with international candidate markets.', icon: Network },
  { title: 'Digital Capability', description: 'Combining marketing, communication and digital operations.', icon: Monitor },
  { title: 'Technology Driven', description: 'Building systems that improve how business work gets done.', icon: Cpu },
  { title: 'Human + AI', description: 'Using technology to improve processes while keeping human judgment where it matters.', icon: Brain },
  { title: 'Built To Evolve', description: 'Starting with practical business operations and developing toward intelligent systems.', icon: Layers },
];

// ─── HOME: FUTURE VISION ──────────────────────────────────────────────────────

export const visionSection = {
  heading: 'From Business Operations To Intelligent Systems',
  text:
    'Titan Axis is evolving from a business group focused on people, services and operations toward a technology-enabled organization capable of building intelligent systems for real-world business work.',
  pillars: ['People', 'Business', 'Technology'],
  result: 'Intelligent Operations',
};

// ─── HOME: FINAL CTA ──────────────────────────────────────────────────────────

export const finalCta = {
  heading: "Let's Build What Comes Next",
  text:
    'Whether you are looking for international talent, business support, digital capabilities or a technology partnership, Titan Axis is open to meaningful business conversations.',
  primaryCta: { label: 'Work With Us', to: '/contact' },
  secondaryCta: { label: 'Contact Titan Axis', to: '/contact' },
};

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────

export const aboutPage = {
  heading: 'About Titan Axis Corporation',
  text:
    'Titan Axis Corporation is a developing global business group focused on connecting people, technology and international business opportunities.',
  whoWeAre:
    'Talent, digital systems, operations and international services can work together as one connected business ecosystem.',
  focusAreas: [
    { label: 'People', icon: Users },
    { label: 'Technology', icon: Cpu },
    { label: 'Operations', icon: Workflow },
    { label: 'International Business', icon: Globe },
  ],
  evolution: [
    'Business Vision', 'International Talent', 'Digital Operations',
    'Technology Systems', 'AI Automation', 'AI Workforce',
  ],
  founder: {
    name: 'Prasanna Raj',
    role: 'Founder & Director',
    bio:
      'Prasanna Raj leads the development of Titan Axis across business operations, international talent, digital systems and emerging AI automation initiatives.',
  },
};

// ─── BUSINESS PAGE ────────────────────────────────────────────────────────────

export interface BusinessDetail {
  title: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
  to: string;
}

export const businessPage = {
  heading: 'Our Business',
  text:
    'Titan Axis operates across interconnected business areas designed to support people, companies and international opportunities.',
  areas: [
    {
      title: 'International Talent',
      description:
        'We help businesses connect with potential talent across international markets through structured sourcing, communication and qualification processes.',
      capabilities: [
        'Candidate sourcing', 'International candidate acquisition', 'Initial communication',
        'Candidate information collection', 'Screening', 'Qualification',
        'Interview coordination', 'Documentation coordination', 'Onboarding support',
      ],
      icon: Users,
      to: '/business/international-talent',
    },
    {
      title: 'Digital Operations',
      description:
        'Digital capability is increasingly central to modern business. Titan Axis develops and applies digital systems across marketing, lead generation, communication and operational workflows.',
      capabilities: [
        'Digital Marketing', 'Lead Generation', 'Social Media Operations',
        'Candidate Acquisition', 'Communication Workflows', 'Business Information Systems', 'Automation',
      ],
      icon: Monitor,
      to: '/business/digital-operations',
    },
    {
      title: 'Business Support',
      description:
        'Businesses often need practical support connecting people, information, technology and day-to-day operations.',
      capabilities: [
        'Business Research', 'Digital Support', 'Lead Generation',
        'Communication Support', 'Operational Coordination', 'Technology Implementation', 'Process Development',
      ],
      icon: Briefcase,
      to: '/business/business-support',
    },
    {
      title: 'Travel & International Services',
      description:
        'Titan Axis explores and develops international services that connect people, destinations and business opportunities.',
      capabilities: [
        'International service development', 'Destination & market research',
        'Business travel coordination', 'Cross-border connection support',
      ],
      icon: Plane,
      to: '/business/travel-international',
    },
  ] as BusinessDetail[],
};

// ─── INTERNATIONAL TALENT PAGE ────────────────────────────────────────────────

export const talentPage = {
  heading: 'International Talent Solutions',
  text:
    'We help businesses connect with potential talent across international markets through structured sourcing, communication and qualification processes.',
  positioning: 'International Talent & Business Support',
  services: [
    { label: 'Candidate sourcing', icon: Search },
    { label: 'International candidate acquisition', icon: Globe },
    { label: 'Initial communication', icon: MessageSquare },
    { label: 'Candidate information collection', icon: FileText },
    { label: 'Screening', icon: ClipboardList },
    { label: 'Qualification', icon: UserCheck },
    { label: 'Interview coordination', icon: Users },
    { label: 'Documentation coordination', icon: FileText },
    { label: 'Onboarding support', icon: Handshake },
  ],
  process: [
    'Source', 'Contact', 'Information', 'Screen',
    'Qualify', 'Interview', 'Documents', 'Process', 'Arrival / Onboarding',
  ],
};

// ─── DIGITAL OPERATIONS PAGE ──────────────────────────────────────────────────

export const digitalOpsPage = {
  heading: 'Digital Operations',
  text:
    'Digital capability is increasingly central to modern business. Titan Axis develops and applies digital systems across marketing, lead generation, communication and operational workflows.',
  areas: [
    { label: 'Digital Marketing', icon: Megaphone },
    { label: 'Lead Generation', icon: Target },
    { label: 'Social Media Operations', icon: Share2 },
    { label: 'Candidate Acquisition', icon: Users },
    { label: 'Communication Workflows', icon: Mail },
    { label: 'Business Information Systems', icon: Database },
    { label: 'Automation', icon: Zap },
  ],
};

// ─── BUSINESS SUPPORT PAGE ────────────────────────────────────────────────────

export const businessSupportPage = {
  heading: 'Business Support',
  text:
    'Businesses often need practical support connecting people, information, technology and day-to-day operations.',
  areas: [
    { label: 'Business Research', icon: Search },
    { label: 'Digital Support', icon: Monitor },
    { label: 'Lead Generation', icon: Target },
    { label: 'Communication Support', icon: Headphones },
    { label: 'Operational Coordination', icon: ClipboardList },
    { label: 'Technology Implementation', icon: Cpu },
    { label: 'Process Development', icon: Workflow },
  ],
};

// ─── TRAVEL PAGE ──────────────────────────────────────────────────────────────

export const travelPage = {
  heading: 'Travel & International Services',
  text:
    'Titan Axis explores and develops international services that connect people, destinations and business opportunities.',
  areas: [
    { label: 'International service development', icon: Globe },
    { label: 'Market & destination research', icon: Search },
    { label: 'Cross-border business connections', icon: Network },
    { label: 'People & opportunity coordination', icon: Users },
  ],
};

// ─── TECHNOLOGY PAGE ──────────────────────────────────────────────────────────

export const techPage = {
  heading: 'Building Intelligent Systems For Real Business Work',
  text:
    'Titan Axis is developing AI-assisted systems designed to move beyond simple question-and-answer interactions toward structured business execution.',
  architecture: [
    { label: 'AI Models', icon: Cpu },
    { label: 'Memory', icon: Database },
    { label: 'Knowledge', icon: Lightbulb },
    { label: 'Tools', icon: Wrench },
    { label: 'Planning', icon: ClipboardList },
    { label: 'Execution', icon: Zap },
    { label: 'Evaluation', icon: BarChart3 },
    { label: 'Improvement', icon: TrendingUp },
  ],
};

// Re-export Wrench since it's used above
import { Wrench } from 'lucide-react';

// ─── AI WORKFORCE PAGE ────────────────────────────────────────────────────────

export interface AgentConcept {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const aiWorkforcePage = {
  heading: 'AI Workforce',
  text:
    'The long-term technology direction of Titan Axis is an AI workforce: specialized intelligent agents capable of supporting different areas of business operations.',
  agents: [
    { name: 'Research Agent', description: 'Gathering and organizing business information across sources.', icon: Search },
    { name: 'Recruitment Agent', description: 'Supporting candidate sourcing, screening and communication.', icon: Users },
    { name: 'Communication Agent', description: 'Managing structured outreach and response workflows.', icon: MessageSquare },
    { name: 'Sales Agent', description: 'Assisting with lead engagement and qualification processes.', icon: Target },
    { name: 'Operations Agent', description: 'Coordinating day-to-day tasks and operational workflows.', icon: Workflow },
    { name: 'Business Intelligence Agent', description: 'Analyzing data and supporting business decisions.', icon: BarChart3 },
  ] as AgentConcept[],
};

// ─── INTELLIGENT AUTOMATION PAGE ──────────────────────────────────────────────

export const automationPage = {
  heading: 'From Repetitive Work To Intelligent Operations',
  text:
    'The objective is to create systems that can support repetitive and structured business work while maintaining appropriate human oversight.',
  steps: [
    { label: 'Input', icon: FileText },
    { label: 'Understand', icon: Brain },
    { label: 'Decide', icon: ClipboardList },
    { label: 'Action', icon: Zap },
    { label: 'Result', icon: Target },
    { label: 'Evaluation', icon: BarChart3 },
    { label: 'Improvement', icon: TrendingUp },
  ],
};

// ─── PARTNERS PAGE ────────────────────────────────────────────────────────────

export const partnersPage = {
  heading: 'Partners & Business Network',
  text:
    'Titan Axis works through relationships with businesses, professionals and independent operators across different markets.',
  cta: { label: 'Discuss a Partnership', to: '/contact' },
};

// ─── CAREERS PAGE ─────────────────────────────────────────────────────────────

export const careersPage = {
  heading: 'Build With Titan Axis',
  text:
    'As Titan Axis develops, we are interested in people who can contribute across technology, talent, digital operations and international business.',
  categories: [
    { label: 'Recruitment', icon: Users },
    { label: 'Digital Marketing', icon: Megaphone },
    { label: 'Technology', icon: Cpu },
    { label: 'AI & Automation', icon: Bot },
    { label: 'Business Operations', icon: Briefcase },
    { label: 'International Business', icon: Globe },
  ],
  cta: { label: 'Contact Us', to: '/contact' },
};

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────

export const contactPage = {
  heading: 'Start A Business Conversation',
  text: 'Tell us what you are looking for and how Titan Axis can help.',
  interests: [
    'International Talent',
    'Business Support',
    'Digital Operations',
    'Technology / AI',
    'Travel & International Services',
    'Partnership',
    'Other',
  ],
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────

export const footer = {
  companyName: 'TITAN AXIS CORPORATION',
  tagline: 'Connecting People, Technology & Global Business',
  columns: [
    {
      title: 'Business',
      links: [
        { label: 'International Talent', to: '/business/international-talent' },
        { label: 'Digital Operations', to: '/business/digital-operations' },
        { label: 'Business Support', to: '/business/business-support' },
        { label: 'Travel & International', to: '/business/travel-international' },
      ],
    },
    {
      title: 'Technology',
      links: [
        { label: 'AI Workforce', to: '/technology/ai-workforce' },
        { label: 'Intelligent Automation', to: '/technology/intelligent-automation' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Partners', to: '/partners' },
        { label: 'Careers', to: '/careers' },
        { label: 'Contact', to: '/contact' },
      ],
    },
  ],
  copyright: '© 2026 Titan Axis Corporation',
};
