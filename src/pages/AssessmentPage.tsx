import React, { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ChevronDown, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Building2,
  Clock,
  TrendingUp,
  Activity,
  Layers,
  AlertCircle,
  Plus
} from 'lucide-react';
import { usePageScrollTriggers } from '../hooks/useGsapScrollTrigger';

interface AssessmentPageProps {
  onNavigate: (route: RoutePath) => void;
}

// Industry profile configuration for contextual suggestions
interface IndustryProfile {
  name: string;
  category: string;
  suggestedTools: string[];
  sampleNotesPlaceholder: string;
}

const INDUSTRY_PROFILES: Record<string, IndustryProfile> = {
  'Coffee Shop': {
    name: 'Coffee Shop',
    category: 'Hospitality & Food Service',
    suggestedTools: ['Toast / Square POS', 'QuickBooks / Xero Accounting', '7shifts / Deputy Scheduling', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. We want our POS sales and staff hours to auto-post to accounting, and get margin alerts when ingredient costs rise...'
  },
  'Specialty Cafe & Roastery': {
    name: 'Specialty Cafe & Roastery',
    category: 'Hospitality & Food Service',
    suggestedTools: ['Square POS', 'Shopify (B2B/B2C)', 'QuickBooks / Xero', 'RoasterTools / Cropster', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. Need our wholesale roastery orders from Shopify to sync with inventory and accounting automatically...'
  },
  'Restaurant & Multi-Unit Hospitality': {
    name: 'Restaurant & Multi-Unit Hospitality',
    category: 'Hospitality & Food Service',
    suggestedTools: ['Toast / Revel POS', '7shifts / HotSchedules', 'QuickBooks / Xero', 'MarginEdge / MarketMan', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. Managing 3 locations. We need unified daily prime cost visibility and automated invoice processing...'
  },
  'Commercial Construction & Contracting': {
    name: 'Commercial Construction & Contracting',
    category: 'Construction & Field Services',
    suggestedTools: ['Procore / Buildertrend', 'QuickBooks / Xero Accounting', 'PlanGrid / Fieldwire', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. We need field logs and subcontractor change orders to sync with project budgets automatically...'
  },
  'Design, Marketing & Creative Agency': {
    name: 'Design, Marketing & Creative Agency',
    category: 'Professional Services',
    suggestedTools: ['Asana / ClickUp / Monday', 'HubSpot / Salesforce CRM', 'Harvest / Toggl', 'QuickBooks / Xero', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. We want client briefs in CRM to automatically spin up project tasks and track billable utilization...'
  },
  'Healthcare & Medical Specialist Clinic': {
    name: 'Healthcare & Medical Specialist Clinic',
    category: 'Healthcare & Clinical',
    suggestedTools: ['AthenaHealth / Jane App', 'SimplePractice / Kareo', 'QuickBooks / Xero', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. Looking to eliminate paper intake forms and sync patient scheduling with billing records automatically...'
  },
  'E-Commerce & DTC Retail Brand': {
    name: 'E-Commerce & DTC Retail Brand',
    category: 'Commerce & Retail',
    suggestedTools: ['Shopify / WooCommerce', 'Klaviyo / Mailchimp', 'ShipStation / 3PL Portal', 'QuickBooks / Xero', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. Need multi-channel inventory and shipping tracking to sync in real-time with net profit reporting...'
  },
  'Financial Advisory & Wealth Management': {
    name: 'Financial Advisory & Wealth Management',
    category: 'Financial Services',
    suggestedTools: ['Wealthbox / Redtail CRM', 'Salesforce Financial Cloud', 'DocuSign / PandaDoc', 'QuickBooks / Xero', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. Want to streamline client onboarding paperwork and sync portfolio summaries directly to our CRM...'
  },
  'Professional Consulting & Law Practice': {
    name: 'Professional Consulting & Law Practice',
    category: 'Professional Services',
    suggestedTools: ['Clio / MyCase', 'HubSpot / Salesforce', 'PandaDoc / DocuSign', 'QuickBooks / Xero', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. Streamline client engagement agreements and sync billable matter hours with invoicing...'
  },
  'Logistics, Warehousing & Supply Chain': {
    name: 'Logistics, Warehousing & Supply Chain',
    category: 'Logistics & Distribution',
    suggestedTools: ['Custom WMS / TMS', 'QuickBooks / NetSuite', 'Samsara / Fleet Tracking', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. We want dispatch logs and proof of delivery documents to auto-sync with customer notifications and invoicing...'
  },
  'Custom Enterprise Operation': {
    name: 'Custom Enterprise Operation',
    category: 'Enterprise & Multi-Disciplinary',
    suggestedTools: ['Custom Internal Database / SQL', 'Salesforce / HubSpot', 'NetSuite / Microsoft Dynamics', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. Connecting custom internal SQL database with modern CRM and automated accounting pipelines...'
  },
  'Other / My Industry Isn’t Listed': {
    name: 'Other / My Industry Isn’t Listed',
    category: 'Specialized Enterprise',
    suggestedTools: ['Industry Specific Software', 'QuickBooks / Xero Accounting', 'CRM / Customer Database', 'Spreadsheets / manual processes'],
    sampleNotesPlaceholder: 'e.g. Describe the key software tools and workflows you want connected across your business...'
  }
};

export const AssessmentPage: React.FC<AssessmentPageProps> = ({ onNavigate }) => {
  const containerRef = usePageScrollTriggers();

  // Multi-step index (1 to 11)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalQuestions = 11;

  // Form State
  const [opportunityLoss, setOpportunityLoss] = useState<string>('Operational inefficiency');
  const [businessType, setBusinessType] = useState<string>('Coffee Shop');
  const [customBusinessType, setCustomBusinessType] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Diagnostic inputs
  const [revenueRange, setRevenueRange] = useState<string>('$1.5M – $5M / year');
  const [teamSize, setTeamSize] = useState<string>('16 – 50 team members');
  const [primaryFriction, setPrimaryFriction] = useState<string>('Disconnected software, data or processes');
  const [customFriction, setCustomFriction] = useState<string>('');
  
  // Software tools
  const [selectedTools, setSelectedTools] = useState<string[]>(['Toast / Square POS', 'QuickBooks / Xero Accounting']);
  const [customToolInput, setCustomToolInput] = useState<string>('');

  // System connectivity
  const [systemIntegrationStatus, setSystemIntegrationStatus] = useState<string>(
    'Some do, but others are disconnected'
  );
  
  // Time lost
  const [wastedHours, setWastedHours] = useState<string>('15 – 30 hours / week');
  
  // Timeline & Budget
  const [timeline, setTimeline] = useState<string>('Within the next 30–60 days');
  const [budgetRange, setBudgetRange] = useState<string>('$10,000–$25,000');

  // Contact Info
  const [companyName, setCompanyName] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [workEmail, setWorkEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Get active industry profile
  const activeProfile = INDUSTRY_PROFILES[businessType] || INDUSTRY_PROFILES['Coffee Shop'];

  // Handle selecting business type
  const handleSelectBusinessType = (type: string) => {
    setBusinessType(type);
    setIsDropdownOpen(false);
    setValidationError(null);

    const profile = INDUSTRY_PROFILES[type];
    if (profile && profile.suggestedTools.length > 0) {
      setSelectedTools(profile.suggestedTools.slice(0, 2));
    }
  };

  const businessTypeOptions = Object.keys(INDUSTRY_PROFILES);

  // 1. Opportunity options (Point 8)
  const opportunityOptions = [
    'Customer acquisition',
    'Customer retention',
    'Missed enquiries & follow-ups',
    'Operational inefficiency',
    'Costs & profitability',
    'Team productivity',
    'Management visibility',
    'I\'m not sure'
  ];

  // 2. Revenue options
  const revenueOptions = [
    'Under $500,000 / year',
    '$500,000 – $1,500,000 / year',
    '$1.5M – $5M / year',
    '$5M – $15M / year',
    '$15M+ / year'
  ];

  // 3. Team size options
  const teamSizeOptions = [
    '1 – 5 team members',
    '6 – 15 team members',
    '16 – 50 team members',
    '51 – 150 team members',
    '150+ team members'
  ];

  // 4. Friction options (Point 5)
  const frictionOptions = [
    'Getting and retaining customers',
    'Missed enquiries, follow-ups or sales opportunities',
    'Too much manual work and administration',
    'Disconnected software, data or processes',
    'Managing staff and keeping operations consistent',
    'Understanding costs, profitability and performance',
    'Lack of clear management visibility',
    'Something else'
  ];

  // 5. Software connectivity options (Point 7)
  const integrationOptions = [
    'Yes — most of our systems work together',
    'Some do, but others are disconnected',
    'Mostly manual — we move information between systems ourselves',
    'No — our systems are largely separate',
    'I\'m not sure'
  ];

  // 6. Time lost options (Point 9)
  const wastedHoursOptions = [
    'Under 5 hours / week',
    '5 – 15 hours / week',
    '15 – 30 hours / week',
    '30+ hours / week across leadership & staff'
  ];

  // 7. Timeline options (Point 10)
  const timelineOptions = [
    'Immediately (Ready to start within 2–3 weeks)',
    'Within the next 30–60 days',
    'Next quarter (Planning phase)',
    'Currently exploring feasibility'
  ];

  // 8. Budget options (Point 10)
  const budgetOptions = [
    'Under $5,000',
    '$5,000–$10,000',
    '$10,000–$25,000',
    '$25,000–$50,000',
    '$50,000+',
    'Not sure yet'
  ];

  // Common software tools pool + dynamic suggestions
  const defaultToolPool = Array.from(new Set([
    ...(activeProfile?.suggestedTools || []),
    'POS / Register System',
    'QuickBooks / Xero Accounting',
    'CRM / Lead Pipeline',
    'Staff Scheduling / HR Tool',
    'ERP / Inventory Management',
    'Spreadsheets / manual processes',
    'Other software',
    'Not sure'
  ]));

  const toggleTool = (tool: string) => {
    setValidationError(null);
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter(t => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const handleAddCustomTool = () => {
    if (customToolInput.trim() && !selectedTools.includes(customToolInput.trim())) {
      setSelectedTools([...selectedTools, customToolInput.trim()]);
      setCustomToolInput('');
    }
  };

  // Validation Logic
  const isCurrentStepValid = (): { valid: boolean; message?: string } => {
    switch (currentStep) {
      case 1:
        if (!opportunityLoss || opportunityLoss.trim() === '') {
          return { valid: false, message: 'Please select where your business is currently losing opportunity.' };
        }
        return { valid: true };
      case 2:
        if (!businessType || businessType.trim() === '') {
          return { valid: false, message: 'Please select your industry or business type.' };
        }
        if (businessType === 'Other / My Industry Isn’t Listed' && !customBusinessType.trim()) {
          return { valid: false, message: 'Please specify your industry or business type.' };
        }
        return { valid: true };
      case 3:
        if (!revenueRange || revenueRange.trim() === '') {
          return { valid: false, message: 'Please select your approximate revenue scale.' };
        }
        return { valid: true };
      case 4:
        if (!teamSize || teamSize.trim() === '') {
          return { valid: false, message: 'Please select your team size.' };
        }
        return { valid: true };
      case 5:
        if (!primaryFriction || primaryFriction.trim() === '') {
          return { valid: false, message: 'Please select what causes the most friction.' };
        }
        if (primaryFriction === 'Something else' && !customFriction.trim()) {
          return { valid: false, message: 'Please specify the main cause of friction in your business.' };
        }
        return { valid: true };
      case 6:
        if (selectedTools.length === 0) {
          return { valid: false, message: 'Please select at least one tool (or Spreadsheets / Not sure).' };
        }
        return { valid: true };
      case 7:
        if (!systemIntegrationStatus || systemIntegrationStatus.trim() === '') {
          return { valid: false, message: 'Please select your software communication status.' };
        }
        return { valid: true };
      case 8:
        if (!wastedHours || wastedHours.trim() === '') {
          return { valid: false, message: 'Please select estimated time lost.' };
        }
        return { valid: true };
      case 9:
        if (!timeline || timeline.trim() === '') {
          return { valid: false, message: 'Please select your target timeline.' };
        }
        if (!budgetRange || budgetRange.trim() === '') {
          return { valid: false, message: 'Please select your planned investment budget.' };
        }
        return { valid: true };
      case 10:
        if (!companyName || companyName.trim() === '') {
          return { valid: false, message: 'Please provide your company name.' };
        }
        if (!fullName || fullName.trim() === '') {
          return { valid: false, message: 'Please provide your full name.' };
        }
        if (!workEmail || workEmail.trim() === '' || !workEmail.includes('@')) {
          return { valid: false, message: 'Please enter a valid work email address.' };
        }
        return { valid: true };
      case 11:
        return { valid: true };
      default:
        return { valid: true };
    }
  };

  const handleNext = () => {
    const check = isCurrentStepValid();
    if (!check.valid) {
      setValidationError(check.message || 'Please select an option to continue.');
      return;
    }

    setValidationError(null);
    if (currentStep < totalQuestions) {
      setCurrentStep(prev => prev + 1);
      setIsDropdownOpen(false);
    }
  };

  const handleBack = () => {
    setValidationError(null);
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setIsDropdownOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const check = isCurrentStepValid();
    if (!check.valid) {
      setValidationError(check.message || 'Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setValidationError(null);

    const payload = {
      fullName,
      companyName,
      workEmail,
      phoneNumber,
      businessType: effectiveBusinessName,
      revenueRange,
      teamSize,
      opportunityLoss,
      primaryFriction: effectiveFriction,
      selectedTools,
      systemIntegrationStatus,
      wastedHours,
      timeline,
      budgetRange,
      additionalNotes,
      healthLabel: healthData.label,
      healthDetail: healthData.detail,
      recoverableTime
    };

    const appsScriptUrl = ((import.meta as any).env?.VITE_GOOGLE_SHEET_WEBHOOK_URL as string) || "";

    if (appsScriptUrl) {
      try {
        await fetch(appsScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.error('Failed to submit assessment answers to Google Sheet:', err);
      }
    } else {
      console.warn('VITE_GOOGLE_SHEET_WEBHOOK_URL environment variable is not defined. Google Sheet integration skipped.');
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Credible Diagnostic Mapping (Point 12)
  const getSystemHealthStatus = () => {
    if (systemIntegrationStatus.includes('No') || systemIntegrationStatus.includes('Mostly manual') || wastedHours.includes('30+')) {
      return { label: 'Significant Opportunity', detail: 'High fragmentation across tools & manual workflows' };
    }
    if (systemIntegrationStatus.includes('Some do')) {
      return { label: 'Moderate Alignment', detail: 'Core systems partially linked with key data gaps' };
    }
    return { label: 'High Potential', detail: 'Good foundation ready for executive automation & AI telemetry' };
  };

  const getEstimatedHoursRecoverable = () => {
    if (wastedHours.includes('30+')) return '20–30 hrs / week';
    if (wastedHours.includes('15')) return '12–18 hrs / week';
    if (wastedHours.includes('5')) return '5–10 hrs / week';
    return '3–5 hrs / week';
  };

  const effectiveBusinessName = businessType === 'Other / My Industry Isn’t Listed' 
    ? (customBusinessType || 'Specialized Industry') 
    : businessType;

  const effectiveFriction = primaryFriction === 'Something else' 
    ? (customFriction || 'Custom Operational Friction') 
    : primaryFriction;

  const healthData = getSystemHealthStatus();
  const recoverableTime = getEstimatedHoursRecoverable();
  const stepValidation = isCurrentStepValid();

  return (
    <div 
      ref={containerRef}
      className="bg-[#FAF8F5] text-[#0F1115] min-h-screen font-sans selection:bg-[#E8E4DC] selection:text-[#0F1115] pt-16 sm:pt-20"
    >
      <div className="w-full min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-12 border-b border-[#E8E4DC]">
        
        {/* =========================================================================
            LEFT COLUMN (Light Context & Reassurances)
        ========================================================================= */}
        <div className="lg:col-span-5 bg-[#FAF8F5] p-5 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8E4DC]">
          
          <div className="space-y-4 sm:space-y-5 max-w-lg">
            
            {/* Main Headline */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#856A41] font-bold block mb-1.5">
                BUSINESS SYSTEM DIAGNOSTIC
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F1115] leading-[1.08] font-inter">
                Let's Diagnose<br />
                <span className="text-[#6A6C71] font-light">Your Business.</span>
              </h1>
            </div>

            {/* Subtext paragraph */}
            <p className="text-xs sm:text-sm text-[#52555C] leading-relaxed font-sans">
              Before we take a call, we want to understand how your business actually operates, so the conversation starts somewhere useful. It takes about two minutes.
            </p>

            {/* Value checklist */}
            <div className="space-y-2.5 pt-1 font-sans">
              
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 text-[#856A41] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <p className="text-xs text-[#34373F] leading-snug">
                  You get an immediate, clear read on where your operation is losing time and margin.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 text-[#856A41] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <p className="text-xs text-[#34373F] leading-snug">
                  We tell you honestly if we are not the right partners for your specific setup.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 text-[#856A41] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <p className="text-xs text-[#34373F] leading-snug">
                  No automated spam. One thorough response from the principal architect who builds systems.
                </p>
              </div>

            </div>

            {/* Contextual Real-time Badge */}
            <div className="p-3 rounded-[12px] bg-[#EAE6DF]/70 border border-[#DDD8CE] text-xs text-[#52555C] space-y-0.5">
              <div className="font-mono text-[9px] uppercase tracking-wider text-[#856A41] font-bold flex items-center gap-1.5">
                <Building2 className="w-3 h-3" />
                <span>Sector Focus</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#1F2228]">
                Configured for <strong className="text-[#0F1115]">{effectiveBusinessName}</strong>
              </p>
            </div>

          </div>

          {/* Bottom Footnote & Confidentiality Guarantee */}
          <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#E8E4DC] max-w-lg space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#856A41] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Strict Mutual Confidentiality</span>
            </div>
            <p className="text-[11px] text-[#6B6E76] leading-relaxed">
              We treat your operational information and data structures with complete executive confidentiality.
            </p>
          </div>

        </div>

        {/* =========================================================================
            RIGHT COLUMN (Deep Obsidian Dark Form — Compact & Fast UX)
        ========================================================================= */}
        <div className="lg:col-span-7 bg-[#0B0C0E] text-[#F6F4F0] p-4 sm:p-7 lg:p-10 xl:p-12 flex flex-col justify-between min-h-[520px] lg:min-h-full relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/5 blur-[120px] pointer-events-none" />

          {!isSubmitted ? (
            <div className="w-full max-w-xl mx-auto flex flex-col justify-between h-full relative z-10 space-y-4 sm:space-y-6">
              
              {/* Sleek Step Progress Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-sans text-[#8C8F98]">
                  <span>Step {currentStep} of {totalQuestions}</span>
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#C7A472]">{Math.round((currentStep / totalQuestions) * 100)}% Complete</span>
                </div>
                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#C7A472] transition-all duration-300 ease-out"
                    style={{ width: `${(currentStep / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Dynamic Question Container */}
              <div className="flex-1 flex flex-col justify-center py-1 sm:py-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="space-y-4 sm:space-y-5"
                  >
                    
                    {/* -------------------------------------------------------------
                        QUESTION 1: STRATEGIC OPPORTUNITY LOSS (Point 8)
                    ------------------------------------------------------------- */}
                    {currentStep === 1 && (
                      <div className="space-y-3 sm:space-y-3.5">
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#C7A472] block mb-1">
                            WHERE YOUR BUSINESS LOSES THE MOST
                          </span>
                          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug font-inter">
                            Where do you believe your business is currently losing the most opportunity?
                          </h2>
                          <p className="text-[11px] sm:text-xs text-[#8C8F98] mt-1">
                            Select the primary area where you feel your business is leaking time, margin, or growth:
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                          {opportunityOptions.map((opt, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setOpportunityLoss(opt);
                                setValidationError(null);
                              }}
                              className={`p-3 sm:p-3.5 rounded-[10px] border transition-all cursor-pointer flex items-center justify-between text-xs sm:text-[13px] ${
                                opportunityLoss === opt
                                  ? 'bg-white/12 border-[#C7A472] text-white font-semibold ring-1 ring-[#C7A472]/40'
                                  : 'bg-white/[0.03] border-white/10 text-[#C4C7D0] hover:bg-white/[0.06] hover:border-white/20'
                              }`}
                            >
                              <span className="leading-snug">{opt}</span>
                              {opportunityLoss === opt && <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A472] shrink-0 ml-2" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* -------------------------------------------------------------
                        QUESTION 2: BUSINESS TYPE & CUSTOM OPTION (Point 4)
                    ------------------------------------------------------------- */}
                    {currentStep === 2 && (
                      <div className="space-y-3.5 sm:space-y-4">
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#C7A472] block mb-1">
                            YOUR BUSINESS TYPE
                          </span>
                          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug font-inter">
                            What best describes your business?
                          </h2>
                        </div>

                        <div className="space-y-2.5 relative">
                          <label className="text-[11px] sm:text-xs text-[#8C8F98] font-medium block">
                            Select your industry or business model *
                          </label>

                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                              className="w-full text-left py-2.5 px-0 border-b border-white/20 hover:border-white/50 text-base sm:text-lg text-white font-medium focus:outline-none flex items-center justify-between cursor-pointer transition-colors"
                            >
                              <span>{businessType}</span>
                              <ChevronDown className={`w-4 h-4 text-[#8C8F98] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-white' : ''}`} />
                            </button>

                            {/* Dropdown Options */}
                            {isDropdownOpen && (
                              <div className="absolute top-full left-0 w-full mt-1.5 bg-[#161820] border border-white/15 rounded-[14px] shadow-2xl p-1.5 z-50 max-h-64 overflow-y-auto backdrop-blur-md">
                                {businessTypeOptions.map((option, idx) => (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleSelectBusinessType(option)}
                                    className={`w-full text-left px-3 py-2 rounded-[8px] text-xs sm:text-[13px] transition-colors flex items-center justify-between cursor-pointer ${
                                      businessType === option 
                                        ? 'bg-white/15 text-white font-semibold' 
                                        : 'text-[#C4C7D0] hover:bg-white/5 hover:text-white'
                                    }`}
                                  >
                                    <div>
                                      <div className="font-medium text-white">{option}</div>
                                      <div className="text-[9px] text-[#8C8F98]">{INDUSTRY_PROFILES[option]?.category}</div>
                                    </div>
                                    {businessType === option && (
                                      <Check className="w-3.5 h-3.5 text-[#C7A472]" />
                                    )}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Custom Business Type Input if 'Other' selected */}
                          {businessType === 'Other / My Industry Isn’t Listed' && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="pt-2 space-y-1"
                            >
                              <label className="text-[11px] text-[#C7A472] font-medium block">
                                Please specify your industry or business type *
                              </label>
                              <input
                                type="text"
                                value={customBusinessType}
                                onChange={(e) => {
                                  setCustomBusinessType(e.target.value);
                                  setValidationError(null);
                                }}
                                placeholder="e.g. Real Estate Development, Manufacturing, Fitness Club, etc."
                                className="w-full bg-white/5 border border-white/20 rounded-[8px] px-3 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C7A472]"
                              />
                            </motion.div>
                          )}

                          <div className="text-[10px] text-[#8C8F98]">
                            Beckon builds custom architectures across specialized industries and multi-entity operations.
                          </div>
                        </div>
                      </div>
                    )}

                    {/* -------------------------------------------------------------
                        QUESTION 3: ANNUAL REVENUE SCALE
                    ------------------------------------------------------------- */}
                    {currentStep === 3 && (
                      <div className="space-y-3 sm:space-y-3.5">
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#C7A472] block mb-1">
                            APPROXIMATE SIZE • {effectiveBusinessName}
                          </span>
                          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug font-inter">
                            What is your approximate annual revenue?
                          </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                          {revenueOptions.map((rev, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setRevenueRange(rev);
                                setValidationError(null);
                              }}
                              className={`p-3 sm:p-3.5 rounded-[10px] border transition-all cursor-pointer flex items-center justify-between text-xs sm:text-[13px] ${
                                revenueRange === rev
                                  ? 'bg-white/12 border-[#C7A472] text-white font-semibold ring-1 ring-[#C7A472]/40'
                                  : 'bg-white/[0.03] border-white/10 text-[#C4C7D0] hover:bg-white/[0.06] hover:border-white/20'
                              }`}
                            >
                              <span>{rev}</span>
                              {revenueRange === rev && <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A472]" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* -------------------------------------------------------------
                        QUESTION 4: TEAM SIZE
                    ------------------------------------------------------------- */}
                    {currentStep === 4 && (
                      <div className="space-y-3 sm:space-y-3.5">
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#C7A472] block mb-1">
                            TEAM &amp; STAFF • {effectiveBusinessName}
                          </span>
                          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug font-inter">
                            How many people work in your business?
                          </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                          {teamSizeOptions.map((size, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setTeamSize(size);
                                setValidationError(null);
                              }}
                              className={`p-3 sm:p-3.5 rounded-[10px] border transition-all cursor-pointer flex items-center justify-between text-xs sm:text-[13px] ${
                                teamSize === size
                                  ? 'bg-white/12 border-[#C7A472] text-white font-semibold ring-1 ring-[#C7A472]/40'
                                  : 'bg-white/[0.03] border-white/10 text-[#C4C7D0] hover:bg-white/[0.06] hover:border-white/20'
                              }`}
                            >
                              <span>{size}</span>
                              {teamSize === size && <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A472]" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* -------------------------------------------------------------
                        QUESTION 5: PRIMARY FRICTION (Point 5 - Outcome focused)
                    ------------------------------------------------------------- */}
                    {currentStep === 5 && (
                      <div className="space-y-3 sm:space-y-3.5">
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#C7A472] block mb-1">
                            DAY-TO-DAY CHALLENGES • {effectiveBusinessName}
                          </span>
                          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug font-inter">
                            What causes the most friction in your business today?
                          </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                          {frictionOptions.map((fn, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setPrimaryFriction(fn);
                                setValidationError(null);
                              }}
                              className={`p-3 sm:p-3.5 rounded-[10px] border transition-all cursor-pointer flex items-center justify-between text-xs sm:text-[13px] ${
                                primaryFriction === fn
                                  ? 'bg-white/12 border-[#C7A472] text-white font-semibold ring-1 ring-[#C7A472]/40'
                                  : 'bg-white/[0.03] border-white/10 text-[#C4C7D0] hover:bg-white/[0.06] hover:border-white/20'
                              }`}
                            >
                              <span className="leading-snug">{fn}</span>
                              {primaryFriction === fn && <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A472] shrink-0 ml-2" />}
                            </div>
                          ))}
                        </div>

                        {/* Custom friction input if 'Something else' */}
                        {primaryFriction === 'Something else' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="pt-1.5 space-y-1"
                          >
                            <label className="text-[11px] text-[#C7A472] font-medium block">
                              Describe what causes the friction in your words *
                            </label>
                            <input
                              type="text"
                              value={customFriction}
                              onChange={(e) => {
                                setCustomFriction(e.target.value);
                                setValidationError(null);
                              }}
                              placeholder="e.g. Invoices are manually typed into two separate systems..."
                              className="w-full bg-white/5 border border-white/20 rounded-[8px] px-3 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#C7A472]"
                            />
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* -------------------------------------------------------------
                        QUESTION 6: SOFTWARE TOOLS (Point 6 - Flexible & Regional)
                    ------------------------------------------------------------- */}
                    {currentStep === 6 && (
                      <div className="space-y-3 sm:space-y-3.5">
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#C7A472] block mb-1">
                            CURRENT TOOLS &amp; APPS
                          </span>
                          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug font-inter">
                            Which software or tools do you currently rely on?
                          </h2>
                          <p className="text-[11px] sm:text-xs text-[#8C8F98] mt-1">
                            Select all that apply, or add custom tools used in your business:
                          </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                          {defaultToolPool.map((tool, idx) => {
                            const isSel = selectedTools.includes(tool);
                            return (
                              <div
                                key={idx}
                                onClick={() => toggleTool(tool)}
                                className={`p-2.5 sm:p-3 rounded-[8px] border transition-all cursor-pointer flex items-center justify-between text-[11px] sm:text-xs ${
                                  isSel
                                    ? 'bg-white/12 border-[#C7A472] text-white font-medium ring-1 ring-[#C7A472]/40'
                                    : 'bg-white/[0.03] border-white/10 text-[#C4C7D0] hover:bg-white/[0.06]'
                                }`}
                              >
                                <span className="truncate pr-1">{tool}</span>
                                {isSel && <Check className="w-3.5 h-3.5 text-[#C7A472] shrink-0" />}
                              </div>
                            );
                          })}
                        </div>

                        {/* Optional Custom Tool Addition */}
                        <div className="pt-1 flex items-center gap-2">
                          <input
                            type="text"
                            value={customToolInput}
                            onChange={(e) => setCustomToolInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddCustomTool();
                              }
                            }}
                            placeholder="Add other software or regional tool..."
                            className="flex-1 bg-white/5 border border-white/15 rounded-[8px] px-3 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#C7A472]"
                          />
                          <button
                            type="button"
                            onClick={handleAddCustomTool}
                            className="px-3 py-2 rounded-[8px] bg-white/10 hover:bg-white/20 text-xs text-white font-medium flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5 text-[#C7A472]" />
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* -------------------------------------------------------------
                        QUESTION 7: SYSTEM CONNECTIVITY (Point 7 - Simplified)
                    ------------------------------------------------------------- */}
                    {currentStep === 7 && (
                      <div className="space-y-3 sm:space-y-3.5">
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#C7A472] block mb-1">
                            CONNECTIVITY STATUS
                          </span>
                          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug font-inter">
                            Do your software tools communicate automatically?
                          </h2>
                        </div>
                        
                        <div className="space-y-2 pt-0.5">
                          {integrationOptions.map((integ, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setSystemIntegrationStatus(integ);
                                setValidationError(null);
                              }}
                              className={`p-3 sm:p-3.5 rounded-[10px] border transition-all cursor-pointer flex items-center justify-between text-xs sm:text-[13px] ${
                                systemIntegrationStatus === integ
                                  ? 'bg-white/12 border-[#C7A472] text-white font-semibold ring-1 ring-[#C7A472]/40'
                                  : 'bg-white/[0.03] border-white/10 text-[#C4C7D0] hover:bg-white/[0.06] hover:border-white/20'
                              }`}
                            >
                              <span className="leading-snug">{integ}</span>
                              {systemIntegrationStatus === integ && <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A472] shrink-0 ml-2" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* -------------------------------------------------------------
                        QUESTION 8: WASTED ADMIN TIME (Point 9)
                    ------------------------------------------------------------- */}
                    {currentStep === 8 && (
                      <div className="space-y-3 sm:space-y-3.5">
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#C7A472] block mb-1">
                            EFFICIENCY QUANTIFIER
                          </span>
                          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug font-inter">
                            How much time is lost each week to manual data entry &amp; administration?
                          </h2>
                        </div>
                        
                        <div className="space-y-2 pt-0.5">
                          {wastedHoursOptions.map((hrs, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setWastedHours(hrs);
                                setValidationError(null);
                              }}
                              className={`p-3 sm:p-3.5 rounded-[10px] border transition-all cursor-pointer flex items-center justify-between text-xs sm:text-[13px] ${
                                wastedHours === hrs
                                  ? 'bg-white/12 border-[#C7A472] text-white font-semibold ring-1 ring-[#C7A472]/40'
                                  : 'bg-white/[0.03] border-white/10 text-[#C4C7D0] hover:bg-white/[0.06] hover:border-white/20'
                              }`}
                            >
                              <span>{hrs}</span>
                              {wastedHours === hrs && <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A472]" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* -------------------------------------------------------------
                        QUESTION 9: TIMELINE & BUDGET (Point 10 - Under $5k option)
                    ------------------------------------------------------------- */}
                    {currentStep === 9 && (
                      <div className="space-y-3 sm:space-y-3.5">
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#C7A472] block mb-1">
                            ENGAGEMENT PARAMETERS
                          </span>
                          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug font-inter">
                            Target implementation timeline &amp; planned investment
                          </h2>
                        </div>

                        <div className="space-y-3 pt-0.5">
                          <div>
                            <label className="text-[11px] text-[#8C8F98] block mb-1.5 font-medium">Desired timeline *</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {timelineOptions.map((t, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setTimeline(t);
                                    setValidationError(null);
                                  }}
                                  className={`p-2.5 rounded-[8px] text-xs text-left border transition-all cursor-pointer ${
                                    timeline === t 
                                      ? 'bg-white/15 border-[#C7A472] text-white font-medium ring-1 ring-[#C7A472]/30' 
                                      : 'bg-white/[0.03] border-white/10 text-[#C4C7D0] hover:bg-white/[0.06]'
                                  }`}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="text-[11px] text-[#8C8F98] block mb-1.5 font-medium">Planned investment budget *</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                              {budgetOptions.map((b, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setBudgetRange(b);
                                    setValidationError(null);
                                  }}
                                  className={`p-2 rounded-[8px] text-[11px] sm:text-xs text-center border transition-all cursor-pointer truncate ${
                                    budgetRange === b 
                                      ? 'bg-white/15 border-[#C7A472] text-white font-medium ring-1 ring-[#C7A472]/30' 
                                      : 'bg-white/[0.03] border-white/10 text-[#C4C7D0] hover:bg-white/[0.06]'
                                  }`}
                                >
                                  {b}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* -------------------------------------------------------------
                        QUESTION 10: RECIPIENT CONTACT (Point 11 - Business Assessment)
                    ------------------------------------------------------------- */}
                    {currentStep === 10 && (
                      <div className="space-y-3 sm:space-y-3.5">
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#C7A472] block mb-1">
                            DELIVERY DESTINATION
                          </span>
                          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug font-inter">
                            Where should we send your Business Assessment?
                          </h2>
                          <p className="text-[11px] sm:text-xs text-[#8C8F98] mt-1">
                            No marketing sequences. One direct diagnostic blueprint delivered by the senior partner.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-0.5">
                          <div>
                            <label className="text-[11px] text-[#8C8F98] block mb-1 font-medium">Company Name *</label>
                            <input
                              type="text"
                              required
                              value={companyName}
                              onChange={(e) => {
                                setCompanyName(e.target.value);
                                setValidationError(null);
                              }}
                              placeholder="e.g. Atlas Enterprises"
                              className="w-full bg-white/5 border border-white/15 rounded-[8px] px-3 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C7A472]"
                            />
                          </div>

                          <div>
                            <label className="text-[11px] text-[#8C8F98] block mb-1 font-medium">Full Name *</label>
                            <input
                              type="text"
                              required
                              value={fullName}
                              onChange={(e) => {
                                setFullName(e.target.value);
                                setValidationError(null);
                              }}
                              placeholder="e.g. Sarah Jenkins"
                              className="w-full bg-white/5 border border-white/15 rounded-[8px] px-3 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C7A472]"
                            />
                          </div>

                          <div>
                            <label className="text-[11px] text-[#8C8F98] block mb-1 font-medium">Work Email *</label>
                            <input
                              type="email"
                              required
                              value={workEmail}
                              onChange={(e) => {
                                setWorkEmail(e.target.value);
                                setValidationError(null);
                              }}
                              placeholder="e.g. sarah@atlas.com"
                              className="w-full bg-white/5 border border-white/15 rounded-[8px] px-3 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C7A472]"
                            />
                          </div>

                          <div>
                            <label className="text-[11px] text-[#8C8F98] block mb-1 font-medium">Phone Number (Optional)</label>
                            <input
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder="e.g. +961 70 123456 / +1 555 0192"
                              className="w-full bg-white/5 border border-white/15 rounded-[8px] px-3 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C7A472]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] text-[#8C8F98] block mb-1 font-medium">Specific workflow notes or software context (Optional)</label>
                          <textarea
                            rows={2}
                            value={additionalNotes}
                            onChange={(e) => setAdditionalNotes(e.target.value)}
                            placeholder={activeProfile.sampleNotesPlaceholder}
                            className="w-full bg-white/5 border border-white/15 rounded-[8px] px-3 py-1.5 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C7A472] resize-none"
                          />
                        </div>
                      </div>
                    )}

                    {/* -------------------------------------------------------------
                        QUESTION 11: FINAL BLUEPRINT PREVIEW (Point 12 - Credible)
                    ------------------------------------------------------------- */}
                    {currentStep === 11 && (
                      <div className="space-y-3 sm:space-y-3.5">
                        <div>
                          <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#C7A472] font-semibold">
                            READY TO GENERATE YOUR BLUEPRINT
                          </div>
                          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight mt-0.5 font-inter">
                            Business Health Preview
                          </h2>
                        </div>

                        {/* Credible Qualitative Diagnostic Cards (No pseudo-decimal artificial scores) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div className="p-3 rounded-[10px] bg-white/5 border border-white/10 space-y-0.5">
                            <div className="text-[9px] text-[#8C8F98] uppercase font-mono">System Health</div>
                            <div className="text-sm sm:text-base font-bold text-[#C7A472] leading-tight">
                              {healthData.label}
                            </div>
                            <div className="text-[10px] text-[#C4C7D0]">{healthData.detail}</div>
                          </div>

                          <div className="p-3 rounded-[10px] bg-white/5 border border-white/10 space-y-0.5">
                            <div className="text-[9px] text-[#8C8F98] uppercase font-mono">Recoverable Admin Time</div>
                            <div className="text-sm sm:text-base font-bold text-white leading-tight">
                              {recoverableTime}
                            </div>
                            <div className="text-[10px] text-[#C4C7D0]">Estimated across team &amp; leaders</div>
                          </div>

                          <div className="p-3 rounded-[10px] bg-white/5 border border-white/10 space-y-0.5">
                            <div className="text-[9px] text-[#8C8F98] uppercase font-mono">Target Priority</div>
                            <div className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                              {opportunityLoss}
                            </div>
                            <div className="text-[10px] text-[#C4C7D0]">{effectiveBusinessName}</div>
                          </div>
                        </div>

                        <div className="p-3 rounded-[10px] bg-white/[0.03] border border-white/10 text-[11px] text-[#8C8F98] space-y-1 font-sans">
                          <div className="text-white font-semibold flex items-center justify-between text-xs">
                            <span>Diagnostic Summary:</span>
                            <span className="text-[#C7A472] font-mono text-[10px]">{companyName || 'Business Lead'}</span>
                          </div>
                          <p>
                            • <strong>Primary Friction:</strong> {effectiveFriction}
                          </p>
                          <p>
                            • <strong>Current Tools:</strong> {selectedTools.join(', ') || 'Custom operational tools'}
                          </p>
                          <p>
                            • <strong>Connectivity:</strong> {systemIntegrationStatus}
                          </p>
                          <p>
                            • <strong>Deliver Blueprint to:</strong> {workEmail || 'Pending email'} ({fullName || 'Executive'})
                          </p>
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Validation Error Banner */}
              {validationError && (
                <div className="p-2.5 rounded-[8px] bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Bottom Navigation Buttons */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                
                {/* Back Button */}
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-xs font-medium cursor-pointer"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {/* Continue / Submit Button */}
                {currentStep < totalQuestions ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className={`px-6 py-2.5 rounded-full font-semibold text-xs inline-flex items-center gap-2 cursor-pointer transition-all shadow-md active:scale-95 ${
                      stepValidation.valid
                        ? 'bg-white text-[#0B0C0E] hover:bg-[#F4EFE6]'
                        : 'bg-white/40 text-[#0B0C0E] hover:bg-white/60'
                    }`}
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="px-6 py-2.5 rounded-full bg-[#C7A472] text-[#0B0C0E] hover:bg-white font-bold text-xs inline-flex items-center gap-2 cursor-pointer transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit & Generate Blueprint'}</span>
                    {!isSubmitting && <Sparkles className="w-3.5 h-3.5 text-[#0B0C0E]" />}
                  </button>
                )}

              </div>

            </div>
          ) : (
            
            /* =========================================================================
                SUBMISSION COMPLETED SCREEN
            ========================================================================= */
            <div className="w-full max-w-xl mx-auto my-auto py-8 text-center space-y-6 relative z-10">
              
              <div className="w-14 h-14 rounded-full bg-[#C7A472]/15 border border-[#C7A472]/40 text-[#C7A472] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#C7A472] uppercase font-bold tracking-widest">
                  ASSESSMENT REGISTERED
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-inter">
                  Thank You, {fullName || 'Partner'}.
                </h2>
                <p className="text-xs sm:text-sm text-[#8C8F98] leading-relaxed max-w-md mx-auto">
                  We have mapped your responses for <strong>{companyName || effectiveBusinessName}</strong>. A Senior Practice Lead will inspect your architecture and deliver your custom Business Assessment Blueprint to <strong>{workEmail}</strong>.
                </p>
              </div>

              {/* Diagnostic Card Summary */}
              <div className="p-5 rounded-[18px] bg-white/5 border border-white/10 text-left font-sans text-xs space-y-2.5">
                <div className="text-[10px] font-mono uppercase text-[#8C8F98] tracking-wider">
                  Executive Diagnostic Summary
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#8C8F98]">Industry Archetype:</span>
                  <span className="text-white font-medium">{effectiveBusinessName}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#8C8F98]">Opportunity Focus:</span>
                  <span className="text-[#C7A472] font-semibold">{opportunityLoss}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#8C8F98]">Primary Friction:</span>
                  <span className="text-white font-medium truncate max-w-[200px]">{effectiveFriction}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#8C8F98]">Est. Recoverable Hours:</span>
                  <span className="text-white font-medium">{recoverableTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C8F98]">Connectivity Status:</span>
                  <span className="text-white font-medium">{systemIntegrationStatus}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('/');
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-[#0B0C0E] hover:bg-[#F4EFE6] font-semibold text-xs transition-all cursor-pointer"
                >
                  Return to Home
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 text-xs font-medium transition-all cursor-pointer"
                >
                  Retake Assessment
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
