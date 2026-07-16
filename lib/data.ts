export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Employers", href: "/employers" },
  { label: "Candidates", href: "/candidates" },
  { label: "10 Pillars", href: "/pillars" },
  { label: "Jobs", href: "/jobs" },
  { label: "Contact", href: "/contact" },
];

export const PILLARS = [
  {
    n: "01",
    title: "Precision Discovery",
    desc: "We don't spray and pray. Every search begins with a structured discovery process that maps role requirements, cultural nuance, and technical specifics before a single candidate is contacted.",
  },
  {
    n: "02",
    title: "Intelligent Sourcing",
    desc: "Multi-channel sourcing identifies qualified talent across platforms, databases, and passive networks — at a speed and scale that drives faster, higher-quality results.",
  },
  {
    n: "03",
    title: "Human Qualification",
    desc: "Every candidate surfaced by our systems is reviewed, screened, and qualified by an experienced recruiter. We interpret what a résumé can't say.",
  },
  {
    n: "04",
    title: "Technical Alignment",
    desc: "For IT and STEM roles, technical fit is non-negotiable. We coordinate structured technical screening to confirm skills before candidates reach your team.",
  },
  {
    n: "05",
    title: "Behavioral Evaluation",
    desc: "Competency and behavioral assessment methods give clients insight beyond the résumé — work style, communication, adaptability, and team dynamics.",
  },
  {
    n: "06",
    title: "Relationship-Driven Engagement",
    desc: "Candidates are people, not profiles. We engage each person with honesty, respect, and real career guidance — building loyalty that benefits clients too.",
  },
  {
    n: "07",
    title: "Speed with Accountability",
    desc: "We move fast without cutting corners. Efficient workflows reduce time-to-submit while our team maintains the quality controls that protect your hiring investment.",
  },
  {
    n: "08",
    title: "Workflow Transparency",
    desc: "Clients and candidates always know where things stand. We provide visibility into pipeline status, search progress, and submission documentation.",
  },
  {
    n: "09",
    title: "Quality Assurance",
    desc: "Before any candidate reaches a client, they pass our internal QA layer — background alignment, documentation review, and final human sign-off. No noise. Only qualified people.",
  },
  {
    n: "10",
    title: "Long-Term Partnership",
    desc: "Placements are the beginning, not the end. We invest in ongoing relationships with clients and candidates to become a trusted, long-term workforce partner.",
  },
];

export interface ServiceItem {
  title: string;
  what: string;
  who: string;
  benefits: string[];
}

export interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

export const SERVICES: ServiceCategory[] = [
  {
    category: "Core Staffing",
    items: [
      {
        title: "IT & STEM Talent Solutions",
        what: "End-to-end recruitment for technology, engineering, data, and STEM professionals.",
        who: "Organizations scaling tech teams — from startups to enterprise.",
        benefits: [
          "Specialized IT/STEM recruiter expertise",
          "Rapid sourcing across active and passive talent",
          "Technical screening coordination included",
        ],
      },
      {
        title: "Contract Staffing",
        what: "Flexible, fast-access talent for project-based, interim, and surge hiring needs.",
        who: "Companies needing qualified professionals without permanent headcount commitments.",
        benefits: [
          "Rapid deployment of vetted talent",
          "Flexible engagement terms",
          "Compliance and onboarding support",
        ],
      },
      {
        title: "Contract-to-Hire",
        what: "Trial-to-permanent engagements that reduce hiring risk while identifying long-term fit.",
        who: "Companies wanting proof-of-performance before committing to direct hire.",
        benefits: [
          "See candidates in action before committing",
          "Reduced mis-hire risk",
          "Smooth conversion process",
        ],
      },
      {
        title: "Direct Hire Search",
        what: "Full-cycle retained and contingency search for permanent professional placements.",
        who: "Organizations investing in key hires that require deep market coverage.",
        benefits: [
          "Dedicated search, sourcing, and vetting",
          "Comprehensive market coverage",
          "Guaranteed replacement assurance",
        ],
      },
    ],
  },
  {
    category: "Workforce Strategy",
    items: [
      {
        title: "Workforce Strategy & Talent Delivery",
        what: "Advisory and execution support for workforce planning, talent gap analysis, and hiring strategy.",
        who: "HR leaders and executives planning for scale, transformation, or workforce change.",
        benefits: [
          "Workforce gap and needs analysis",
          "Strategic talent roadmapping",
          "Scalable delivery model design",
        ],
      },
    ],
  },
];

export const STATS = [
  { value: "25+", label: "Years Industry Experience" },
  { value: "10", label: "Staffing Pillars Framework" },
  { value: "CA SB", label: "Certified Small Business" },
  { value: "Multi-Sector", label: "Industry Coverage" },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Discovery Call",
    desc: "We learn your role requirements, team culture, timeline, and success criteria before any search begins.",
  },
  {
    n: "02",
    title: "Targeted Sourcing",
    desc: "Our sourcing layer identifies qualified candidates across multiple platforms and passive networks simultaneously.",
  },
  {
    n: "03",
    title: "Human Qualification",
    desc: "Every candidate is reviewed, interviewed, and qualified by an experienced recruiter before being considered for submission.",
  },
  {
    n: "04",
    title: "Vetted Submission",
    desc: "You receive a curated shortlist of qualified, documented candidates — with recruiter notes, not just résumés.",
  },
  {
    n: "05",
    title: "Interview Coordination",
    desc: "We coordinate scheduling, prepare candidates, and facilitate technical screenings to keep your process moving.",
  },
  {
    n: "06",
    title: "Offer & Onboarding",
    desc: "We support offer negotiations, acceptance, and onboarding to maximize successful placement and retention.",
  },
];

export const CONTACT_INFO = {
  email: "michael@10pillarssolutions.com",
  phone: "916-420-7006",
  location: "Sacramento, CA",
  mailingAddress: "PO Box 122, Carmichael, CA 95608",
  responseTime: "We respond within 1 business day",
};

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Equal Employment Opportunity", href: "/eeo" },
];
