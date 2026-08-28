import { Industry } from '../types';

export const INDUSTRIES: Industry[] = [
  {
    id: 'restaurants',
    name: 'Restaurants & F&B Groups',
    slug: 'restaurants',
    subtitle: 'Cost control, instant reservation capture, and live recipe margin protection.',
    description: 'High-volume food and beverage operations face razor-thin margins, volatile ingredient pricing, and lost reservations during peak hours. Beckon connects POS, recipe costing, WhatsApp ordering, and staff shift systems into one automated operating engine.',
    heroBadge: '4.9 ★★★★★ 120+ F&B Locations Connected',
    heroHeadline: {
      prefix: 'NEXT — GEN CONNECTED',
      highlight: 'RESTAURANT & F&B',
      suffix: 'SYSTEMS'
    },
    heroImage: '/images/industries/restaurants-hero.jpg',
    teamImage1: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    teamImage2: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    corePillars: [
      {
        category: 'Customer Growth',
        title: '24/7 WhatsApp Table & Order Intake',
        description: 'Never miss a booking during Friday dinner rush. Automated AI concierge handles reservations, dietary questions, and private event inquiries on ring one.',
        iconName: 'UserCheck'
      },
      {
        category: 'Cost Protection',
        title: 'Live Recipe & Ingredient Costing',
        description: 'Direct POS integration recalculates plate gross margins whenever supplier invoice prices fluctuate, instantly alerting managers to margin slippage.',
        iconName: 'TrendingUp'
      },
      {
        category: 'Operational Sync',
        title: 'Automated Shift & Inventory Middleware',
        description: 'Reconciles POS sales against kitchen prep inventory in real-time, eliminating manual clipboard stock takes and end-of-day register discrepancies.',
        iconName: 'Workflow'
      }
    ],
    bentoSection: {
      eyebrow: 'Why Beckon for Hospitality & Dining?',
      headline: 'Comprehensive solution for F&B operational excellence',
      subtext: 'We connect your existing POS (Toast, Square, Lightspeed, Clover) directly to accounting (Xero, QuickBooks) and automated WhatsApp guest channels without replacing your current hardware.',
      statNumber: '$18K+',
      statLabel: 'Monthly Extra Bookings Recovered Per Group',
      architectName: 'Marcus Vance',
      architectRole: 'Managing Director & F&B Systems Architect',
      architectAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      architectQuote: 'Restaurants operate on intense cycle times. If your kitchen prep, reservation desk, and supplier invoices do not talk in real time, you leak 3 to 6 points of net margin every week.',
      capabilities: ['RECIPE COSTING', 'LIVE POS SYNC', 'WHATSAPP BOOKING', 'INVOICE OCR', 'KITCHEN KDS', 'LABOR ROSTERING']
    },
    detailedPainVsSolution: [
      {
        painTitle: 'Supplier Price Creep & Unnoticed Margin Erosion',
        painDescription: 'Food suppliers increase meat, oil, and produce prices by 8-15%. Because menus are static and paper invoices sit in a box, owners do not notice margin drops until the accountant sends the quarterly P&L.',
        solutionTitle: 'Automated Invoice Sync & Real-Time Plate Costing',
        solutionDescription: 'Supplier digital invoices are scanned via OCR the moment they arrive. The system automatically recalculates food cost percentage per dish and flags menu items falling below target 68% gross margin.',
        impact: '+4.5% Net Margin Recovery across high-volume dishes'
      },
      {
        painTitle: 'Missed Phone Calls During Busy Dinner Rush',
        painDescription: 'During peak service hours (6 PM - 9 PM), the host is seating guests. The restaurant phone rings unanswered, and potential diners book at a competitor down the street.',
        solutionTitle: 'Instant AI WhatsApp Reservation Assistant',
        solutionDescription: 'Missed calls instantly trigger an automated WhatsApp message with a live reservation link or conversational table booking assistant connected straight to OpenTable, SevenRooms, or Resy.',
        impact: 'Zero lost booking opportunities; $18,000/mo extra revenue'
      },
      {
        painTitle: 'POS Sales vs. Physical Stock Variance',
        painDescription: 'Kitchen staff guess portion sizes or waste prep without logging. At month-end, the physical stock count is missing $4,000 in inventory, but nobody knows which shift or station caused it.',
        solutionTitle: 'Theoretical vs. Actual Depletion Tracking',
        solutionDescription: 'Every dish sold on the POS decrements exact recipe ingredients in the inventory ledger. Daily variance reports highlight over-portioning and waste per station before it compounds.',
        impact: '25% Reduction in kitchen food waste and unlogged shrinkage'
      },
      {
        painTitle: 'Manual Shift Scheduling & Overtime Surprises',
        painDescription: 'Managers write schedules on spreadsheets. Changes are negotiated across disjointed SMS group chats, leading to short-staffed shifts and unapproved overtime penalties.',
        solutionTitle: 'Connected Labor & Sales Forecasting Engine',
        solutionDescription: 'Schedules are automatically generated based on historical POS hourly sales trends. Staff confirm or swap shifts through WhatsApp with manager 1-click approvals.',
        impact: '3.8% Lower labor cost percentage per dining shift'
      }
    ],
    typicalProblems: [
      'Unnoticed ingredient price increases eroding dish profitability',
      'Phone lines ringing unanswered during busy lunch/dinner services',
      'High third-party delivery commission fees cutting into net margins',
      'Stock variance between POS depletion and physical kitchen inventory',
      'Manual, time-consuming shift handover and prep list management'
    ],
    connectedSystems: [
      'Recipe & Ingredient Costing Engine',
      'AI WhatsApp Reservation & Order Recovery',
      'POS & Kitchen Display System (KDS) Integration',
      'Inventory & Supplier Variance Alerting',
      'Executive F&B Profitability Dashboard'
    ],
    architectureSummary: 'POS sales data flows directly into the Recipe Cost Engine, comparing theoretical ingredient usage against physical stock takes. Inbound calls during service trigger instant WhatsApp reservation links.',
    expectedOutcomes: [
      { metric: '+4.5%', description: 'Net margin increase from real-time recipe costing and waste reduction.' },
      { metric: 'Zero', description: 'Lost reservations during busy peak dining hours.' },
      { metric: '25%', description: 'Reduction in food waste variance across kitchen stations.' }
    ],
    exampleCaseSummary: {
      headline: 'Multi-Location Restaurant Group (4 Sites)',
      detail: 'Connected 4 dining locations with automated recipe costing and 24/7 WhatsApp booking assistant, capturing $18,000/month in extra reservations.'
    },
    exampleWorkflow: {
      title: 'Peak Service Table Reservation & Auto-Confirmation',
      trigger: 'Customer calls restaurant during busy 7:30 PM service; phone rings without pickup.',
      steps: [
        'Call routing system detects busy state and sends instant WhatsApp link: "Sorry we missed you! Would you like a table tonight?"',
        'Guest replies with party size and time; AI checks live SevenRooms/Resy table availability.',
        'Reservation confirmed instantly, booking assigned to host stand iPad, and SMS reminder sent with calendar invite.',
        'Kitchen prep roster automatically updates expected cover forecast.'
      ],
      result: '100% reservation capture with zero staff interruption during service.'
    }
  },
  {
    id: 'construction',
    name: 'Construction & Field Services',
    slug: 'construction',
    subtitle: 'Subcontractor accountability, live job costing, and field-to-office sync.',
    description: 'Contractors lose significant profit on unbilled variation orders, delayed quote approvals, missing site logs, and disconnected field teams. Beckon connects field technicians, site managers, job costing, and client quotes.',
    heroBadge: '4.9 ★★★★★ 85+ Commercial & Trade Firms',
    heroHeadline: {
      prefix: 'NEXT — GEN CONNECTED',
      highlight: 'CONSTRUCTION & FIELD',
      suffix: 'OPERATIONS'
    },
    heroImage: '/images/industries/construction-hero.jpg',
    teamImage1: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    teamImage2: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    corePillars: [
      {
        category: 'Revenue Pipeline',
        title: 'Instant Quote & WhatsApp Sign-Off',
        description: 'Turn site visits into signed digital contracts in minutes. Clients approve quotes and pay deposits on their phones before competitors even send an email.',
        iconName: 'FileCheck'
      },
      {
        category: 'Operational Sync',
        title: 'Field-to-Office Job Dispatching',
        description: 'Engineers receive GPS-mapped job orders, site blueprints, and safety checklists on mobile. Digital completion logs sync directly with accounting.',
        iconName: 'Truck'
      },
      {
        category: 'Margin Protection',
        title: 'Real-Time Job Costing & Variation Tracking',
        description: 'Capture every extra site hour and material variation on-site with client photo sign-off. Never do free unbilled extra work again.',
        iconName: 'ShieldCheck'
      }
    ],
    bentoSection: {
      eyebrow: 'Why Beckon for Contracting & Trades?',
      headline: 'Comprehensive solution for field & site operational excellence',
      subtext: 'We bridge job management software (ServiceM8, SimPRO, Buildertrend, Jobber) with accounting (Xero, QuickBooks) and automated client communications so every job is accurately billed and tracked.',
      statNumber: '100%',
      statLabel: 'Capture of On-Site Project Variations',
      architectName: 'Jonathan Chen',
      architectRole: 'Director of Field Operations & Systems Architecture',
      architectAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      architectQuote: 'In contracting, profit isn’t lost in the office—it leaks on the job site through unrecorded variations, lost timesheets, and slow quote follow-ups. We make billing automatic.',
      capabilities: ['JOB COSTING', 'VARIATION CAPTURE', 'GPS DISPATCH', 'MOBILE SIGN-OFF', 'XERO SYNC', 'SUBCONTRACTOR PORTAL']
    },
    detailedPainVsSolution: [
      {
        painTitle: 'Unbilled Extra Site Work (Variations Leakage)',
        painDescription: 'A client asks the foreman on-site to add extra power outlets or extend a wall. The crew executes the work, but fails to write down the extra labor and materials. At invoicing, the client disputes the surprise bill.',
        solutionTitle: 'Digital Mobile Variation Sign-Off',
        solutionDescription: 'Foreman records the variation in 30 seconds on mobile with photos. Client receives an instant WhatsApp approval link to sign on glass. The change order automatically updates the master project budget.',
        impact: '100% of extra site work captured and fully paid without disputes'
      },
      {
        painTitle: 'Slow Quote Turnaround & Cold Leads',
        painDescription: 'After surveying a job site, estimators take 5-7 days to type up quotes in the office. By the time the email is sent, the homeowner or general contractor has hired someone else.',
        solutionTitle: 'Rapid Templated Mobile Estimating & Auto-Nudge',
        solutionDescription: 'Estimators generate branded digital proposals on-site using pre-costed material assemblies. Automated WhatsApp reminders trigger if the proposal is viewed but not signed within 48 hours.',
        impact: '3x Higher quote conversion rate; turnaround reduced to under 4 hours'
      },
      {
        painTitle: 'Paper Timesheets & Missing Labor Tracking',
        painDescription: 'Technicians submit messy paper timesheets at the end of the week. Office staff spend 12+ hours deciphering handwriting and manually entering hours into payroll and job costing.',
        solutionTitle: 'GPS-Verified Mobile Clock-In & Auto-Costing',
        solutionDescription: 'Field crews clock into specific job tickets from their smartphones. Geofencing verifies site presence, and logged hours flow straight into job costing and payroll software with zero re-keying.',
        impact: '12 administrative hours saved every week per 20 field engineers'
      },
      {
        painTitle: 'Blind Project Margins Until Month-End P&L',
        painDescription: 'Project managers only discover a job went over-budget weeks after completion when supplier invoices and subcontractor claims finally land on the accountant’s desk.',
        solutionTitle: 'Live Committed vs. Actual Cost Dashboard',
        solutionDescription: 'Live purchase orders, material deliveries, and logged hours are matched against quote line items in real time, alerting directors the moment a job crosses 80% budget threshold.',
        impact: '+6.2% Gross project margin improvement across commercial contracts'
      }
    ],
    typicalProblems: [
      'Quotes taking days to prepare while leads go cold or pick competitors',
      'Unbilled variation work executed on-site without formal client sign-off',
      'Office staff chasing field engineers for paper job sheets and timesheets',
      'No clear visibility on real-time project cost vs. initial budget estimate',
      'Equipment and tool tracking losses across active job sites'
    ],
    connectedSystems: [
      '24/7 AI Phone Intake & Dispatch Pipeline',
      'Digital Site Job Sheets & Client WhatsApp Approvals',
      'Real-Time Job Costing & Variation Tracking',
      'Subcontractor & Equipment Management',
      'Executive Project Margin Intelligence'
    ],
    architectureSummary: 'Calls from property owners answer instantly on ring 1, qualify emergency or maintenance requests, create job tickets, and send digital quote sign-offs directly via WhatsApp.',
    expectedOutcomes: [
      { metric: '3x', description: 'More enquiries converted into signed, billable contracts.' },
      { metric: '100%', description: 'Capture of on-site variation orders before work is executed.' },
      { metric: '11 Days', description: 'Cut from average enquiry-to-invoice completion timeline.' }
    ],
    exampleCaseSummary: {
      headline: '40-Vehicle Heating & Contracting Business',
      detail: 'Eliminated whiteboard booking systems, connecting 62 staff across 3 depots into one automated intake and dispatch pipeline.'
    },
    exampleWorkflow: {
      title: 'Emergency Site Call to Dispatched Engineer in 4 Minutes',
      trigger: 'Commercial property manager calls with emergency burst water main.',
      steps: [
        'AI Voice intake answers on ring 1, collects site address, contact name, and urgency level.',
        'System checks live GPS locations of on-duty technicians and assigns closest qualified plumber.',
        'Technician receives job ticket on smartphone with access codes and gate pin.',
        'Client receives live WhatsApp tracking link with technician ETA and photo ID.'
      ],
      result: 'Average emergency dispatch time reduced from 45 minutes to 4 minutes.'
    }
  },
  {
    id: 'delivery-logistics',
    name: 'Delivery & Logistics',
    slug: 'delivery-logistics',
    subtitle: 'Fleet coordination, instant customer tracking, and automated digital dispatching.',
    description: 'Logistics and courier operations depend heavily on fleet utilization, rapid proof of delivery (POD), and transparent customer communication. Beckon integrates order intake, route dispatch, driver updates, and invoicing into an error-free flow.',
    heroBadge: '4.9 ★★★★★ 60+ Fleet & Freight Operators',
    heroHeadline: {
      prefix: 'NEXT — GEN CONNECTED',
      highlight: 'DELIVERY & FLEET',
      suffix: 'LOGISTICS'
    },
    heroImage: '/images/industries/logistics-hero.jpg',
    teamImage1: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
    teamImage2: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
    corePillars: [
      {
        category: 'Intake Automation',
        title: 'Bulk Order & API Ingestion',
        description: 'Customer delivery orders from Shopify, EDI, emails, and phone calls automatically import and convert into optimized route manifests with zero manual typing.',
        iconName: 'Database'
      },
      {
        category: 'Customer Experience',
        title: 'Live WhatsApp POD & ETA Tracking',
        description: 'Receivers get live delivery windows and interactive WhatsApp notifications, eliminating repetitive "Where is my order?" phone calls to support.',
        iconName: 'MessageSquare'
      },
      {
        category: 'Finance Integration',
        title: 'Instant Digital POD to Invoicing',
        description: 'Driver photo and digital signature instantly close the delivery manifest and trigger automated invoice delivery to the corporate accounting team.',
        iconName: 'Receipt'
      }
    ],
    bentoSection: {
      eyebrow: 'Why Beckon for Freight & Delivery?',
      headline: 'Comprehensive solution for fleet and route operational excellence',
      subtext: 'We connect your transport management software (Onfleet, OptimoRoute, Samsara) directly with accounting (Xero, QuickBooks) and automated WhatsApp tracking so drivers and dispatchers stay synchronized.',
      statNumber: '85%',
      statLabel: 'Drop in "Where is my delivery?" Support Calls',
      architectName: 'Elena Rostova',
      architectRole: 'Head of Middleware & Logistics Engineering',
      architectAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      architectQuote: 'Every minute a dispatcher spends copy-pasting addresses into driver manifests is wasted fuel and lost margin. Connected logistics runs on instant data triggers.',
      capabilities: ['AUTO DISPATCH', 'LIVE GPS TRACKING', 'DIGITAL POD', 'ROUTE OPTIMIZATION', 'WHATSAPP ETAs', 'INSTANT BILLING']
    },
    detailedPainVsSolution: [
      {
        painTitle: 'Dispatchers Drowning in Manual Order Entry',
        painDescription: 'Every morning, dispatchers spend 3 hours re-typing orders from emails, spreadsheets, and client portals into separate driver route software. Typo mistakes send drivers to wrong addresses.',
        solutionTitle: 'Universal Order Ingestion & Auto-Manifesting',
        solutionDescription: 'All inbound shipment requests are automatically parsed and imported via webhook or email parser. The engine assigns optimal multi-stop routes based on vehicle payload and delivery time windows.',
        impact: '3.5 administrative hours saved daily per dispatch hub'
      },
      {
        painTitle: 'Support Phones Flooded with "Where is my order?" Calls',
        painDescription: 'Customers waiting for deliveries call the support desk constantly. Staff have to call the driver on mobile, ask where they are, and call the customer back, creating a communication bottleneck.',
        solutionTitle: 'Proactive WhatsApp Live Tracking Links',
        solutionDescription: 'When the driver is 2 stops away, the receiver receives an automated WhatsApp alert with live driver map ETA and delivery instructions. Customers can leave gate codes directly in the chat.',
        impact: '85% fewer inbound status calls; customer satisfaction rating at 96%'
      },
      {
        painTitle: 'Paper Delivery Receipts Delayed for Weeks (Slow Billing)',
        painDescription: 'Drivers keep paper sign-off sheets in clipboards inside vans. Invoices cannot be sent to clients until the driver returns to the depot and accounting manually reconciles the paperwork.',
        solutionTitle: 'Digital Proof of Delivery (POD) & Instant Invoicing',
        solutionDescription: 'The driver takes a photo and collects a digital signature on the mobile app. The moment "Delivered" is clicked, the system attaches the POD photo and emails the invoice to the customer billing department.',
        impact: 'Invoice payment cycle accelerated by 12 full days'
      },
      {
        painTitle: 'Unmonitored Deadhead Miles & Route Inefficiency',
        painDescription: 'Drivers take unoptimized routes or drive empty on return trips. Management has no central visibility into fuel cost per delivered stop until monthly fuel card bills arrive.',
        solutionTitle: 'Dynamic Fleet Density & Fuel Intelligence',
        solutionDescription: 'Telematics data integrates with route history to calculate actual cost-per-drop. Backhaul optimization suggests additional pickup jobs along the return route.',
        impact: '18% Higher fleet route density and reduced fuel consumption'
      }
    ],
    typicalProblems: [
      'Dispatch teams spending hours re-typing order details into driver apps',
      'Customers constantly calling customer service asking "Where is my delivery?"',
      'Delayed POD (Proof of Delivery) processing slowing down billing cycles',
      'Fuel cost spikes and unoptimized delivery routing',
      'Inconsistent vehicle maintenance tracking and safety compliance logs'
    ],
    connectedSystems: [
      'Automated Order Intake & Route Dispatcher',
      'Customer Live WhatsApp Delivery Tracking',
      'Digital POD & Instant Invoicing Engine',
      'Driver Mobile Operations Portal',
      'Fleet Utilization & Profitability Analytics'
    ],
    architectureSummary: 'Inbound customer shipment orders auto-generate dispatch tickets, assign drivers based on GPS proximity and capacity, and send automated live WhatsApp status links to receivers.',
    expectedOutcomes: [
      { metric: '85%', description: 'Fewer "Where is my order?" incoming customer calls.' },
      { metric: '12 Days', description: 'Faster invoice settlement thanks to instant digital POD generation.' },
      { metric: '18%', description: 'Higher fleet mileage utilization and route density.' }
    ],
    exampleCaseSummary: {
      headline: 'Regional Logistics Fleet (45 Vehicles)',
      detail: 'Replaced paper manifest clipboards with an automated dispatch portal, saving 35 administrative hours every week.'
    }
  },
  {
    id: 'retail',
    name: 'Retail & Multi-Site Commerce',
    slug: 'retail',
    subtitle: 'Omnichannel inventory, VIP customer retention, and automated multi-store purchasing.',
    description: 'Multi-store retailers struggle with inventory mismatches between physical branches and online stores, lost VIP relationships, and slow manual reordering. Beckon unifies POS, central inventory, CRM, and automated customer messaging.',
    heroBadge: '4.9 ★★★★★ 150+ Retail Stores Powered',
    heroHeadline: {
      prefix: 'NEXT — GEN CONNECTED',
      highlight: 'OMNICHANNEL RETAIL',
      suffix: 'SYSTEMS'
    },
    heroImage: '/images/industries/retail-hero.jpg',
    teamImage1: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80',
    teamImage2: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    corePillars: [
      {
        category: 'Inventory Sync',
        title: 'Real-Time Multi-Store Inventory Engine',
        description: 'Physical POS sales at any branch instantly update online Shopify/WooCommerce inventory within 2 seconds, eliminating painful out-of-stock cancellations.',
        iconName: 'Layers'
      },
      {
        category: 'Customer Retention',
        title: 'Automated WhatsApp VIP & Restock Alerts',
        description: 'Customer purchase history triggers personalized WhatsApp notifications when favorite items restock or seasonal collections arrive, driving 35% higher repeat sales.',
        iconName: 'Sparkles'
      },
      {
        category: 'Supply Chain',
        title: 'Predictive Supplier Reorder Triggers',
        description: 'Automated purchase orders are drafted and sent to suppliers the moment branch stock dips below calculated safety thresholds based on seasonal velocity.',
        iconName: 'ShoppingCart'
      }
    ],
    bentoSection: {
      eyebrow: 'Why Beckon for Retail & Multi-Site?',
      headline: 'Comprehensive solution for retail inventory and lifetime value',
      subtext: 'We connect physical store POS systems (Vend, Lightspeed, Shopify POS, Square) with ecommerce platforms, warehouse ERPs, and automated customer loyalty messaging into one cohesive hub.',
      statNumber: '+35%',
      statLabel: 'Higher Repeat Customer 90-Day Purchase Rate',
      architectName: 'Marcus Vance',
      architectRole: 'Managing Director & Retail Practice Lead',
      architectAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      architectQuote: 'When an in-store customer buys your product, that should not be the end of the data loop. It should immediately synchronize inventory, enrich the CRM, and trigger personalized retention.',
      capabilities: ['OMNICHANNEL SYNC', 'VIP WHATSAPP CRM', 'AUTOMATED REORDERS', 'SHOPIFY POS BRIDGE', 'MULTI-STORE BI', 'STOCKTAKINGS']
    },
    detailedPainVsSolution: [
      {
        painTitle: 'Ghost Inventory & Out-of-Stock Cancellations',
        painDescription: 'A customer buys the last jacket in the downtown store. 20 minutes later, an online customer orders the same jacket on your website. Staff have to cancel the order and issue a refund.',
        solutionTitle: 'Sub-Second Bidirectional Inventory Sync',
        solutionDescription: 'Every in-store barcode scan instantly updates the central ecommerce database and warehouse inventory in under 2 seconds, preventing overselling completely.',
        impact: 'Zero online oversell cancellations; 100% accurate live stock levels'
      },
      {
        painTitle: 'In-Store Shoppers Disappear After Purchase (Zero Retention)',
        painDescription: 'Customers buy at the register and walk out. Because paper receipts are discarded and emails land in spam folders, the brand has no effective way to bring them back.',
        solutionTitle: 'Interactive WhatsApp Digital Receipts & VIP Club',
        solutionDescription: 'Cashier offers WhatsApp digital receipt. Customer taps one button to opt-in, receiving care instructions and personalized restock reminders when relevant new arrivals drop.',
        impact: '35% Higher repeat purchase frequency within 90 days of first visit'
      },
      {
        painTitle: 'Manual Supplier Purchase Orders on Spreadsheets',
        painDescription: 'Store managers spend entire Sundays counting shelves and typing product numbers into supplier order forms. Fast-moving sizes run out while slow-moving styles over-accumulate.',
        solutionTitle: 'Velocity-Based Automated Reorder Triggers',
        solutionDescription: 'The engine calculates weekly sell-through rates per SKU and automatically drafts supplier purchase orders with ideal reorder quantities before stockouts happen.',
        impact: '15% Reduction in holding inventory costs; zero lost sales on top SKUs'
      },
      {
        painTitle: 'Blind Executive Multi-Store Performance',
        painDescription: 'Directors receive separate weekly sales reports from each store manager. Comparing branch profitability, margin per square foot, and staff sales performance requires hours of manual spreadsheet merging.',
        solutionTitle: 'Unified Multi-Location Revenue Cockpit',
        solutionDescription: 'Consolidates sales, gross margin, returns, and hourly labor costs from all store locations into an always-on executive dashboard accessible on phone or desktop.',
        impact: 'Daily morning executive summary sent automatically via WhatsApp/Slack'
      }
    ],
    typicalProblems: [
      'Stockouts in store while warehouse has excess unsold inventory',
      'Inability to track customer purchasing behavior across physical and online stores',
      'Low repeat purchase rates due to lack of personalized follow-up',
      'Manual, error-prone purchase order generation with suppliers',
      'Disconnected store performance metrics and sales reporting'
    ],
    connectedSystems: [
      'Real-Time Omnichannel Inventory Sync',
      'Unified Customer Profile & VIP CRM',
      'Automated WhatsApp Loyalty & Restock Reminders',
      'Supplier Purchasing & Reorder Engine',
      'Multi-Store Executive Revenue Dashboard'
    ],
    architectureSummary: 'POS transactions instantly update central inventory and customer profiles, triggering tailored restock or new arrival alerts on WhatsApp based on past purchase history.',
    expectedOutcomes: [
      { metric: '35%', description: 'Higher repeat customer purchase frequency within 90 days.' },
      { metric: 'Zero', description: 'Discrepancies between online displayed stock and store shelves.' },
      { metric: '15%', description: 'Reduction in excess holding inventory costs.' }
    ],
    exampleCaseSummary: {
      headline: '12-Store Multi-Site Retail Brand',
      detail: 'Connected physical POS systems with central warehouse inventory and WhatsApp loyalty campaigns, increasing LTV by 28%.'
    }
  },
  {
    id: 'professional-services',
    name: 'Professional Services & Consultancies',
    slug: 'professional-services',
    subtitle: 'Client onboarding, proposal tracking, and automated document collection.',
    description: 'Accounting firms, legal practices, and consulting agencies lose weeks waiting for client onboarding documents, proposal sign-offs, and unchased invoices. Beckon connects lead intake, client onboarding, task management, and billing.',
    heroBadge: '4.9 ★★★★★ 90+ Advisory & Accounting Firms',
    heroHeadline: {
      prefix: 'NEXT — GEN CONNECTED',
      highlight: 'PROFESSIONAL SERVICES',
      suffix: 'SYSTEMS'
    },
    heroImage: '/images/industries/professional-services-hero.jpg',
    teamImage1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    teamImage2: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    corePillars: [
      {
        category: 'Client Onboarding',
        title: 'Automated Document Collection Portal',
        description: 'Clients upload KYC, tax returns, and corporate filings into a secure, branded portal with automated SMS/WhatsApp reminders for missing items.',
        iconName: 'FileCheck'
      },
      {
        category: 'Revenue Pipeline',
        title: 'Smart Proposals & Dynamic Engagement Letters',
        description: 'Generate customized engagement letters in 2 minutes. Track when clients open proposals and trigger automated follow-ups until signed.',
        iconName: 'TrendingUp'
      },
      {
        category: 'Practice Intelligence',
        title: 'Live Project Margin & Utilization Cockpit',
        description: 'Track billable hours against fixed-fee project scopes in real time, alerting partners before out-of-scope work eats into firm profit.',
        iconName: 'BarChart3'
      }
    ],
    bentoSection: {
      eyebrow: 'Why Beckon for Professional Advisory?',
      headline: 'Comprehensive solution for client onboarding and billable velocity',
      subtext: 'We connect your CRM (HubSpot, Zoho, Salesforce) with practice management tools (Karbon, Ignition, Practice Ignition, Asana) and billing (Xero, QuickBooks) so client engagements flow automatically.',
      statNumber: '11 Days',
      statLabel: 'Cut from Average Client Onboarding Time',
      architectName: 'Marcus Vance',
      architectRole: 'Managing Director & Enterprise Architect',
      architectAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      architectQuote: 'Senior partners should spend their time advising high-value clients, not chasing missing identity documents or manually typing engagement letters.',
      capabilities: ['CLIENT ONBOARDING', 'DYNAMIC PROPOSALS', 'DOCUMENT OCR', 'FEE RECONCILIATION', 'PRACTICE BI', 'TIME UTILIZATION']
    },
    detailedPainVsSolution: [
      {
        painTitle: 'New Client Onboarding Dragging on for Weeks',
        painDescription: 'After signing an agreement, clients take 3-4 weeks to email bank statements, IDs, and previous year records. High-value staff waste hours sending manual reminder emails.',
        solutionTitle: 'Automated Client Onboarding Portal & Auto-Nudges',
        solutionDescription: 'Clients receive a single interactive onboarding link on mobile. As files are uploaded, OCR validates completion and friendly automated WhatsApp reminders gently nudge remaining items.',
        impact: 'Onboarding completion timeline reduced from 28 days to 4 days'
      },
      {
        painTitle: 'Proposals Sitting Stale in Client Inboxes',
        painDescription: 'Partners send custom PDF fee proposals via email. If the client doesn’t respond immediately, proposals sit untouched and deals go cold without systematic follow-up.',
        solutionTitle: 'Engagement Letter Tracking & Proactive Triggers',
        solutionDescription: 'System tracks when the prospect opens and reviews the proposal. If unsigned after 48 hours, an automated personalized message is sent offering to answer any questions.',
        impact: '40% Higher proposal close rate; 2 in 5 cold deals successfully revived'
      },
      {
        painTitle: 'Fixed-Fee Scope Creep Eroding Firm Margins',
        painDescription: 'Firms quote fixed monthly retainers, but staff perform endless extra unbilled requests. Partners only realize the account is unprofitable at year-end.',
        solutionTitle: 'Real-Time Engagement Scope & Hour Monitoring',
        solutionDescription: 'Timesheets and task activities automatically match against agreed retainer caps. When a client approaches 85% of monthly scope, partners receive an alert to invoice for additional out-of-scope work.',
        impact: '+8.4% Net profit improvement across fixed-fee client accounts'
      },
      {
        painTitle: 'Disconnected Invoicing & Slow Payment Collection',
        painDescription: 'Finance manually checks bank feeds to reconcile invoices against client retainers. Unpaid invoices sit overdue for 45+ days before accounts receivable intervenes.',
        solutionTitle: 'Automated Direct Debit & Invoice Reconciliation',
        solutionDescription: 'Client engagement sign-off automatically provisions recurring direct debit payment mandates. Invoices are settled automatically upon task delivery with zero manual chasing.',
        impact: 'Average Days Sales Outstanding (DSO) reduced to under 9 days'
      }
    ],
    typicalProblems: [
      'New client onboarding taking weeks due to slow document collection',
      'Proposals sitting unviewed in client inboxes without systematic follow-up',
      'Partners spending high-value billable hours chasing clients for information',
      'Unclear task handoffs between sales, onboarding specialists, and account managers',
      'Inability to track real-time project profitability and team billable utilization'
    ],
    connectedSystems: [
      'Unified Enquiry-to-Engagement Pipeline',
      'Automated Client Document Collection Portal',
      'WhatsApp & Email Proposal Nudge Sequences',
      'Team Project Allocation & Billable Hours Dashboard',
      'Executive Practice Intelligence Panel'
    ],
    architectureSummary: 'Enquiry forms or calls generate a structured pipeline deal, automatically dispatching personalized proposals and secure document upload links with automated reminder nudges.',
    expectedOutcomes: [
      { metric: '11 Days', description: 'Cut from average client onboarding turnaround timeline.' },
      { metric: '2 in 5', description: 'Closed deals directly recovered through automated follow-up sequences.' },
      { metric: '100%', description: 'Visibility into real-time project margins and staff utilization.' }
    ],
    exampleCaseSummary: {
      headline: 'Regional Accountancy Practice (400 Business Clients)',
      detail: 'Replaced manual inbox chasing with a single automated onboarding pipeline, handling 400 active business clients effortlessly.'
    }
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Hotel Groups',
    slug: 'hospitality',
    subtitle: 'Guest experience, direct booking recovery, and automated operational orchestration.',
    description: 'Hotels and boutique resorts lose direct bookings to high-commission online travel agencies (OTAs) while front desks get overwhelmed by repetitive concierge queries. Beckon connects PMS, guest WhatsApp concierge, housekeeping dispatch, and direct booking recovery.',
    heroBadge: '4.9 ★★★★★ 40+ Boutique Hotels & Resorts',
    heroHeadline: {
      prefix: 'NEXT — GEN CONNECTED',
      highlight: 'HOSPITALITY & HOTEL',
      suffix: 'SYSTEMS'
    },
    heroImage: '/images/industries/hospitality-hero.jpg',
    teamImage1: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
    teamImage2: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    corePillars: [
      {
        category: 'Guest Experience',
        title: '24/7 WhatsApp Guest Concierge & Upsell',
        description: 'Guests message directly for room service, spa bookings, and local recommendations. Automated AI handles routine questions in seconds while offering customized room upgrades.',
        iconName: 'MessageSquare'
      },
      {
        category: 'Revenue Protection',
        title: 'Direct Booking & OTA Commission Recovery',
        description: 'Recapture past guests with personalized VIP booking incentives on WhatsApp, bypassing expensive 18-25% OTA commissions on repeat stays.',
        iconName: 'TrendingUp'
      },
      {
        category: 'Operations',
        title: 'Housekeeping & Maintenance Dispatch',
        description: 'Room turnover status updates instantly on mobile as housekeepers finish cleaning, alerting front desk staff to early check-in availability.',
        iconName: 'CheckCircle2'
      }
    ],
    bentoSection: {
      eyebrow: 'Why Beckon for Hotel & Resort Operators?',
      headline: 'Comprehensive solution for guest satisfaction and direct RevPAR',
      subtext: 'We connect your Property Management System (Mews, Cloudbeds, Opera, Guestline) with guest WhatsApp channels, direct booking engines, and housekeeping dispatch.',
      statNumber: '22%',
      statLabel: 'Increase in Direct Non-Commission Bookings',
      architectName: 'Jonathan Chen',
      architectRole: 'Director of Hospitality Systems',
      architectAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      architectQuote: 'Guest satisfaction is won or lost in response time. When guest requests and housekeeping updates happen in seconds without front-desk friction, review scores and direct rebookings soar.',
      capabilities: ['GUEST CONCIERGE', 'PMS INTEGRATION', 'HOUSEKEEPING DISPATCH', 'DIRECT BOOKINGS', 'SPA & DINING UPSELLS', 'REVPAR BI']
    },
    detailedPainVsSolution: [
      {
        painTitle: 'Expensive 18-25% OTA Commissions on Repeat Guests',
        painDescription: 'Guests who previously stayed at your hotel go back to Booking.com or Expedia to reserve their next stay because the hotel has no automated direct loyalty follow-up.',
        solutionTitle: 'Automated Post-Stay VIP Booking Engine',
        solutionDescription: '3 days after checkout, guests receive a personalized WhatsApp thank you with an exclusive direct booking incentive for their next stay, saving the hotel thousands in OTA fees.',
        impact: '22% Increase in direct, non-commission repeat bookings'
      },
      {
        painTitle: 'Front Desk Queues & Incessant Phone Ringing',
        painDescription: 'Front desk agents are trapped answering repetitive phone calls ("What is the WiFi password?", "What time does breakfast end?") while arrived guests wait in line to check in.',
        solutionTitle: 'Instant AI WhatsApp Digital Concierge',
        solutionDescription: 'Guests receive a digital concierge link upon booking. AI handles 70% of standard questions instantly, freeing reception staff to deliver genuine warm hospitality.',
        impact: '<30 second instant response time; front desk phone calls cut by 65%'
      },
      {
        painTitle: 'Delayed Housekeeping Status & Late Room Check-In',
        painDescription: 'Housekeeping finishes cleaning rooms, but the front desk doesn’t know because updates are written on paper clipboards. Arriving guests are told their room isn’t ready when it is.',
        solutionTitle: 'Live Mobile Housekeeping & Maintenance Sync',
        solutionDescription: 'Housekeepers tap "Room Clean & Inspected" on their mobile device. The PMS instantly marks the room vacant/clean and notifies the front desk iPad in real time.',
        impact: '45-minute average reduction in room turnover waiting time'
      },
      {
        painTitle: 'Missed Ancillary Revenue (Spa, Dining, Upgrades)',
        painDescription: 'Hotels fail to sell room upgrades or restaurant tables because guests aren’t reached at the right moment before arrival.',
        solutionTitle: 'Pre-Arrival Automated Upsell Sequences',
        solutionDescription: '24 hours before check-in, guests receive a tasteful WhatsApp message offering suite upgrades, airport transfers, or dining reservations tailored to their party size.',
        impact: '+18% Higher ancillary guest spend per stay'
      }
    ],
    typicalProblems: [
      'High commission fees paid to online travel agencies (OTAs)',
      'Front desk queues during check-in/out while phones ring incessantly',
      'Slow response to room service, maintenance, and concierge requests',
      'Uncaptured guest preferences and lack of automated repeat visit marketing',
      'Disconnected housekeeping and room readiness status updates'
    ],
    connectedSystems: [
      'AI Guest WhatsApp Concierge & Upsell Assistant',
      'PMS & Direct Booking Recovery Engine',
      'Housekeeping & Maintenance Dispatch System',
      'Automated Pre-Arrival & Post-Stay Engagement',
      'Guest Lifetime Value & RevPAR Analytics'
    ],
    architectureSummary: 'Integrates guest messaging into the Property Management System, allowing instant AI guest assistance for check-in times, amenities, and room upgrades over WhatsApp.',
    expectedOutcomes: [
      { metric: '22%', description: 'Increase in direct non-commission hotel bookings.' },
      { metric: '<30s', description: 'Instant guest resolution time for common concierge questions.' },
      { metric: '+18%', description: 'Higher ancillary revenue per guest from automated WhatsApp upsells.' }
    ],
    exampleCaseSummary: {
      headline: 'Boutique Hotel & Resort Group (3 Properties)',
      detail: 'Automated 70% of routine front-desk guest queries, freeing staff to focus on high-touch guest hospitality and driving 22% more direct bookings.'
    }
  }
];
