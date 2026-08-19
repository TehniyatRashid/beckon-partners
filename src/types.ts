export type RoutePath =
  | '/'
  | '/how-we-work'
  | '/systems'
  | '/systems/customer-growth'
  | '/systems/revenue-growth'
  | '/systems/operational-excellence'
  | '/systems/team-productivity'
  | '/systems/executive-intelligence'
  | '/ecosystem'
  | '/methodology'
  | '/integrations'
  | '/industries'
  | '/industries/restaurants'
  | '/industries/delivery-logistics'
  | '/industries/construction'
  | '/industries/hospitality'
  | '/industries/retail'
  | '/industries/healthcare'
  | '/industries/professional-services'
  | '/assessment'
  | '/insights'
  | '/about'
  | '/brandkit'
  | '/contact';

export interface BusinessSystem {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  summary: string;
  capabilities: string[];
  outcomes: string[];
  technologyStack: string[];
  exampleWorkflow: {
    title: string;
    trigger: string;
    steps: string[];
    result: string;
  };
  metricsHighlight: {
    stat: string;
    label: string;
    context: string;
  };
  iconName: string;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  heroBadge?: string;
  heroHeadline?: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  heroImage?: string;
  teamImage1?: string;
  teamImage2?: string;
  corePillars?: {
    title: string;
    category: string;
    description: string;
    iconName?: string;
  }[];
  bentoSection?: {
    eyebrow: string;
    headline: string;
    subtext: string;
    statNumber: string;
    statLabel: string;
    architectName: string;
    architectRole: string;
    architectAvatar: string;
    architectQuote: string;
    capabilities: string[];
  };
  detailedPainVsSolution?: {
    painTitle: string;
    painDescription: string;
    solutionTitle: string;
    solutionDescription: string;
    impact: string;
  }[];
  typicalProblems: string[];
  connectedSystems: string[];
  architectureSummary: string;
  expectedOutcomes: {
    metric: string;
    description: string;
  }[];
  exampleCaseSummary: {
    headline: string;
    detail: string;
  };
  exampleWorkflow?: {
    title: string;
    trigger: string;
    steps: string[];
    result: string;
  };
}

export interface CaseStudy {
  id: string;
  industry: string;
  clientTitle: string;
  scaleInfo: string;
  challenge: string;
  whatWeBuilt: string;
  outcomeMetric: string;
  outcomeDetail: string;
  fullStory: {
    before: string;
    businessCost: string;
    system: string;
    after: string;
    result: string;
  };
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Business Systems' | 'Transformation' | 'AI & WhatsApp' | 'Operations' | 'Executive Intelligence';
  readTime: string;
  publishedDate: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
}

export interface SoftwareIntegration {
  id: string;
  name: string;
  category: 'POS' | 'ERP' | 'CRM' | 'Accounting' | 'Inventory' | 'Messaging' | 'BI & Analytics';
  description: string;
  howWeConnect: string;
  examples: string[];
}

export interface AssessmentQuestion {
  id: number;
  category: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    value: number;
    description: string;
  }[];
}
