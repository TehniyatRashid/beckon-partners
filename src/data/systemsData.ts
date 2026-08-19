import { BusinessSystem } from '../types';

export const BUSINESS_SYSTEMS: BusinessSystem[] = [
  {
    id: 'customer-growth',
    number: '01',
    title: 'Customer Growth',
    slug: 'customer-growth',
    tagline: 'Turn attention into customers — and customers into long-term relationships.',
    summary: 'Disconnects between marketing, enquiries, call handling, and sales kill conversion. We unify lead capture, AI receptionists, WhatsApp messaging, and CRM pipelines into one instant response engine.',
    capabilities: [
      'Premium Websites & High-Converting Portals',
      'Unified CRM & Lead Management',
      'AI Website Assistant & Live Qualifier',
      'AI WhatsApp Business Assistant',
      '24/7 AI Phone Receptionist & Call Handler',
      'Automated Reservations & Booking Engine',
      'Missed-Call & Abandoned-Booking Recovery',
      'Multi-Channel Marketing Automation (WhatsApp, SMS, Email)',
      'Customer Loyalty & Retention Engine',
      'Reputation Management & Automated Reviews'
    ],
    outcomes: [
      'Zero missed leads across phone, WhatsApp, and website',
      '<60s median response time to new inbound enquiries',
      '3x higher enquiry-to-appointment conversion rate',
      '40% reduction in no-shows through automated confirmation flows',
      'Substantial increase in customer lifetime value (LTV)'
    ],
    technologyStack: [
      'AI Receptionist Engine',
      'WhatsApp Business API',
      'Unified CRM Core',
      'Web Booking Webhooks',
      'Twilio / Voice Telephony'
    ],
    exampleWorkflow: {
      title: '24/7 Missed-Call & Instant WhatsApp Recovery',
      trigger: 'Customer calls after hours or during peak service when lines are busy.',
      steps: [
        'AI Voice Receptionist answers on first ring, qualifies caller request in natural language.',
        'Extracted job details (name, urgency, location, service type) automatically push to CRM.',
        'Instant WhatsApp confirmation sent to caller with interactive booking slot options.',
        'Job assigned to duty manager or engineer calendar with full transcript attached.'
      ],
      result: '100% of missed call opportunities captured and converted into scheduled jobs without human manual typing.'
    },
    metricsHighlight: {
      stat: '<60s',
      label: 'Median Response Time',
      context: 'Across phone, WhatsApp, and web form enquiries 24 hours a day.'
    },
    iconName: 'UserCheck'
  },
  {
    id: 'revenue-growth',
    number: '02',
    title: 'Revenue Growth',
    slug: 'revenue-growth',
    tagline: 'Understand where money is made, where it leaks, and where margins can improve.',
    summary: 'Most businesses suffer from invisible margin erosion through recipe variance, unmonitored supplier price spikes, manual billing delays, and uncaptured inventory waste. We connect pricing, costing, and financial reporting.',
    capabilities: [
      'Recipe & Ingredient Costing Engine',
      'Real-Time Food & Material Cost Management',
      'Menu & Product Profitability Matrix',
      'Automated Margin Leakage & Variance Alerts',
      'Inventory Optimization & Waste Tracking',
      'Automated Supplier Purchasing & Price Comparison',
      'Profit & Loss Real-Time Dashboard',
      'Pricing Strategy & Yield Insights',
      'Sales Channel Margin Analytics',
      'Automated Invoicing & Collections Engine'
    ],
    outcomes: [
      '3% to 6% direct net margin expansion through waste elimination',
      'Automated detection of supplier price inflation before bills are paid',
      'Complete visibility into SKU-level and dish-level contribution margins',
      '14-day reduction in average Days Sales Outstanding (DSO)',
      'Data-backed pricing decisions aligned with real-time inflation'
    ],
    technologyStack: [
      'POS Integration Middleware',
      'Inventory Engine',
      'Accounting API (Xero / QuickBooks)',
      'Supplier Invoice OCR Parser',
      'Yield Calculation Engine'
    ],
    exampleWorkflow: {
      title: 'Automated Recipe Costing & Supplier Price Variance Tracking',
      trigger: 'Supplier delivers invoice with 12% price increase on prime ingredient.',
      steps: [
        'Invoice scanner extracts itemized line costs and matches against historical baseline.',
        'System recalculates cost-of-goods-sold (COGS) across 14 affected menu items.',
        'Yield alert triggered to Head Chef & GM highlighting margin dip below target 68%.',
        'Recommended menu price adjustments generated and pushed to POS & Digital Menus.'
      ],
      result: 'Prevents $4,200/month invisible margin erosion from unnoticed supplier price hikes.'
    },
    metricsHighlight: {
      stat: '+4.8%',
      label: 'Net Margin Improvement',
      context: 'Achieved across pilot hospitality and retail clients within 90 days.'
    },
    iconName: 'TrendingUp'
  },
  {
    id: 'operational-excellence',
    number: '03',
    title: 'Operational Excellence',
    slug: 'operational-excellence',
    tagline: 'Remove repetitive work, disconnected processes, and unnecessary manual administration.',
    summary: 'When teams copy data between spreadsheets, paper tickets, email inboxes, and legacy software, errors multiply and speed plummets. We build automated operational bridges that execute routine tasks flawlessly.',
    capabilities: [
      'End-to-End Workflow Automation',
      'Cross-Platform Document Processing & Approvals',
      'Custom Internal Operations Platforms',
      'Real-Time Job Routing & Task Automation',
      'Automated Operational Alerts & Exception Escalation',
      'Centralized Knowledge Base & SOP Portals',
      'Multi-System Data Synchronization',
      'Inventory & Field Asset Movement Tracking',
      'Vendor & Subcontractor Coordination Portals',
      'Quality Control & Compliance Audit Trails'
    ],
    outcomes: [
      'Elimination of 70%+ of routine manual data entry and retyping',
      '5x faster quote-to-dispatch execution cycles',
      'Zero lost job sheets, invoices, or customer delivery records',
      'Real-time SLA monitoring across operational departments',
      'Standardized execution across multiple locations/sites'
    ],
    technologyStack: [
      'Beckon Operational Core',
      'Webhook Orchestrator',
      'Document OCR Parser',
      'Field Dispatch API',
      'Enterprise Queue Engine'
    ],
    exampleWorkflow: {
      title: 'Automated Enquiry-to-Dispatch Workflow',
      trigger: 'Customer signs digital proposal or approves estimate.',
      steps: [
        'Contract status updates instantly across Sales, Accounting, and Dispatch.',
        'Materials requisitions auto-pushed to warehouse with picking list generated.',
        'Job assigned to field technician route based on location and skill qualification.',
        'Automated WhatsApp notification sent to client with technician photo and ETA.'
      ],
      result: 'Cuts job preparation time from 3 hours of office re-typing to 45 seconds of automated execution.'
    },
    metricsHighlight: {
      stat: '70%',
      label: 'Manual Task Reduction',
      context: 'Hours saved from manual data entry, spreadsheet updating, and phone chasing.'
    },
    iconName: 'Cpu'
  },
  {
    id: 'team-productivity',
    number: '04',
    title: 'Team Productivity',
    slug: 'team-productivity',
    tagline: 'Give employees one clear system for getting work done.',
    summary: 'Unclear task ownership, buried communication, and fragmented shift management slow down execution. We create single-pane-of-glass team interfaces with clear accountability, automated handoffs, and performance tracking.',
    capabilities: [
      'Centralized Task & Project Management',
      'Manager Accountability & Escalation Rules',
      'Role-Based Granular Permissions & Access',
      'Unified Team Messaging & Contextual Activity Logs',
      'Staff Performance & SLA Metrics Tracking',
      'Automated Staff Onboarding & Training Portals',
      'Shift Management & Attendance Synchronization',
      'Manager Real-Time Notification Center',
      'Digital Handover Logs & Site Audit Trails',
      'Internal Knowledge Systems & Instant AI Search'
    ],
    outcomes: [
      '31% increase in completed task velocity per employee/week',
      'Reduction in onboarding time for new team members from weeks to days',
      'Complete audit trail on every customer order and internal approval',
      'Elimination of "I didn’t know who was responsible" excuses',
      'Higher employee satisfaction through friction-free workflows'
    ],
    technologyStack: [
      'Team Portal Interface',
      'Role Permissions Matrix',
      'Internal Notification Engine',
      'Shift & Scheduling Middleware',
      'Activity Stream Audit DB'
    ],
    exampleWorkflow: {
      title: 'Shift Change Handover & Incident Escalation',
      trigger: 'Night manager completes shift audit on mobile portal.',
      steps: [
        'Outstanding maintenance items, pending customer queries, and stock alerts logged in 60 seconds.',
        'Morning shift manager receives prioritized digest with assigned actions before arriving on site.',
        'Overdue high-priority items automatically escalate to Regional Director if unaddressed within 2 hours.',
        'Complete chronological audit log stored against site history.'
      ],
      result: '100% operational continuity across shift handovers without dropped balls.'
    },
    metricsHighlight: {
      stat: '31%',
      label: 'Higher Execution Speed',
      context: 'More completed tasks per employee per week with zero added headcount.'
    },
    iconName: 'Users'
  },
  {
    id: 'executive-intelligence',
    number: '05',
    title: 'Executive Intelligence',
    slug: 'executive-intelligence',
    tagline: 'Give leadership one reliable view of the business.',
    summary: 'CEOs cannot lead effectively when decisions rely on outdated end-of-month spreadsheets and conflicting departmental reports. We consolidate multi-system data into real-time executive dashboards with drill-down clarity.',
    capabilities: [
      'Unified Real-Time Executive Dashboards',
      'Consolidated Business Intelligence (BI)',
      'Live Operational & Financial KPI Monitoring',
      'Automated Daily/Weekly Executive Briefing Reports',
      'Revenue Forecasting & Trend Analysis',
      'Cross-System Multi-Location Reporting',
      'Decision-Support Anomaly Detection Alerts',
      'Customer Retention & Churn Analytics',
      'Staff Productivity & Labor Cost Ratios',
      'Custom Board & Investor Reporting Modules'
    ],
    outcomes: [
      'Instant real-time visibility into company-wide financial and operational health',
      'Elimination of 20+ hours of monthly manual report assembly by senior leadership',
      'Early detection of margin slips, inventory waste, or conversion drop-offs',
      'Single source of truth replacing conflicting department spreadsheets',
      'Data-driven confidence for expansion, hiring, and capital allocation'
    ],
    technologyStack: [
      'Data Lake / Warehouse Core',
      'Cross-System ETL Pipeline',
      'Executive Analytics Dashboard',
      'Predictive Anomaly Engine',
      'Automated PDF/WhatsApp Briefing Service'
    ],
    exampleWorkflow: {
      title: 'Automated Morning Executive Briefing',
      trigger: '07:30 AM daily scheduled system audit.',
      steps: [
        'Extracts yesterday’s sales, gross profit, food/material costs, labor ratio, and pending leads.',
        'Compares figures against monthly budget and 12-week moving averages.',
        'Identifies top 2 positive drivers and top 2 operational bottlenecks requiring attention.',
        'Delivers concise 1-page visual executive briefing to CEO via WhatsApp & Email.'
      ],
      result: 'Leadership starts every morning with 100% accurate clarity on yesterday’s performance.'
    },
    metricsHighlight: {
      stat: '100%',
      label: 'Single Source of Truth',
      context: 'One unified executive view replacing fragmented month-end reports.'
    },
    iconName: 'BarChart3'
  }
];
