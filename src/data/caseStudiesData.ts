import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'heating-plumbing-fleet',
    industry: 'Field Service & Contracting',
    clientTitle: '40-Vehicle Heating & Contracting Business',
    scaleInfo: '62 staff · 3 regional depots',
    challenge: 'Calls landed on a shared mobile phone while job allocations were tracked manually on a physical whiteboard. Roughly a third of evening inbound customer calls were lost to voicemail.',
    whatWeBuilt: 'One automated intake system where every call is answered, qualified, and scheduled live against engineer availability, with job cards auto-created before anyone touched a keyboard.',
    outcomeMetric: '+31%',
    outcomeDetail: 'More jobs completed per week with zero additional office headcount or staff overtime.',
    fullStory: {
      before: 'Inbound emergency calls landed on a shared mobile phone. Office coordinators wrote booking details on sticky notes and erased whiteboard markers at the end of every day.',
      businessCost: 'Roughly 35% of high-intent emergency repair calls went straight to voicemail after hours, costing an estimated $24,000 in lost revenue every month.',
      system: 'Beckon 24/7 Voice Intake Engine + Dispatch Matrix + WhatsApp Client Updates + Job Card Webhooks.',
      after: 'Every incoming call is answered on ring 1, transcribed, and matched to nearest available engineer route. Callers receive immediate WhatsApp confirmation with assigned technician details.',
      result: 'Completed weekly jobs increased by 31%, response times fell from 4 hours to 18 minutes, and zero calls dropped.'
    }
  },
  {
    id: 'four-site-dental-group',
    industry: 'Healthcare & Dental',
    clientTitle: 'Four-Site Dental Group',
    scaleInfo: '31 staff · 9,000 active patients',
    challenge: 'Reception staff were constantly answering calls while patients waited at check-in desks. Recall lists were printed on paper and phoned by hand when time allowed.',
    whatWeBuilt: 'One intake system handling phone calls and WhatsApp messaging, while recall reminders became an automated background sequence tied to each patient’s actual treatment history.',
    outcomeMetric: '-68%',
    outcomeDetail: 'Inbound calls reaching check-in desks decreased dramatically while appointment occupancy rose by 14%.',
    fullStory: {
      before: 'Reception desk phones rang non-stop. Receptionists juggled physical patient check-in with answering basic pricing, opening hours, and appointment availability queries.',
      businessCost: 'Check-in delays caused clinical schedule slippage, while 2 in 5 patients missed hygiene recall appointments due to manual, irregular phone chasing.',
      system: 'Beckon AI Receptionist + Direct PMS Booking Webhooks + WhatsApp Interactive Patient Recall Sequence.',
      after: 'Routine calls (location, hours, booking requests) handle automatically on phone and WhatsApp. Check-in desks remain quiet, calm, and focused on in-person patient hospitality.',
      result: 'Inbound front-desk call volume plummeted by 68%, checkups booked automatically grew by 400 visits/month, and practice revenue rose by 18%.'
    }
  },
  {
    id: 'regional-accountancy-practice',
    industry: 'Professional Services',
    clientTitle: 'Regional Accountancy Practice',
    scaleInfo: '18 staff · 400 active business clients',
    challenge: 'New enquiries sat in a partner’s email inbox for days. Onboarding a new client required chasing 11 separate emails and two weeks before any billable work could begin.',
    whatWeBuilt: 'A single pipeline from enquiry to engagement letter, with document collection, background checks, and onboarding handled by the system rather than chased by hand.',
    outcomeMetric: '11 Days',
    outcomeDetail: 'Cut from average client onboarding turnaround, bringing new billable revenue forward immediately.',
    fullStory: {
      before: 'New client leads arrived via web form or email and sat in a partner’s inbox. Onboarding required emailing back and forth for tax IDs, bank statements, and identity documents.',
      businessCost: 'New client onboarding averaged 14 business days before work could start. 30% of qualified leads got cold and chose alternative firms.',
      system: 'Beckon Unified Client Intake + Proposal Pipeline + WhatsApp/Email Document Collector Portal.',
      after: 'Enquiries trigger instant WhatsApp engagement letters and a secure client upload portal. Systematic background nudges handle missing documents automatically.',
      result: 'Onboarding time slashed from 14 days to 3 days, partner administrative chasing reduced to zero, and lead win-rate increased by 28%.'
    }
  }
];
