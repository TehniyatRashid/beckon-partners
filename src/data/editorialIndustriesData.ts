export interface IndustryBottleneck {
  number: string;
  title: string;
  description: string;
}

export interface IndustrySystemApplication {
  number: string;
  title: string;
  description: string;
}

export interface EditorialIndustryData {
  id: string;
  slug: string;
  name: string;
  eyebrow: string;
  heroHeadline: {
    line1: string;
    line2: string;
  };
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  
  // Section 02 - Reality
  realityEyebrow: string;
  realityHeadline: string;
  bottlenecks: IndustryBottleneck[];

  // Section 04 - What Changes (Before / After)
  beforeItems: string[];
  afterItems: string[];

  // Section 05 - The Five Pillars
  fiveSystemsEyebrow: string;
  fiveSystemsHeadline: {
    line1: string;
    line2: string;
  };
  systems: IndustrySystemApplication[];

  // Section 06 - Large Editorial Image / Pause
  pauseImage: string;
  pauseImageAlt: string;
}

export const EDITORIAL_INDUSTRIES: Record<string, EditorialIndustryData> = {
  restaurants: {
    id: 'restaurants',
    slug: 'restaurants',
    name: 'Restaurants & F&B',
    eyebrow: 'RESTAURANTS & F&B',
    heroHeadline: {
      line1: 'Better Systems Behind',
      line2: 'Every Service.'
    },
    heroDescription: 'Restaurants move fast. When reservations, revenue, operations and teams work across disconnected systems, small inefficiencies quickly become expensive. Beckon connects what already runs your business so it can operate as one.',
    heroImage: '/images/industries/restaurants-hero.jpg',
    heroImageAlt: 'Restaurant dining room and professional service team',
    
    realityEyebrow: 'THE REALITY',
    realityHeadline: "The Pressure Isn't Always Visible.",
    bottlenecks: [
      {
        number: '01',
        title: 'Missed reservations',
        description: 'Peak-hour enquiries can disappear when teams are focused on service.'
      },
      {
        number: '02',
        title: 'Margin leakage',
        description: 'Supplier and ingredient costs can change faster than pricing decisions.'
      },
      {
        number: '03',
        title: 'Operational friction',
        description: 'Stock, shifts and daily processes often depend on manual work.'
      },
      {
        number: '04',
        title: 'Limited visibility',
        description: 'Leadership can discover problems only after they affect the numbers.'
      }
    ],

    beforeItems: [
      'Manual updates and spreadsheets',
      'Repeated calls and shift confusion',
      'Delayed paperwork and invoice checking',
      'Scattered guest and sales information'
    ],
    afterItems: [
      'Faster information flow across front and back of house',
      'Less manual administrative work for managers',
      'Faster, more informed pricing and cost decisions',
      'Clear operational visibility across every service'
    ],

    fiveSystemsEyebrow: 'RESTAURANTS THROUGH THE BECKON LENS',
    fiveSystemsHeadline: {
      line1: 'Five Systems.',
      line2: 'One Better-Running Business.'
    },
    systems: [
      {
        number: '01',
        title: 'Customer Growth',
        description: 'Reservations, enquiries, customer information and retention.'
      },
      {
        number: '02',
        title: 'Revenue Growth',
        description: 'Pricing, costs, margins and revenue visibility.'
      },
      {
        number: '03',
        title: 'Operational Excellence',
        description: 'Inventory, purchasing and the processes behind daily service.'
      },
      {
        number: '04',
        title: 'Team Productivity',
        description: 'Responsibilities, communication, handovers and operational information.'
      },
      {
        number: '05',
        title: 'Executive Intelligence',
        description: 'The visibility leadership needs to understand performance and act earlier.'
      }
    ],

    pauseImage: '/images/industries/restaurants-pause.png',
    pauseImageAlt: 'Group of friends dining and celebrating inside a cozy, warm restaurant setting'
  },

  logistics: {
    id: 'logistics',
    slug: 'logistics',
    name: 'Delivery & Logistics',
    eyebrow: 'DELIVERY & LOGISTICS',
    heroHeadline: {
      line1: 'A Better Way to Keep',
      line2: 'Deliveries Moving.'
    },
    heroDescription: 'When bookings, dispatch, drivers, customers and billing operate across disconnected processes, small delays become expensive. Beckon connects the systems behind the operation so the business can move with greater clarity and control.',
    heroImage: '/images/industries/logistics-hero.png',
    heroImageAlt: 'Delivery truck with text Keep the wheels turning backing out of a warehouse dock',
    
    realityEyebrow: 'THE REALITY',
    realityHeadline: "The Pressure Isn't Always Visible.",
    bottlenecks: [
      {
        number: '01',
        title: 'Manual order entry',
        description: 'Bookings arrive through different channels and staff spend time moving information between systems.'
      },
      {
        number: '02',
        title: 'Constant status calls',
        description: 'Customers call for updates because delivery information isn’t reaching them clearly.'
      },
      {
        number: '03',
        title: 'Delayed billing',
        description: 'Proof of delivery arrives late, slowing invoicing and cash flow.'
      },
      {
        number: '04',
        title: 'Lost efficiency',
        description: 'Routes, vehicles and fuel aren’t always managed with a clear view of profitability.'
      }
    ],

    beforeItems: [
      'Manual dispatch updates and duplicate entry',
      'Constant phone calls from customers seeking ETA status',
      'Delayed paperwork holding up weekly invoicing',
      'Fragmented view of vehicle and driver performance'
    ],
    afterItems: [
      'Faster information flow from dispatch to driver to customer',
      'Less manual intervention in routine booking handoffs',
      'Faster invoicing with immediate delivery confirmation',
      'Clear operational visibility across routes and costs'
    ],

    fiveSystemsEyebrow: 'LOGISTICS THROUGH THE BECKON LENS',
    fiveSystemsHeadline: {
      line1: 'Five Systems.',
      line2: 'One Better-Running Business.'
    },
    systems: [
      {
        number: '01',
        title: 'Customer Growth',
        description: 'Keep customers informed and make every booking easier to manage.'
      },
      {
        number: '02',
        title: 'Revenue Growth',
        description: 'Improve visibility across jobs, routes, pricing and margins.'
      },
      {
        number: '03',
        title: 'Operational Excellence',
        description: 'Connect booking, dispatch, delivery and billing into a smoother flow.'
      },
      {
        number: '04',
        title: 'Team Productivity',
        description: 'Give teams the information and clarity they need without constant chasing.'
      },
      {
        number: '05',
        title: 'Executive Intelligence',
        description: 'Give leadership a clearer view of performance across the operation.'
      }
    ],

    pauseImage: '/images/industries/logistics-pause.jpg',
    pauseImageAlt: 'Delivery driver in red uniform standing by black delivery vans and cardboard packages'
  },

  construction: {
    id: 'construction',
    slug: 'construction',
    name: 'Construction & Field Trades',
    eyebrow: 'CONSTRUCTION & FIELD TRADES',
    heroHeadline: {
      line1: 'Clarity and Control Across',
      line2: 'Every Project.'
    },
    heroDescription: 'Construction businesses manage moving parts every day — from job site teams and estimating to material costs, subcontractor schedules and client communications. Beckon connects the systems behind your projects so you can protect margins and build with certainty.',
    heroImage: '/images/industries/construction-hero.jpg',
    heroImageAlt: 'Construction crew workers standing on scaffolding and consulting architectural blueprints',
    
    realityEyebrow: 'THE REALITY',
    realityHeadline: "The Pressure Isn't Always Visible.",
    bottlenecks: [
      {
        number: '01',
        title: 'Uncaptured variation costs',
        description: 'Job-site modifications and material additions are performed without timely billing updates.'
      },
      {
        number: '02',
        title: 'Subcontractor schedule delays',
        description: 'Field teams and trade handovers fall out of sync when project changes happen on site.'
      },
      {
        number: '03',
        title: 'Delayed payment claims',
        description: 'Progress milestone documentation and sign-offs take days to assemble manually.'
      },
      {
        number: '04',
        title: 'Lagging project margin visibility',
        description: 'Cost overruns on labor or materials are discovered long after the phase is completed.'
      }
    ],

    beforeItems: [
      'Scattered job-site notes, paper plans and lost change orders',
      'Constant phone calls checking subcontractor readiness',
      'Delayed progress billing and delayed cash collection',
      'Financial reports that lag project milestones by weeks'
    ],
    afterItems: [
      'Immediate capture of variations directly from site to office',
      'Clear scheduling handoffs with verified trade readiness',
      'Faster payment milestones and protected cash flow',
      'Real-time visibility into project costs and phase margins'
    ],

    fiveSystemsEyebrow: 'CONSTRUCTION THROUGH THE BECKON LENS',
    fiveSystemsHeadline: {
      line1: 'Five Systems.',
      line2: 'One Better-Running Business.'
    },
    systems: [
      {
        number: '01',
        title: 'Customer Growth',
        description: 'Tenders, client communications, progress transparency and repeat referrals.'
      },
      {
        number: '02',
        title: 'Revenue Growth',
        description: 'Estimating accuracy, variation capture, milestone billing and cash flow.'
      },
      {
        number: '03',
        title: 'Operational Excellence',
        description: 'Site logistics, subcontractor coordination, material purchasing and quality control.'
      },
      {
        number: '04',
        title: 'Team Productivity',
        description: 'Field-to-office communication, daily logs and trade handovers.'
      },
      {
        number: '05',
        title: 'Executive Intelligence',
        description: 'Real-time project margins, committed costs and executive risk awareness.'
      }
    ],

    pauseImage: '/images/industries/construction-pause.png',
    pauseImageAlt: 'Construction worker drilling the ground at a busy building project site',
  },

  retail: {
    id: 'retail',
    slug: 'retail',
    name: 'Retail & Multi-Site Commerce',
    eyebrow: 'RETAIL & MULTI-SITE COMMERCE',
    heroHeadline: {
      line1: 'Consistent Operations Across',
      line2: 'Every Store.'
    },
    heroDescription: 'Multi-location retail demands seamless alignment between customer sales, inventory flow, staffing, and store performance. Beckon connects your retail operations so each location operates with identical precision and complete visibility.',
    heroImage: '/images/industries/retail-hero.png',
    heroImageAlt: 'Fashion model showcasing clothes in a minimalist boutique showroom',
    
    realityEyebrow: 'THE REALITY',
    realityHeadline: "The Pressure Isn't Always Visible.",
    bottlenecks: [
      {
        number: '01',
        title: 'Inventory discrepancies',
        description: 'Stock levels between warehouses and store shelves fall out of sync, leading to stockouts.'
      },
      {
        number: '02',
        title: 'Uneven store performance',
        description: 'Different locations execute merchandising, sales standards and promotions with varying consistency.'
      },
      {
        number: '03',
        title: 'Staffing misalignment',
        description: 'Rosters fail to match peak foot traffic hours, resulting in lost sales or excessive labor cost.'
      },
      {
        number: '04',
        title: 'Fragmented customer data',
        description: 'In-store purchases and online customer interactions remain isolated in separate silos.'
      }
    ],

    beforeItems: [
      'Manual stock counts and delayed store replenishment',
      'Inconsistent execution of visual and service standards',
      'Mismatched staff scheduling during peak sales hours',
      'Disconnected customer purchase history between channels'
    ],
    afterItems: [
      'Synchronized inventory flow between distribution and stores',
      'Consistent operational standards across every retail site',
      'Rosters aligned accurately with store traffic patterns',
      'Unified customer perspective driving repeat store visits'
    ],

    fiveSystemsEyebrow: 'RETAIL THROUGH THE BECKON LENS',
    fiveSystemsHeadline: {
      line1: 'Five Systems.',
      line2: 'One Better-Running Business.'
    },
    systems: [
      {
        number: '01',
        title: 'Customer Growth',
        description: 'Customer loyalty, omnichannel engagement and brand consistency.'
      },
      {
        number: '02',
        title: 'Revenue Growth',
        description: 'Merchandising margins, store sales velocity and promotional returns.'
      },
      {
        number: '03',
        title: 'Operational Excellence',
        description: 'Inventory replenishment, logistics fulfillment and loss prevention.'
      },
      {
        number: '04',
        title: 'Team Productivity',
        description: 'Store manager enablement, sales training and shift management.'
      },
      {
        number: '05',
        title: 'Executive Intelligence',
        description: 'Cross-store benchmarking, category performance and capital allocation.'
      }
    ],

    pauseImage: '/images/industries/retail-pause.png',
    pauseImageAlt: 'Creative model styling and photographing outfit layout in a fashion design studio'
  },

  hospitality: {
    id: 'hospitality',
    slug: 'hospitality',
    name: 'Hospitality & Hotels',
    eyebrow: 'HOSPITALITY & HOTELS',
    heroHeadline: {
      line1: 'Exceptional Guest Experience',
      line2: 'Through Connected Operations.'
    },
    heroDescription: 'When guest reservations, front desk workflows, housekeeping, event bookings and revenue management run independently, quality and margins suffer. Beckon unifies the operational systems behind hospitality so your staff can focus entirely on the guest.',
    heroImage: '/images/industries/hospitality-hero.jpg',
    heroImageAlt: 'Bedside tablet device displaying integrated guest service and hotel system controls in a luxury suite',
    
    realityEyebrow: 'THE REALITY',
    realityHeadline: "The Pressure Isn't Always Visible.",
    bottlenecks: [
      {
        number: '01',
        title: 'Disconnected guest communications',
        description: 'Special requests, arrival details and preferences get lost between booking and check-in.'
      },
      {
        number: '02',
        title: 'Housekeeping and front desk friction',
        description: 'Room readiness updates happen over walkie-talkies and manual notes, creating check-in delays.'
      },
      {
        number: '03',
        title: 'Slow event and group proposal turnaround',
        description: 'Corporate and wedding enquiries wait days for banquet quotes, losing bookings to competitors.'
      },
      {
        number: '04',
        title: 'Unoptimized ancillary revenue',
        description: 'On-property dining, spa and service opportunities are not coordinated with guest itineraries.'
      }
    ],

    beforeItems: [
      'Manual check-in paperwork and fragmented guest requests',
      'Housekeeping bottlenecks delaying room turnover',
      'Slow event quotes and lost corporate bookings',
      'Disconnected billing between front desk and amenities'
    ],
    afterItems: [
      'Smooth guest journey from pre-arrival to checkout',
      'Real-time synchronization between housekeeping and front desk',
      'Rapid, coordinated responses for events and group bookings',
      'Integrated revenue visibility across rooms, dining and amenities'
    ],

    fiveSystemsEyebrow: 'HOSPITALITY THROUGH THE BECKON LENS',
    fiveSystemsHeadline: {
      line1: 'Five Systems.',
      line2: 'One Better-Running Business.'
    },
    systems: [
      {
        number: '01',
        title: 'Customer Growth',
        description: 'Direct bookings, guest preference tracking and memorable experiences.'
      },
      {
        number: '02',
        title: 'Revenue Growth',
        description: 'Dynamic pricing, ancillary spend, events and occupancy yield.'
      },
      {
        number: '03',
        title: 'Operational Excellence',
        description: 'Front office, housekeeping coordination, maintenance and supplier management.'
      },
      {
        number: '04',
        title: 'Team Productivity',
        description: 'Departmental handovers, staff scheduling and service standard consistency.'
      },
      {
        number: '05',
        title: 'Executive Intelligence',
        description: 'RevPAR visibility, guest satisfaction metrics and property profitability.'
      }
    ],

    pauseImage: '/images/industries/hospitality-pause.jpg',
    pauseImageAlt: 'Wall-mounted tablet display showing smart hotel reception overview and dashboard interface'
  },

  professional_services: {
    id: 'professional_services',
    slug: 'professional-services',
    name: 'Professional Services',
    eyebrow: 'PROFESSIONAL SERVICES',
    heroHeadline: {
      line1: 'More Client Value.',
      line2: 'Less Operational Friction.'
    },
    heroDescription: 'Consultancies, legal practices and professional firms thrive on expertise, but often stall on manual client onboarding, untracked time, fragmented communications and delayed billing. Beckon connects your practice workflows so fee-earners can focus on delivery.',
    heroImage: '/images/industries/professional-services-hero.png',
    heroImageAlt: 'Female leader presenting charts and data to her corporate team around a conference table',
    
    realityEyebrow: 'THE REALITY',
    realityHeadline: "The Pressure Isn't Always Visible.",
    bottlenecks: [
      {
        number: '01',
        title: 'Cumbersome client onboarding',
        description: 'Collecting compliance documents, contracts and scoping info delays matter kickoff by days.'
      },
      {
        number: '02',
        title: 'Unbilled out-of-scope work',
        description: 'Partners and team members perform extra client requests without recording scope variations.'
      },
      {
        number: '03',
        title: 'Fragmented team utilization',
        description: 'Partners lack clear visibility into associate capacity, creating bottlenecks and burnout.'
      },
      {
        number: '04',
        title: 'Delayed monthly billing cycles',
        description: 'Compiling timesheets and reviewing draft invoices consumes partner hours at month-end.'
      }
    ],

    beforeItems: [
      'Protracted client onboarding and manual compliance checks',
      'Uncaptured scope creep draining engagement profitability',
      'Opaque capacity planning across fee-earning teams',
      'Lengthy monthly billing cycles holding up cash collection'
    ],
    afterItems: [
      'Rapid, frictionless client onboarding and contract initiation',
      'Clear scope boundaries and captured value additions',
      'Balanced team workload with clear project capacity',
      'Timely, transparent billing and accelerated cash flow'
    ],

    fiveSystemsEyebrow: 'PROFESSIONAL SERVICES THROUGH THE BECKON LENS',
    fiveSystemsHeadline: {
      line1: 'Five Systems.',
      line2: 'One Better-Running Business.'
    },
    systems: [
      {
        number: '01',
        title: 'Customer Growth',
        description: 'New enquiry qualification, proposal management and client relationship depth.'
      },
      {
        number: '02',
        title: 'Revenue Growth',
        description: 'Engagement pricing, scope control, realization rates and cash flow.'
      },
      {
        number: '03',
        title: 'Operational Excellence',
        description: 'Matter management, document workflows, compliance and delivery standards.'
      },
      {
        number: '04',
        title: 'Team Productivity',
        description: 'Capacity allocation, knowledge sharing and administrative relief for fee-earners.'
      },
      {
        number: '05',
        title: 'Executive Intelligence',
        description: 'Practice area profitability, partner performance and utilization visibility.'
      }
    ],

    pauseImage: '/images/industries/professional-services-pause.png',
    pauseImageAlt: 'Female consultant smiling at desk with project blueprints and layouts',
  }
};

EDITORIAL_INDUSTRIES['delivery-logistics'] = EDITORIAL_INDUSTRIES.logistics;
EDITORIAL_INDUSTRIES['professional-services'] = EDITORIAL_INDUSTRIES.professional_services;

