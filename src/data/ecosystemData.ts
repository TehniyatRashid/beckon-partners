import { SoftwareIntegration } from '../types';

export const SOFTWARE_INTEGRATIONS: SoftwareIntegration[] = [
  {
    id: 'pos-systems',
    name: 'Point of Sale (POS)',
    category: 'POS',
    description: 'Connect store and restaurant point-of-sale transactions directly into central inventory, recipe costing, and customer loyalty databases.',
    howWeConnect: 'Live webhook middleware extracts line-item sales, table turn times, and tender types as orders are closed.',
    examples: ['Omega', 'Lightspeed', 'Square', 'Oracle MICROS', 'Toast', 'Revel']
  },
  {
    id: 'accounting',
    name: 'Accounting & Financial Ledger',
    category: 'Accounting',
    description: 'Sync invoice generation, accounts receivable, bill payments, and profit & loss balances without double re-typing.',
    howWeConnect: 'Bi-directional API connectors automatically sync customer invoices, supplier bills, and payment settlements.',
    examples: ['Xero', 'QuickBooks', 'Sage', 'Zoho Books', 'Tally']
  },
  {
    id: 'crm-sales',
    name: 'CRM & Lead Pipelines',
    category: 'CRM',
    description: 'Unify incoming leads across phone, web, WhatsApp, and social channels into structured pipeline stages.',
    howWeConnect: 'Automatic lead creation with instant AI phone/WhatsApp transcripts attached to contact records.',
    examples: ['HubSpot', 'Salesforce', 'Pipedrive', 'Zoho CRM', 'Custom Internal CRMs']
  },
  {
    id: 'erp-operations',
    name: 'ERP & Core Operations',
    category: 'ERP',
    description: 'Bridge enterprise resource planning backends with field worker mobile interfaces and executive dashboards.',
    howWeConnect: 'REST / GraphQL enterprise bridges pushing operational status changes and stock movements instantly.',
    examples: ['SAP', 'Microsoft Dynamics 365', 'Odoo', 'NetSuite', 'Custom ERPs']
  },
  {
    id: 'inventory-costing',
    name: 'Inventory & Materials Management',
    category: 'Inventory',
    description: 'Track raw ingredient depletion, material variance, purchase order generation, and supplier price changes.',
    howWeConnect: 'Recipe and material BOM engines comparing POS depletion against physical supplier deliveries.',
    examples: ['MarketMan', 'Unleashed', 'Katana', 'Cin7', 'Custom Stock Engines']
  },
  {
    id: 'messaging-ai',
    name: 'Messaging & AI Telephony',
    category: 'Messaging',
    description: 'Deploy 24/7 AI voice receptionists and WhatsApp conversational engines that qualify callers and schedule jobs.',
    howWeConnect: 'WhatsApp Business API + Voice Webhooks connected directly to live scheduling calendars.',
    examples: ['WhatsApp Business API', 'Twilio Voice', 'Meta Conversational API', 'Google Voice Webhooks']
  },
  {
    id: 'bi-analytics',
    name: 'Business Intelligence & Dashboards',
    category: 'BI & Analytics',
    description: 'Consolidate multi-system data streams into unified real-time executive control panels.',
    howWeConnect: 'Automated ETL pipelines feeding centralized reporting tables with real-time anomaly detection.',
    examples: ['Beckon Executive Core', 'Power BI', 'Looker', 'Tableau', 'Custom Dashboards']
  }
];
