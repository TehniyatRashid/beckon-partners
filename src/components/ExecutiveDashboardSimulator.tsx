import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  DollarSign, 
  Clock, 
  Users, 
  Filter, 
  Download,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';

export const ExecutiveDashboardSimulator: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'central' | 'north' | 'south'>('all');
  const [activePeriod, setActivePeriod] = useState<'today' | 'week' | 'month'>('today');

  const getMetrics = () => {
    switch (selectedRegion) {
      case 'central':
        return {
          revenue: '$148,200',
          grossMargin: '69.2%',
          cogsVariance: '-1.8%',
          leadSla: '48 sec',
          cancellations: '1.2%',
          activeAlerts: 1
        };
      case 'north':
        return {
          revenue: '$96,500',
          grossMargin: '64.8%',
          cogsVariance: '+3.4%',
          leadSla: '72 sec',
          cancellations: '2.8%',
          activeAlerts: 3
        };
      case 'south':
        return {
          revenue: '$112,800',
          grossMargin: '67.4%',
          cogsVariance: '+0.5%',
          leadSla: '52 sec',
          cancellations: '1.6%',
          activeAlerts: 1
        };
      default:
        return {
          revenue: '$357,500',
          grossMargin: '67.8%',
          cogsVariance: '+0.7%',
          leadSla: '54 sec',
          cancellations: '1.8%',
          activeAlerts: 2
        };
    }
  };

  const metrics = getMetrics();

  return (
    <section className="py-20 bg-[#070707] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono-tech uppercase text-neutral-500 tracking-wider mb-2">
              —— EXECUTIVE INTELLIGENCE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              From Running The Business By Instinct<br />
              <span className="text-neutral-400 font-normal">To Running It With Real-Time Visibility.</span>
            </h2>
          </div>

          <div className="text-xs font-mono-tech text-neutral-500 bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
            ILLUSTRATIVE SYSTEM PREVIEW · LIVE ETL CONNECTED
          </div>
        </div>

        {/* Control Panel Simulator */}
        <div className="card-dark p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-[#0B0B0B] shadow-2xl">
          
          {/* Top Filter Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80 mb-8">
            
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-neutral-500" />
              <span className="text-xs font-mono-tech uppercase text-neutral-400">Site Filter:</span>
              <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800 text-xs font-mono-tech">
                <button
                  onClick={() => setSelectedRegion('all')}
                  className={`px-3 py-1 rounded transition-colors ${selectedRegion === 'all' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
                >
                  All Locations (3)
                </button>
                <button
                  onClick={() => setSelectedRegion('central')}
                  className={`px-3 py-1 rounded transition-colors ${selectedRegion === 'central' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
                >
                  Central Depot
                </button>
                <button
                  onClick={() => setSelectedRegion('north')}
                  className={`px-3 py-1 rounded transition-colors ${selectedRegion === 'north' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
                >
                  North Hub
                </button>
                <button
                  onClick={() => setSelectedRegion('south')}
                  className={`px-3 py-1 rounded transition-colors ${selectedRegion === 'south' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
                >
                  South Hub
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-tech">
              <span className="text-neutral-500">Period:</span>
              <button
                onClick={() => setActivePeriod('today')}
                className={`px-2.5 py-1 rounded border ${activePeriod === 'today' ? 'border-neutral-500 bg-neutral-800 text-white' : 'border-neutral-800 text-neutral-500'}`}
              >
                MTD
              </button>
              <button
                onClick={() => setActivePeriod('week')}
                className={`px-2.5 py-1 rounded border ${activePeriod === 'week' ? 'border-neutral-500 bg-neutral-800 text-white' : 'border-neutral-800 text-neutral-500'}`}
              >
                QTD
              </button>
            </div>

          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <div className="text-[11px] font-mono-tech uppercase text-neutral-500 mb-1 flex justify-between">
                <span>Net Gross Sales</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-extrabold text-white font-mono-tech">{metrics.revenue}</div>
              <div className="text-[10px] text-emerald-400 font-mono-tech mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>+12.4% vs budget forecast</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <div className="text-[11px] font-mono-tech uppercase text-neutral-500 mb-1 flex justify-between">
                <span>Gross Contribution Margin</span>
                <BarChart3 className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-2xl font-extrabold text-white font-mono-tech">{metrics.grossMargin}</div>
              <div className="text-[10px] text-neutral-400 font-mono-tech mt-1">
                Target: 68.0% minimum
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <div className="text-[11px] font-mono-tech uppercase text-neutral-500 mb-1 flex justify-between">
                <span>Supplier Price Variance</span>
                <ShieldAlert className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-extrabold text-white font-mono-tech">{metrics.cogsVariance}</div>
              <div className="text-[10px] text-amber-400 font-mono-tech mt-1">
                Auto-scanned from vendor bills
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <div className="text-[11px] font-mono-tech uppercase text-neutral-500 mb-1 flex justify-between">
                <span>Inbound Lead SLA</span>
                <Clock className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-extrabold text-emerald-400 font-mono-tech">{metrics.leadSla}</div>
              <div className="text-[10px] text-neutral-400 font-mono-tech mt-1">
                Phone & WhatsApp response median
              </div>
            </div>

          </div>

          {/* Active Operational Alerts Stream */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
            <div className="text-xs font-mono-tech uppercase text-neutral-400 mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                Active Anomaly Detection Alerts ({metrics.activeAlerts})
              </span>
              <span className="text-[11px] text-neutral-500">Auto-Escalation Enabled</span>
            </div>

            <div className="space-y-2 text-xs font-mono-tech">
              <div className="p-3 rounded bg-amber-950/30 border border-amber-900/50 text-amber-200 flex items-start justify-between gap-3">
                <div>
                  <span className="font-bold">[SUPPLIER ALERT]</span> Supplier #104 increased Butter / Oil prices by 14% on Invoice #4021.
                  <div className="text-[10px] text-neutral-400 mt-0.5">Impact: -$840/week on central depot margin if unadjusted.</div>
                </div>
                <button className="px-2.5 py-1 rounded bg-amber-900/80 text-amber-100 text-[10px] hover:bg-amber-800 whitespace-nowrap">
                  Adjust Prices
                </button>
              </div>

              {metrics.activeAlerts > 1 && (
                <div className="p-3 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-start justify-between gap-3">
                  <div>
                    <span className="font-bold text-neutral-200">[SLA NOTICE]</span> North Hub evening shift missed 2 quote follow-up calls.
                    <div className="text-[10px] text-neutral-500 mt-0.5">Automated WhatsApp follow-up sequence triggered as safety backup.</div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold">Resolved</span>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
